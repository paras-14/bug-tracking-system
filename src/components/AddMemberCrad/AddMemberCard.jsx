import "./AddMemberCard.scss"
import React from 'react'
import {DeleteMembers,AddMembers} from "../../redux/slices/projectModals"
import { useDispatch } from "react-redux"

const AddMemberCard = ({user}) => {

  const dispatch=useDispatch();



 
  return (
    <>
    {/* hiii */}
    <div className="AddMemberCard">
      <div className="MemberName">
         {/* <h2>Name:-{user.username}</h2> */}
         {user.username &&
             <h2>Name:-{user.username}</h2> 
         }
         {user.name &&
             <h2>Name:-{user.name}</h2> 
         }
      </div>

      <div className="MemberRole">
         <h2>Role:-{user.role}</h2>
      </div>

      <div className="MemberButtons">
        <div className="MemberButton">
           <button onClick={()=>dispatch(AddMembers(user))}>Add</button>
        </div>
        
        <div className="MemberButton">
           <button onClick={()=>dispatch(DeleteMembers(user))}>Delete</button>
        </div>
        
      </div>
      
      
      
    </div>
    
    </>
  )
}

export default AddMemberCard
