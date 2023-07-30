import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeSingleProjectModal } from '../../redux/slices/projectModals'
import { deleteProject} from '../../redux/slices/projectSlice';
import "./singleProjectModal.scss"
import "../ProjectCard/ProjectCard.scss"
import { ImCross } from 'react-icons/im'
import {FaPlusCircle} from "react-icons/fa";

const SingleProjectModal = () => {
    // const toggleLogin = useSelector((state) => state.modal.toggleLogin)
    const { show, id } = useSelector((state) => state.projectModal)
    const { projects } = useSelector((state) => state.projects)
    const dispatch = useDispatch()

  const [ProjectName, setProjectName] = useState({projectName:""})

  useEffect(() => {
    if(ProjectName.projectName){
      dispatch(deleteProject(ProjectName));
    }
  }, [ProjectName]);

  const dltProject=()=>{
    const obj={projectName:project.projectName}
    setProjectName(obj)
    // console.log("Emmmailll ",userEmail);
  }

  const combinedFunction = (id) => {
    dispatch(openSingleProjectModal());
    dispatch(getSingleProjectID(id));
  };
    // console.log("khikhi",id)
    useEffect(() => {
        if (show) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
    }, [show])

    // console.log("nonono",projects[id])

    return (
        <>
            {show && <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <div className="ProjectCard">
                        <div className="tempProjectCardImage1"></div>
                        {/* <div className="ProjectCardImage"></div> */}
                        <div className="ProjectCardText">
                            <div className="getProjectInput">Project Name:{projects[id].projectName}</div>
                            <div className="getProjectInput">Submission Date:{projects[id].submissionDate}</div>
                            <div className="getProjectInput">Duration:{projects[id].duration}</div>
                            {/* <div className="getProjectInput">Client Name:{project.clientName}</div> */}
                            <div className="getProjectInput">Manager:{projects[id].leader}</div>
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
                            <div className="projectButtons">
                                <button className="addProjectMember">Add Members</button>
                                <button className="editProjectMember">Edit Members</button>
                                <button className="deleteProjectMember" onClick={dltProject}>Delete Project</button>
                            </div>
                        </div>
                    </div>
                    {/* {toggleLogin ? <Login/> : <Signup/>} */}
                    <button className="close-modal">
                        <ImCross className='cross' onClick={() => { dispatch(closeSingleProjectModal()) }} />
                    </button>
                </div>
            </div>
                //    <button onClick={()=>{dispatch(closeSingleProjectModal())}}>Hiii</button>
            }
        </>
    );
}

export default SingleProjectModal