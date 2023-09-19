
const express=require("express");
const route=express.Router();
const {loginSignupController,projectController,bugsController}=require("../controllers");
const{authentication}=require("../middleware")


//userRoutes
route.post("/create/user",[],loginSignupController.createUser);
route.patch("/signup/user",[],loginSignupController.updateUser);
route.get("/getAll/user",[],loginSignupController.getAllUser);
route.get("/get/user",[authentication],loginSignupController.getSingleUser);
route.post("/login/user",[],loginSignupController.loginUser);
route.delete("/delete/user",[],loginSignupController.DeleteUser);


//projectRoutes
route.post("/create/project",[],projectController.createProject)
route.get("/getAllprojects/orgLeader",[],projectController.getAllProjectsOrganisationLead)
route.get("/getAllprojects/projLeader",[authentication],projectController.getAllProjectsProjLeader)
route.get("/getAllproject/testerNdeveloper",[authentication],projectController.getAllProjectsDeveloperAndTester)
route.patch("/update/project",[],projectController.updateProject)
route.delete("/delete/project",[],projectController.DeleteProject)
route.get("/getSingleProject",[],projectController.getSingleProject)


//BugRoutes
route.post("/create/bugs",[authentication],bugsController.createBugs)
route.get("/getAll/bugs",[],bugsController.getAllBugs)
route.delete("/delete/bug",[],bugsController.DeleteBug)
route.patch("/update/bug",[],bugsController.updateBug)


module.exports=route;
