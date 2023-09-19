import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeSingleProjectModal } from '../../redux/slices/projectModals'
import { deleteProject} from '../../redux/slices/projectSlice';
import "./singleProjectModal.scss"
import "../ProjectCard/ProjectCard.scss"
import { ImCross } from 'react-icons/im'
import {FaPlusCircle} from "react-icons/fa";
import SingleProjectCard from '../SingleProjectCard/SingleProjectCard';
import {openAddMembersModal} from "../../redux/slices/projectModals"

const SingleProjectModal = () => {
    // const toggleLogin = useSelector((state) => state.modal.toggleLogin)
    const { show, newprojectname } = useSelector((state) => state.projectModal)
    const { projects } = useSelector((state) => state.projects)
    const dispatch = useDispatch()

//   const [ProjectName, setProjectName] = useState({projectName:""})

  const [selectedProject,setselectedProject]= useState({})

//   useEffect(() => {
//     if(ProjectName.projectName){
//       dispatch(deleteProject(ProjectName));
//     }
//   }, [ProjectName]);

  useEffect(()=>{
    const selectedProject = projects.find((project) => project.projectName === newprojectname);
    setselectedProject(selectedProject)
    console.log("selected Project",selectedProject);
  })


 
    // console.log("khikhi",id)
    useEffect(() => {
        if (show) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
    }, [show])

    // console.log("nonono",selectedProject)

    return (
        <>
            {show && selectedProject &&
                <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <div className="leftProject">
                       <div className="ProjectName"> {selectedProject.projectName}</div>
                       <div className="ProjectDiv1">
                          <div className="ProjectSBdate"><span style={{display:"block"}}>Submission Date :</span> {selectedProject.submissionDate}</div>
                          <div></div>
                          <div className="ProjectDuration"> <span style={{display:"block"}}>Duration :</span> {selectedProject.duration} Days</div>
                       </div>
                       
                       <div className="ProjectDiv2">
                            <div className="ProjectClientName"> <span style={{display:"block"}}>Client Name :</span>{selectedProject.clientName}</div>
                            <div></div>
                            <div className="ProjectManager"><span style={{display:"block"}}>Project Manager :</span> {selectedProject.leader}</div>
                       </div>

                       <div className="ProjectDepartment">Department :{selectedProject.department}</div>
                       <span style={{display:"block",marginTop:"0.4rem"}}>Description :</span>
                       <div className="ProjectDescription"> {selectedProject.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate dolorem eaque quae mollitia deleniti quibusdam maiores ex aperiam explicabo omnis, sequi sapiente incidunt tempore qui. Officiis cupiditate ducimus ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi nihil quo eaque harum voluptas obcaecati at maiores, dolores quam!</div>
                    </div>
                    <div className="rightProject">
                        <div className="ProjectMembers">
                            ProjectMembers
                        </div>

                        <div className="AddProjectMembers">
                            <button onClick={()=>{dispatch(openAddMembersModal())}}>Add Members</button>
                        </div>

                        <div className="AllMembers">
                            {selectedProject.members?.length>0 && 
                               selectedProject.members.map((obj,index)=>{
                                   return <SingleProjectCard obj={obj} key={index}/>
                               })
                            }
                            {selectedProject.members?.length<1 && 
                               <p style={{display:"flex",justifyContent:"center",marginTop:"80px"}}>No Member Has Been Assigned yet</p>
                            }

                        </div>
                    </div>
                    <button className="close-modal">
                        <ImCross className='cross' onClick={() => { dispatch(closeSingleProjectModal()) }} />
                    </button>
                </div>
            </div> 
            }
        </>
    );
}

export default SingleProjectModal






//  <div className="ProjectCard">
//                         <div className="tempProjectCardImage1"></div>
//                         {/* <div className="ProjectCardImage"></div> */}
//                         <div className="ProjectCardText">
//                             <div className="getProjectInput">Project Name:{selectedProject.projectName}</div>
//                             <div className="getProjectInput">Submission Date:{selectedProject.submissionDate}</div>
//                             <div className="getProjectInput">Duration:{selectedProject.duration}</div>
//                             {/* <div className="getProjectInput">Client Name:{project.clientName}</div> */}
//                             <div className="getProjectInput">Manager:{selectedProject.leader}</div>
                            {/* <div className="viewMore">
                                <FaPlusCircle onClick={() => { combinedFunction(id) }} />
                            </div> */}
                            {/* <div className="getProjectInput">Department:{project.department}</div> */}
                            {/* <div className="getProjectInput">Description:{project.description}</div> */}


                            {/* <div className="ProjectMembers">
              {project.members.map((data,id) => (
                <span key={id}>{data.name}</span>
              ))}
          </div> */}
                            {/* <div className="projectButtons">
                                <button className="addProjectMember">Add Members</button>
                                <button className="editProjectMember">Edit Members</button>
                                <button className="deleteProjectMember" onClick={dltProject}>Delete Project</button>
                            </div>
                        </div>
                    </div>  */}