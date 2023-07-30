import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/slices/userSLices';
import UserCard from '../../components/UserCard/UserCard';
import "./AllUsers.scss"
import allUserImage from "../../assets/man-working-computer-room_1308-97954.jpg"
import { FaAngleRight,FaAngleLeft } from "react-icons/fa";


const AllUsers = () => {

  const dispatch=useDispatch();

  const {users,loading}=useSelector((state)=>{
      return state.users
  })

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4; // Number of cards to display per page

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  if(loading){
    return <h2>Loading.....</h2>
  }

   // Calculate the index of the first and last card for the current page
   const indexOfLastCard = currentPage * cardsPerPage;
   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
   const currentCards = users.slice(indexOfFirstCard, indexOfLastCard);
 
   // Calculate the total number of pages
   const totalPages = Math.ceil(users.length / cardsPerPage);


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
    <div className="AllUser">
      <img className="AllUserImage" src={`${allUserImage}`} alt="" />
      <div className="upper">
         <h1>Here Are All The Users</h1>
      </div>
      <div className="lower">
         {currentCards.map((user, id) => {
          return <UserCard key={id} user={user} />;
        })}
      </div>
      <div className="pagination">
        {/* { */}
        {/* // currentPage > 1 && ( */}
          <FaAngleLeft className="userReactButton" onClick={() => handlePageChange(currentPage - 1)}>Previous</FaAngleLeft>
        {/* )} */}

        <button className="currentButton">{currentPage}</button>
        {/* {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index} 
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))} */}
        {/* {currentPage < totalPages && ( */}
          <FaAngleRight className="userReactButton" onClick={() => handlePageChange(currentPage + 1)}>Next</FaAngleRight>
        {/* )} */}
      </div>
    </div>
  )
}

export default AllUsers
