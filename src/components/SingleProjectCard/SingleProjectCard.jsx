import React from 'react'
import "./SingleProjectCard.scss"
import UserImageProject from "../../assets/defaultUserimages.png"


{/* <img src={`${loginImg}`} alt="" /> */}
const SingleProjectCard = ({obj}) => {
  return (
    <>
    
      <div className="SingleProjectCard">
          <div className="upperSingleProjectCard">
            <div className="upperSingleProjectCard2">
            <img src={`${UserImageProject}`} alt="" />
            </div>
          </div>

          <div className="lowerSingleProjectCard">
               <div className="lowerSingleProjectCard2">
               <div className="singleProjectCardContent">Name:{obj.username}</div>
               <div className="singleProjectCardContent">email:{obj.email}</div>
               <div className="singleProjectCardContent">role:{obj.role}</div>
               </div>
          </div>
      </div>      
    </>
  )
}

export default SingleProjectCard
