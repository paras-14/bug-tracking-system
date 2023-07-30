import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./Navbar.scss"
import { useNavigate } from 'react-router-dom';
import { getSingleUser } from '../../redux/slices/userSlices';
import logo from "../../assets/LOGO.png"




const Navbar = () => {

  // const dispatch = useDispatch();

  const token = localStorage.getItem('token');

  // const { SingleUser, loading } = useSelector((state) => {
  //   return state.users
  // })

  // useEffect(() => {

  //   if (token) {
  //     // console.log("Alag Token h Kya ? ",token);
  //     dispatch(getSingleUser());
  //   }
  // }, [])




  const nav = useNavigate()


  // const [dropDownOpen1, setDropDown1] = useState(false);
  // const [dropDownOpen2, setDropDown2] = useState(false);
  // const [dropDownOpen3, setDropDown3] = useState(false);

  // const toggleDropDown1 = () => {
  //   setDropDown2(false);
  //   setDropDown3(false);
  //   setDropDown1(!dropDownOpen1)
  // }
  // const toggleDropDown2 = () => {
  //   setDropDown1(false);
  //   setDropDown3(false);
  //   setDropDown2(!dropDownOpen2)
  // }
  // const toggleDropDown3 = () => {
  //   setDropDown2(false);
  //   setDropDown1(false);
  //   setDropDown3(!dropDownOpen3)
  // }

  // if (loading) {
  //   return <h2>Loading.....</h2>
  // }

  return (
    <>
        <div className="navbar">
        <div className="overlay2"></div>
          <div className="leftNav">
            <img src={`${logo}`} alt="LOGO" />
          </div>
          <div className="middleNav"><a className="anchors" href="/">HOME</a></div>
          <div className="rightNav">
            {/* <ul>
              <li className="dropdown">
                <span onClick={toggleDropDown1}>USERS</span>
                {dropDownOpen1 &&
                  <ul className={'dropdown-menu'}>
                    {SingleUser.role == 'Organisation Leader' && (
                      <a className="anchors" href="/createUser">
                        <li>Create User</li>
                      </a>
                    )}
                    {(SingleUser.role === 'Organisation Leader' || SingleUser.role === 'Tester' || SingleUser.role === 'Developer' || SingleUser.role ==='Project Manager' ) &&
                      <a className="anchors" href="/allUsers"><li>View All Users</li></a>
                    }
                  </ul>
                }
              </li>
             
              <li className="dropdown">
                <span onClick={toggleDropDown2}>PROJECTS</span>
                {dropDownOpen2 && SingleUser.role == "Organisation Leader" && (
                  <ul className={'dropdown-menu'}>
                    <li><a className="anchors" href="/createProject">Create Project</a></li>
                    <li><a className="anchors" href="/allProjectsLeader">View All Projects</a></li>
                  </ul>
                )}
                {dropDownOpen2 && SingleUser.role == "Project Manager" && (
                  <ul className={'dropdown-menu'}>
                    <li><a className="anchors" href="/allProjectsManager">Add Members to Projects</a></li>
                    <li><a className="anchors" href="/allProjectsLeader">View your Projects</a></li>
                  </ul>
                )}
                {dropDownOpen2 && (SingleUser.role === "Tester" || SingleUser.role === "Developer" || SingleUser.role === "User") && (
                  <ul className={'dropdown-menu'}>
                    <li><a className="anchors" href="/allProjectsTester">View your Projects</a></li>
                  </ul>
                )}
              </li>
              
              <li className="dropdown">
                <span onClick={toggleDropDown3}>BUGS</span>
                {dropDownOpen3 &&
                  <ul className={'dropdown-menu'}>
                    <a className="anchors" href="/createBug"><li>Create Bug</li></a>
                    <a className="anchors" href="/allBugs"><li>View All Bugs</li></a>
                  </ul>
                }
              </li>
            </ul> */}

            <div className="auth">
              {!token &&
                <a href="/Login"><div>LOGIN/SIGNUP</div></a>
              }{
                token &&
                <div onClick={() => { localStorage.removeItem('token'), nav(0) }}>LOGOUT</div>
              }
            </div>
          </div>
        </div>
      hii

    </>
  )
}

export default Navbar



