const { User } = require("../models");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const sendEmails= require('../helper/sendEmails');
const { BadRequestError, UnauthenticatedError } = require('../errors');
var uniqid = require('uniqid'); 

const createUser = async (req, res, next) => {
 try{
  const {
    role,
    email,
    username,
    phone,
    address,
    gender,
  } = req.body;

  if(!email || !username || !phone || !address){
    throw new BadRequestError('Please provide all the details');
  }

  const uniqueCode=uniqid();
 
  const newUser=new User({
    email,
    username,
    phone,
    role,
    address,
    gender,
    uniqueCode,
    password:"",
    image:""
  })

  // role:role?role:"Organisation Leader";
  // const userEmail=newUser.email;
  const createUser = await newUser.save();

  // role=""?"Organisation Leader":role;

  sendEmails({email,role,uniqueCode})

  res.status(200).send({status:"ok",data:createUser});

 }catch(error){
  // res.status(500).send(error.message);
  next(error);
 }

};

const updateUser=async(req,res,next)=>{
  try {
    const {email,password,uniqueCode}=req.body;
    const validUser= await User.findOne({uniqueCode});

    if(!password || !email || !uniqueCode){
      throw new BadRequestError('Please provide all the details');
    }

    if (!validUser) {
      throw new UnauthenticatedError('Please Enter Correct UniqueCode')
    }
    
    // const oldSchema=await User.findOne(email)
    // const newSchema = {...oldSchema,}
    // console.log(updateObj);

    const salt = bcrypt.genSaltSync(10);
    const bcrypt_password = bcrypt.hashSync(password, salt);

    const updatedUser=await User.findOneAndUpdate({email : email},{password:bcrypt_password,uniqueCode:uniqueCode},{
      new:true,
      runValidator:true,
    });
     
    res.status(200).send({status:"ok",data:updatedUser})

    
  } catch (error) {
    next(error);
  }
}

const getAllUser = async (req, res, next) => {
  try {
    const getUsers = await User.find();
    res.status(200).send({status:"ok",data:getUsers});
  } catch (error) {
    // res.status(500).send({ message: "internal server error" });
    next(error);
  }
};

const getSingleUser=async(req,res,next)=>{
  try {
    const {email}=req.auth;
    const singleUser=await User.findOne({email});
    res.status(200).send({status:"ok",data:singleUser})
  } catch (error) {
    next(error)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      throw new BadRequestError('Please provide email and password')
    }
  
    const oldUser = await User.findOne({ email })
    if (!oldUser) {
      throw new UnauthenticatedError('Invalid Credentials')
    }
   
    if (await bcrypt.compare(password, oldUser.password)) {
      const token = jwt.sign({email: oldUser.email, username: oldUser.username,phone: oldUser.phone,role:oldUser.role,address:oldUser.address}, `${process.env.JWT_SECRET}`,{ expiresIn: '1h' })
  
      if (res.status(201)) {
        return res.status(201).send({status:"ok",token :  token })
      } 
      else {
        throw new UnauthenticatedError('Invalid Credentials')
      }
    }
    res.status(401).send({message : "Invalid Credentials"})
  } catch (error) {
    // res.status(500).send(error.message);
    next(error);
  }
}


const DeleteUser=async(req,res,next)=>{
  const {email}=req.body;
  // const email = data
  // console.log("Body->",req.body)
  try {
    // console.log("Email Aya ",email);
    const deleteUser=await User.findOneAndDelete({email:email})
    // console.log("Deletd User",deleteUser);
    // console.log("Whelloo ")
    const remainingUser=await User.find({})
    res.status(200).send({status:"ok",data:remainingUser})
  } catch (error) {
    // res.status(500).json(error)
    // console.log(error);
    next(error)
  }
}


module.exports = {
  createUser,
  getAllUser,
  getSingleUser,
  loginUser,
  updateUser,
  DeleteUser
};


