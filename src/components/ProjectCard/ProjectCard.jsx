import React, { useEffect, useState } from 'react'
import "./ProjectCard.scss"
import { deleteProject} from '../../redux/slices/projectSlice';
import { useDispatch } from 'react-redux';
import {FaPlusCircle} from "react-icons/fa";
import { openSingleProjectModal, getSingleProjectID} from '../../redux/slices/projectModals'


const ProjectCard = ({project,id }) => {

  const dispatch=useDispatch();
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


  return (
    <>
        <div className="ProjectCard">
          <div className="tempProjectCardImage1"></div>
          {/* <div className="ProjectCardImage"></div> */}
          <div className="ProjectCardText">
            <div className="getProjectInput">Project Name:{project.projectName}</div>
            <div className="getProjectInput">Submission Date:{project.submissionDate}</div>
            <div className="getProjectInput">Duration:{project.duration}</div>
            {/* <div className="getProjectInput">Client Name:{project.clientName}</div> */}
            <div className="getProjectInput">Manager:{project.leader}</div>
            <div className="viewMore">
               <FaPlusCircle onClick={()=>{combinedFunction(project.projectName)}}/>
            </div>
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
              <button className="deleteProjectMember"  onClick={dltProject}>Delete Project</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProjectCard
