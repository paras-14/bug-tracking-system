import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./AllProjects.scss"
import { getAllProjectsManager } from '../../redux/slices/projectSlice';
import ProjectCard from '../../components/ProjectCard/ProjectCard';


const AllProjectsLeader = () => {

  const dispatch=useDispatch();

  const {projects,loading}=useSelector((state)=>{
      return state.projects
  })

  useEffect(() => {
    dispatch(getAllProjectsManager())
  }, [])

  if(loading){
    return <h2>Loading.....</h2>
  }
  
  return ( 
      <div >
        <div>
          <h1>Here Are All The Projects of Manager</h1>
        </div>
        <div className="container">
          {projects && projects.map((project,id)=>{
              return  <ProjectCard project={project} key={id}/>
            })
          }
        </div>
    </div>
  )
}

export default AllProjectsLeader
