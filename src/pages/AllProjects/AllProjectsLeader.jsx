import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./AllProjects.scss"
import { getAllProjectsOrgLeader} from '../../redux/slices/projectSlice';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import xyz from "../../assets/xyz.jpg"
import { FaAngleRight,FaAngleLeft } from "react-icons/fa";
import SingleProjectModal from '../../components/SingleProjectModal/SingleProjectModal';
import AddMembers from "../../pages/AddMembers/AddMembers"

const AllProjectsLeader = () => {

  const dispatch=useDispatch();

  const {projects,loading}=useSelector((state)=>{
      return state.projects
  })

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3; // Number of cards to display per page

  useEffect(() => {
    dispatch(getAllProjectsOrgLeader())
  }, [])

  if(loading){
    return <h2>Loading.....</h2>
  }
  

   // Calculate the index of the first and last card for the current page
   const indexOfLastCard = currentPage * cardsPerPage;
   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
   const currentCards = projects.slice(indexOfFirstCard, indexOfLastCard);
 
  //  // Calculate the total number of pages
   const totalPages = Math.ceil(projects.length / cardsPerPage);

   const handlePageChange = (pageNumber) => {
    if(pageNumber<1){
      setCurrentPage(totalPages)
    }
    else if(pageNumber>totalPages){
      setCurrentPage(1)
    }
    else{
      setCurrentPage(pageNumber);
    }
    
  };



  return ( 
    <>
      <AddMembers/>
      <SingleProjectModal/>
      <div className="AllProject">
        <img className="AllProjectImage" src={`${xyz}`} alt="" />
         <div className="AllProjectupper">
          <h1>Here Are All The Projects of Leader</h1>
        </div>

        <div className="AllProjectLower">
        {currentCards.map((project, id) => {
          return <ProjectCard key={id} project={project} id={id} />;
        })}
        </div>
        <div className="pagination">
          <FaAngleLeft className="userReactButton" onClick={() => handlePageChange(currentPage - 1)}>Previous</FaAngleLeft>
        <button className="currentButton">{currentPage}</button>
          <FaAngleRight className="userReactButton" onClick={() => handlePageChange(currentPage + 1)}>Next</FaAngleRight>
      </div> 

      hiii
    </div>
    </>
  )
}

export default AllProjectsLeader
