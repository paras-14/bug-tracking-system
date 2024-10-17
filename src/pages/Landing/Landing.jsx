import React, { useEffect, useRef } from 'react'
import "./Landing.scss"
import image1 from "../../assets/bugMain.jpg"
import image2 from "../../assets/userMain.jpg"
import image3 from "../../assets/projectMain.webp"
import image4 from "../../assets/bugMain2.webp"
import { getSingleUser } from '../../redux/slices/userSlices';

import Navbar from '../../components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux'


const Landing = () => {

  const dispatch = useDispatch();

  const token = localStorage.getItem('token');

  const { SingleUser, loading } = useSelector((state) => {
    return state.users
  })

  useEffect(() => {

    if (token) {
      // console.log("Alag Token h Kya ? ",token);
      dispatch(getSingleUser());
    }
  }, [])

  const slideRef = useRef(null);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };


  const pages=[{
    id:1,
    name:"PROJECTS",
    description:"PROJECT DESCRIPTION",
    imgUrl:image1
  },{
    id:2,
    name:"USERS",
    description:"USER DESCRIPTION",
    imgUrl:image2
  },{
    id:3,
    name:"BUGS",
    description:"BUGS DESCRIPTION",
    imgUrl:image3
  },]


  if (loading) {
    return <h2>Loading.....</h2>
  }

  return (
    <>
    <Navbar/>
    <div className="container">
      <img src={`${image4}`} alt="" />
      <div id="slide" ref={slideRef}>
        {pages.map((page,id)=>{
           return <div key={id} className="item">
              <div className="background-image" style={{ backgroundImage: `url(${page.imgUrl})` }}></div>
              <div className="overlay1"></div>
              
              <div className="content">
                <div className="name">{page.name}</div>
                <div className="des">{page.description}</div>
                {SingleUser.role && page.name=="PROJECTS" &&
                  <div className="landingButtons">
                      {SingleUser.role == 'Organisation Leader' &&
                        <a href="/createProject">
                          <button className='button'>
                           CREATE PROJECT
                          </button>
                        </a>
                      }
                      {SingleUser.role == 'Project Manager' &&
                        <a href="/createProject">
                          <button className='button'>
                             UPDATE PROJECT
                          </button>
                         </a>
                      }
                      {(SingleUser.role == 'Tester' || SingleUser.role == 'Developer' || SingleUser.role == 'User')&&
                        <button className='lock'></button>
                      }
                      {SingleUser.role == 'Organisation Leader' &&
                        <a href="/allProjectsLeader">
                          <button className="button">
                            VIEW PROJECTS
                          </button>
                        </a>
                      }
                      {SingleUser.role == 'Project Manager' &&
                          <a href="/allProjectsManager">
                            <button className="button">
                               VIEW PROJECTS
                            </button>
                          </a>
                      }
                      {(SingleUser.role == 'Tester' || SingleUser.role == 'Developer') &&
                          <a href="/allProjectsTester">
                            <button className="button">
                              VIEW PROJECTS
                            </button>
                          </a>
                      }
                  </div>
                }
                {SingleUser.role && page.name=="USERS" &&
                  <div className="landingButtons">
                      {SingleUser.role == 'Organisation Leader' &&
                        <a href="/createUser">
                          <button className='button'>
                           CREATE USER
                          </button>
                        </a>
                      }
                      
                      {(SingleUser.role == 'Tester' || SingleUser.role == 'Developer' || SingleUser.role == 'User' || SingleUser.role == 'Project Manager' )&&
                        <button className='lock'></button>
                      }

                      <a href="/allUsers">
                        <button className="button">
                          VIEW USERS
                        </button>
                      </a>
                  </div>
                }
                {SingleUser.role  && page.name=="BUGS" &&
                  <div className="landingButtons">
                      <a href="/createBug">
                        <button className="button">{(SingleUser.role == 'Tester' || SingleUser.role == 'Developer' || SingleUser.role == 'User')?'RAISE BUG':'CREATE BUG' }</button>
                      </a>
                      
                      <a href="/allBugs">
                        <button className="button">VIEW BUGS</button>
                      </a>
                  </div>
                }
              </div>
           </div>
        })}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
         
          prev
        </button>
        <button id="next" onClick={handleClickNext} >
          
          next
        </button>
      </div>
     </div>

      
      
    </>
  )
}

export default Landing
