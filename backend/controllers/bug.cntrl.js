const {Bugs}=require("../models");
// const { findOne } = require("../models/userSchema");
const{BadRequestError}=require("../errors")


const createBugs = async (req, res, next) => {
    try{
        const {
            bugName,
            project,
            bugDate,
            bugPriority,
            deadline,
            status
        }=req.body;
   
        if(!bugName || !project || !bugDate  || !bugPriority || !deadline || !status){
        throw new BadRequestError('Please provide all the details');
        }

        const raiser=req.auth.email;

        const newBug=new Bugs({
            bugName,
            project,
            bugDate,
            bugPriority,
            deadline,
            status,
            raiser:raiser
         })
   
        // const userEmail=newUser.email;
        const createBug = await newBug.save();
   
        res.status(200).send({status:"ok",data:createBug});
   
    }catch(error){
        // res.status(500).send(error.message);
        next(error);
    }
};


const getAllBugs=async(req,res,next)=>{
    try {
        const allBugs=await Bugs.find({});
        res.status(200).send({status:"ok",data:allBugs})
    } catch (error) {
        next(error)
    }
}

const DeleteBug=async(req,res,next)=>{
    const {bugName}=req.body;
    try {
      const deleteBug=await Bugs.findOneAndDelete({bugName})
      const remainingBugs=await Bugs.find({})
      res.status(200).send({status:"ok",data:remainingBugs})
    } catch (error) {
      next(error)
    }
}

const updateBug=async(req,res,next)=>{
    try {
        const {newMembers,bugName}=req.body;
        // console.log("Bug Name-> ",bugName);
        const existingBug=await Bugs.findOne({bugName});
        console.log("existing Bug modal ",bugName);
        if(!existingBug){
            throw new BadRequestError("Bug Name Is Incorrect")
        }
        const updatedBug=await Bugs.findOneAndUpdate({bugName : bugName},{$set:{membersBug:[...existingBug.membersBug,...newMembers]}},{
            new:true,
            runValidator:true,
          });

          const allBugs=await Bugs.find({});
        
        //   console.log("UpdatedProject",updatedBug)
        res.status(200).send({status:"ok",data:allBugs})
    } catch (error) {
        next(error)
    }

}

module.exports={
    createBugs,
    getAllBugs,
    DeleteBug,
    updateBug
}