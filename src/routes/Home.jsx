import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import OrgLead from '../pages/OrgLead/OrgLead'
import AllUsers from '../pages/AllUsers/AllUsers'
import CreateUser from '../pages/CreateUser/CreateUser'
import AllProjectsLeader from '../pages/AllProjects/AllProjectsLeader'
import AllProjectsManager from '../pages/AllProjects/AllProjectsManager'
import AllProjectsTester from '../pages/AllProjects/AllProjectsTester'
import CreateProject from '../pages/CreateProject/CreateProject'
import AllBugs from '../pages/AllBugs/AllBugs'
import CreateBug from '../pages/CreateBug/CreateBug'
// import Navbar from '../components/Navbar/Navbar';



const Home = () => {
  return (
    <>
    {/* <div style={{display: "flow-root"}}> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/orgLead" element={<OrgLead/>}/>
        <Route path="/allUsers" element={<AllUsers/>}/>
        <Route path="/createUser" element={<CreateUser/>}/>
        <Route path="/allProjectsLeader" element={<AllProjectsLeader/>}/>
        <Route path="/allProjectsManager" element={<AllProjectsManager/>}/>
        <Route path="/allProjectsTester" element={<AllProjectsTester/>}/>
        <Route path="/createProject" element={<CreateProject/>}/>
        <Route path="/allBugs" element={<AllBugs/>}/>
        <Route path="/createBug" element={<CreateBug/>}/>
      </Routes>
    {/* </div> */}
   </>
  )
}

export default Home
