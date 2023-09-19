import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/slices/userSlices';
import "./AddMembers.scss"
import { ImCross } from 'react-icons/im'
import AddMemberCard from "../../components/AddMemberCrad/AddMemberCard"
import { closeAddMembersModal } from '../../redux/slices/projectModals'
import {updateProject} from "../../redux/slices/projectSlice"


const AddMembers = () => {

  const { show2, newprojectname } = useSelector((state) => state.projectModal)

  const { CurrentMembers } = useSelector((state) => { return state.projectModal })

  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => {
    return state.users
  })

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  if (loading) {
    return <h2>Loading.....</h2>
  }


  return (
    <>
      {show2 &&

        <div className="modal2">
          {/* <div className="overlay"></div> */}
          <div className="AddMember">
            <div className="Cross2">
            <ImCross className='cross' onClick={() => { dispatch(closeAddMembersModal()) }} />
            </div>
          
            <div className="AddMemberContainer">
              <div className="AddMembersDeveloper">
                <div className="AddMembersDeveloperTitle">
                  <h2>DEVELOPERS</h2>
                </div>
                <div className="ScrollMembers">
                  {users.map((user, id) => {
                    if (user.role == "Developer") {
                      return <AddMemberCard key={id} user={user} />;
                    }
                  })}
                </div>
              </div>
              <div className="AddMembersTester">
                <div className="AddMembersDeveloperTitle">
                  <h2>TESTERS</h2>
                </div>
                <div className="ScrollMembers">
                  {users.map((user, id) => {
                    if (user.role == "Tester") {
                      return <AddMemberCard key={id} user={user} />;
                    }
                  })}
                </div>
              </div>
            </div>

            <div className='ShowMembers'>
              <div className="AddMembersDeveloperTitle">
                <h2>Added Members</h2>
              </div>
              <div className="ScrollMembers">
                {CurrentMembers.map((obj, index) => {
                  return <h1 key={index}>{obj.role}</h1>
                })}
              </div>
              <div className="pataNahi">
                <button className="SubmItMember" onClick={()=>{dispatch(updateProject({newMembers:CurrentMembers,projectName:newprojectname}))}}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default AddMembers








