const {Project}= require("../models")
const { BadRequestError} = require('../errors');

const createProject = async (req, res, next) => {
    try{
        const {
            type,
            projectName,
            submissionDate,
            duration,
            clientName,
            clientAddress,
            clientPhone,
            clientEmail,
            leader,
            leaderEmail,
            department,
            description,
            members
        }=req.body;
   
        if(!projectName || !submissionDate || !duration || !leader || !department || !description || !type){
        throw new BadRequestError('Please provide all the details');
        }

        const newProject=new Project({
            projectName,
            submissionDate,
            duration,
            clientName,
            clientAddress,
            clientPhone,
            clientEmail,
            leader,
            leaderEmail,
            department,
            description,
            members
         })
   
        // const userEmail=newUser.email;
        const createProject = await newProject.save();
   
        res.status(200).send({status:"ok",data:createProject});
   
    }catch(error){
        next(error);
    }
};

const getAllProjectsOrganisationLead=async(req,res,next)=>{
    try {
        const projects=await Project.find({});
        res.status(200).send({status:"ok",data:projects});
    } catch (error) {
        next(error)
    }
}

const getAllProjectsProjLeader=async(req,res,next)=>{
    try {
        const {email} =req.auth;
        const projects=await Project.find({leaderEmail:email});
        res.status(200).send({status:"ok",data:projects});
    } catch (error) {
        next(error)
    }
}

const getAllProjectsDeveloperAndTester=async(req,res,next)=>{
    try {
        const {email} =req.auth;
        console.log(email)
        // const projects=await Project.find({ membersEmail: { $elemMatch: { $eq: email } } });
        const projects=await Project.find({ "members.email": email });
        res.status(200).send({status:"ok",data:projects});
    } catch (error) {
        next(error)
    }
}

const updateProject=async(req,res,next)=>{
    try {
        const {newMembers,projectName}=req.body;
        // console.log("really ?? ",projectName);
        const existingProjects=await Project.findOne({projectName});
        // console.log("Really serously ??");
        // console.log("existing project ",existingProjects);
        if(!existingProjects){
            // console.log("error");
            throw new BadRequestError("Project Name Is Incorrect")
        }
        const updatedProject=await Project.findOneAndUpdate({projectName : projectName},{$set:{members:[...existingProjects.members,...newMembers]}},{
            new:true,
            runValidator:true,
          });

          const allProject=await Project.find({});
        
        //   console.log("UpdatedProject",updatedProject)
        res.status(200).send({status:"ok",data:allProject})
    } catch (error) {
        next(error)
    }

    

}


const DeleteProject=async(req,res,next)=>{
    const {projectName}=req.body;
    try {
      const deleteProject=await Project.findOneAndDelete({projectName})
      const remainingProject=await Project.find({})
      res.status(200).send({status:"ok",data:remainingProject})
    } catch (error) {
      next(error)
    }
}

const getSingleProject=async(req,res,next)=>{
    const {projectName}=req.query;
    console.log("Loda")
    try {
      const singleProject=await Project.findOne({projectName})
    //   const remainingProject=await Project.find({})
      res.status(200).send({status:"ok",data:singleProject})
    } catch (error) {
      next(error)
    }
}

module.exports={
    createProject,
    getAllProjectsOrganisationLead,
    getAllProjectsProjLeader,
    getAllProjectsDeveloperAndTester,
    updateProject,
    DeleteProject,
    getSingleProject
}