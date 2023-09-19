import React, { useEffect, useState } from 'react'
import "./BugCard.scss"
import { useDispatch, useSelector } from 'react-redux';
import { deleteBug } from '../../redux/slices/bugSlice';
import { useNavigate } from 'react-router-dom';
import { getSingleUser } from '../../redux/slices/userSlices';
import {getSingleBugID,openBugModal,getSingleProjectID} from "../../redux/slices/bugModal"
import { FaEye, FaEdit, FaTrash,FaComment} from 'react-icons/fa';


const BugCard = ({ bug }) => {



  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // console.log("Alag Token h Kya ? ",token);
      dispatch(getSingleUser());
    }
  }, [])

  const { SingleUser, loading } = useSelector((state) => {
    return state.users
  })


  const nav=useNavigate();
  const dispatch=useDispatch();
  const [BugName, setBugName] = useState({bugName:""})

  useEffect(() => {
    if(BugName.bugName){
      dispatch(deleteBug(BugName));
    //   nav("/allBugs")
    }
  }, [BugName]);

  const dltBug=()=>{
    const obj={bugName:bug.bugName}
    setBugName(obj)
    // console.log("Emmmailll ",userEmail);
  }

  // const combinedFunction = (id) => {
  //   console.log("deba ",id);
  //   dispatch(openAddMembersToBugModal());
  //   dispatch(getSingleBugID(id));
  // };

  const combinedFunction2 = (id1,id2) => {
    console.log("debabrata ",id1);
    dispatch(openBugModal());
    dispatch(getSingleBugID(id1));
    dispatch(getSingleProjectID(id2));
  };


  if (loading) {
    return <h2>Loading.....</h2>
  }

    return (
      <>
        {/* {console.log("Card SingleUSer->",SingleUser.role)} */}
        <div className="bugCardContainer">
            <div className="getBugInput">{bug.bugName}</div>
            <div className="getBugInput">{bug.project}</div>
            <div className="getBugInput">{bug.bugDate}</div>
            {/* <div className="getBugInput">{bug.bugLevel}</div> */}
            <div className="getBugInput">{bug.bugPriority}</div>
            <div className="getBugInput">{bug.deadline}</div>
            <div className="getBugInput">{bug.status}</div>
            <div className="getBugInput">{bug.raiser}</div>
            <div className="bugButtons">
                {/* {SingleUser.role==""

                } */}
                {/* <button className="bugBtn edit"  onClick={()=>{combinedFunction2(bug.bugName,bug.project)}}>View Members</button> */}

                <FaEye className="bugBtn view"  onClick={()=>{combinedFunction2(bug.bugName,bug.project)}}/>


                <FaEdit className="bugBtn edit"/>

                <FaTrash className="bugBtn delete" onClick={dltBug}/>
                {/* <button className="bugBtn edit"  onClick={()=>{combinedFunction2(bug.bugName)}}>View Member</button> */}
                {/* <button >Delete</button> */}
                <FaComment className="bugBtn comment"/>
                {/* <button className="bugBtn addComment">Comment</button> */}
            </div>
        </div>
      </>
    )
}

export default BugCard
