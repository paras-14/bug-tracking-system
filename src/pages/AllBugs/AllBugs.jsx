import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./AllBugs.scss"
import {getAllBugs} from "../../redux/slices/bugSlice"
import BugCard from '../../components/BugCard/BugCard'
import allBugs from "../../assets/vibrant-autumn-maple-leaves-nature-beauty-showcased-generated-by-ai_188544-15039.webp"
import { FaAngleRight,FaAngleLeft } from "react-icons/fa";
import AddMemberTobug from "../../components/AddMemberTobug/AddMemberTobug"
import BugModal from '../../components/BugModal/BugModal.jsx'


const AllBugs = () => {

  const dispatch=useDispatch();

  // const [bugz,setBugz]=useState({})

  const {bugs,loading}=useSelector((state)=>{
      // setBugz(state.bugs)
      return state.bugs
  })

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // Number of cards to display per page

  useEffect(() => {
    dispatch(getAllBugs())
  }, [])

  if(loading){
    return <h2>Loading.....</h2>
  }

  // Calculate the index of the first and last card for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = bugs.slice(indexOfFirstCard, indexOfLastCard);

 //  // Calculate the total number of pages
  const totalPages = Math.ceil(bugs.length / cardsPerPage);

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
    <AddMemberTobug/>
    <BugModal/>
    <div className="BugContainer">
      <img className="AllBugImage" src={`${allBugs}`} alt="" />
        <div className="BugHeading">
          <h1>Here Are All The Bugs</h1>
        </div>
        <div className="allBugHeadings">
          <div className="upperGridContainer">Bug Name:</div>
          <div className="upperGridContainer">Project</div>
          <div className="upperGridContainer">Bug date</div>
          {/* <div className="upperGridContainer">Level</div> */}
          <div className="upperGridContainer">Priority</div>
          <div className="upperGridContainer">Deadline</div>
          <div className="upperGridContainer">Status</div>
          <div className="upperGridContainer">Raiser</div>
          {/* <div className="upperGridContainer">Raisgqugdiq2g</div> */}
        </div>
        <div className="BugLower">
          {currentCards.map((bug,id)=>{
              return  <BugCard bug={bug} key={id}/>
            })
          }
        </div>

        <div className="pagination">
          <FaAngleLeft className="userReactButton" onClick={() => handlePageChange(currentPage - 1)}>Previous</FaAngleLeft>
        <button className="currentButton">{currentPage}</button>
          <FaAngleRight className="userReactButton" onClick={() => handlePageChange(currentPage + 1)}>Next</FaAngleRight>
      </div> 
    </div>
    </>
  )
}

export default AllBugs
