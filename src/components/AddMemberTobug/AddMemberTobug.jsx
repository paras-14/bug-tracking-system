import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/slices/userSlices';
import "./AddMemberTobug.scss"
import { ImCross } from 'react-icons/im'
import AddMemberCard from "../AddMemberCrad/AddMemberCard"
import { closeAddMembersToBugModal } from '../../redux/slices/bugModal'
import {updateBug} from "../../redux/slices/bugSlice"
import SingleProjectCard from '../SingleProjectCard/SingleProjectCard';


const AddMemberTobug = () => {

  const { show3,newBugname,newprojectname} = useSelector((state) => state.bugModal)

  const { CurrentMembers } = useSelector((state) => { return state.projectModal })

  const dispatch = useDispatch();

  // const { users, loading } = useSelector((state) => {
  //   return state.users
  // })

  const { projects } = useSelector((state) => state.projects)

  const [selectedProject,setselectedProject]= useState({})

  const [selectedProjectDevelopers,setselectedProjectDevelopers]= useState({})

  const [selectedProjectTesters,setselectedProjectTesters]= useState({})

  useEffect(()=>{
    const selectedProject = projects.find((project) => project.projectName === newprojectname);
    

    console.log("abhijeet");

    if (selectedProject) {
      setselectedProject(selectedProject)
      const selectedProjectDevelopers = selectedProject.members?.filter((member) => member.role === "Developer");
      setselectedProjectDevelopers(selectedProjectDevelopers);
  
      const selectedProjectTesters = selectedProject.members?.filter((member) => member.role === "Tester");
      setselectedProjectTesters(selectedProjectTesters);
    }
    console.log("sahi me developer",selectedProject);
  },[newprojectname])

  // useEffect(() => {
  //   dispatch(getAllUsers())
  // }, [])

  // if (loading) {
  //   return <h2>Loading.....</h2>
  // }


  return (
    <>
      {show3 &&
        
        <div className="modal2">
          {/* <div className="overlay"></div> */}
          <div className="AddMember">
            <div className="Cross2">
            <ImCross className='cross' onClick={() => { dispatch(closeAddMembersToBugModal()) }} />
            </div>
          
            <div className="AddMemberContainer">
              <div className="AddMembersDeveloper">
                <div className="AddMembersDeveloperTitle">
                  <h2>DEVELOPERS</h2>
                </div>
                <div className="ScrollMembers">
                {selectedProjectDevelopers?.length>0 && 
                               selectedProjectDevelopers.map((user,index)=>{
                                   console.log("Object ",user);
                                   return <AddMemberCard user={user} key={index}/>
                               })
                            }
                            {selectedProjectDevelopers?.length<1 && 
                               <p style={{display:"flex",justifyContent:"center",marginTop:"80px"}}>No Member Has Been Assigned yet</p>
                            }
                </div>
              </div>
              <div className="AddMembersTester">
                <div className="AddMembersDeveloperTitle">
                  <h2>TESTERS</h2>
                </div>
                <div className="ScrollMembers">
                {selectedProjectTesters?.length>0 && 
                               selectedProjectTesters.map((user,index)=>{
                                   return <AddMemberCard user={user} key={index}/>
                               })
                            }
                            {selectedProjectTesters?.length<1 && 
                               <p style={{display:"flex",justifyContent:"center",marginTop:"80px"}}>No Member Has Been Assigned yet</p>
                            }
                </div>
              </div>
            </div>

            <div className='ShowMembers'>
              <div className="AddMembersDeveloperTitle">
                <h2>Added Members</h2>
              </div>
              <div className="ScrollMembers">
                {CurrentMembers.map((obj, index) => {
                  return <h1 key={index}>{obj.role}</h1>
                })}
              </div>
              <div className="pataNahi">
                <button className="SubmItMember" onClick={()=>{dispatch(updateBug({newMembers:CurrentMembers,bugName:newBugname}))}}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default AddMemberTobug








