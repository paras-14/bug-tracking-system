import React, { useEffect, useState } from 'react'
import "./BugCard.scss"
import { useDispatch } from 'react-redux';
import { deleteBug } from '../../redux/slices/bugSlice';
import { useNavigate } from 'react-router-dom';

const BugCard = ({ bug }) => {
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

    return (
      <>
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
                <button className="bugBtn edit">Edit</button>
                <button className="bugBtn delete" onClick={dltBug}>Delete</button>
                <button className="bugBtn addComment">Comment</button>
            </div>
        </div>
      </>
    )
}

export default BugCard
