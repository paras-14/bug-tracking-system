// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import "./AllProjects.scss"
// import { getAllProjectsOrgLeader } from '../../redux/slices/projectSlice';
// import ProjectCard from '../../components/ProjectCard/ProjectCard';


// const AllProjectsLeader = () => {

//   const dispatch=useDispatch();

//   const {projects,loading}=useSelector((state)=>{
//       return state.projects
//   })

//   useEffect(() => {
//     dispatch(getAllProjectsOrgLeader())
//   }, [])

//   if(loading){
//     return <h2>Loading.....</h2>
//   }
  
//   return ( 
//       <div >
//         <div>
//           <h1>Here Are All The Projects of client</h1>
//         </div>
//         <div className="container">
//           {projects && projects.map((project,id)=>{
//               return  <ProjectCard project={project} id={id}/>
//             })
//           }
//         </div>
//     </div>
//   )
// }

// export default AllProjectsLeader
