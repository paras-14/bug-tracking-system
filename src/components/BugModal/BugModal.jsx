import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeBugModal } from '../../redux/slices/bugModal'
import { deleteProject} from '../../redux/slices/projectSlice';
// import "./singleProjectModal.scss"
// import "../ProjectCard/ProjectCard.scss"
import { ImCross } from 'react-icons/im'
import {FaPlusCircle} from "react-icons/fa";
import SingleProjectCard from '../SingleProjectCard/SingleProjectCard';
import {openAddMembersToBugModal} from "../../redux/slices/bugModal"

import { getAllProjectsOrgLeader} from '../../redux/slices/projectSlice';

const BugModal = () => {
    // const toggleLogin = useSelector((state) => state.modal.toggleLogin)
    const { show4, newBugname } = useSelector((state) => state.bugModal)
    const { bugs } = useSelector((state) => state.bugs)
    const dispatch = useDispatch()

//   const [BugName, setBugName] = useState({bugName:""})

  const [selectedBug,setselectedBug]= useState({})

//   useEffect(() => {
//     if(BugName.bugName){
//       dispatch(deleteProject(ProjectName));
//     }
//   }, [BugName]);

  useEffect(()=>{
    const selectedBug = bugs.find((bug) => bug.bugName === newBugname);
    setselectedBug(selectedBug)
    console.log("selected Bug",selectedBug);

    dispatch(getAllProjectsOrgLeader())
  },[newBugname])


 
    // console.log("khikhi",id)
    useEffect(() => {
        if (show4) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
    }, [show4])

    console.log("nonono",selectedBug)


    const combinedFunction=()=>{
        dispatch(openAddMembersToBugModal());
        // dispatch(getAllProjectsOrgLeader());
    }

    // useEffect(() => {
        
    // }, [])

    return (
        <>
            {show4 && selectedBug &&
                <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <div className="leftProject">
                       <div className="ProjectName"> {selectedBug.bugName}</div>
                       <div className="ProjectDiv1">
                          <div className="ProjectSBdate"><span style={{display:"block"}}>Project :</span> {selectedBug.project}</div>
                          <div></div>
                          <div className="ProjectDuration"> <span style={{display:"block"}}>BugDate :</span> {selectedBug.bugDate} Days</div>
                       </div>
                       
                       <div className="ProjectDiv2">
                            <div className="ProjectClientName"> <span style={{display:"block"}}>Priority :</span>{selectedBug.bugPriority}</div>
                            <div></div>
                            <div className="ProjectManager"><span style={{display:"block"}}>deadline :</span> {selectedBug.deadline}</div>
                       </div>

                       <div className="ProjectDepartment">Status :{selectedBug.status}</div>
                       <span style={{display:"block",marginTop:"0.4rem"}}>Description :</span>
                       {/* <div className="ProjectDescription"> {selectedBug.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate dolorem eaque quae mollitia deleniti quibusdam maiores ex aperiam explicabo omnis, sequi sapiente incidunt tempore qui. Officiis cupiditate ducimus ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi nihil quo eaque harum voluptas obcaecati at maiores, dolores quam!</div> */}
                    </div>
                    <div className="rightProject">
                        <div className="ProjectMembers">
                            BugMembers
                        </div>

                        <div className="AddProjectMembers">
                            <button onClick={combinedFunction}>Add Members</button>
                        </div>

                        <div className="AllMembers">
                            {selectedBug.membersBug?.length>0 && 
                               selectedBug.membersBug.map((obj,index)=>{
                                   return <SingleProjectCard obj={obj} key={index}/>
                               })
                            }
                            {selectedBug.membersBug?.length<1 && 
                               <p style={{display:"flex",justifyContent:"center",marginTop:"80px"}}>No Member Has Been Assigned yet</p>
                            }
                        </div>
                    </div>
                    <button className="close-modal">
                        <ImCross className='cross' onClick={() => { dispatch(closeBugModal()) }} />
                    </button>
                </div>
            </div> 
            }
        </>
    );
}

export default BugModal


