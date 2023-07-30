import React from 'react'
import "./Login.scss"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/slices/userSlices';
import { useNavigate } from 'react-router-dom';
import loginImg from "../../assets/login.jpg"

const Login = () => {

  const dispatch = useDispatch();

  const nav = useNavigate();

  const [users, setUsers] = useState({});
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
    // console.log(users)
  }

  const handleSubmit = () => {
    console.log("USers-> ", users)
    dispatch(loginUser(users))
  }




  return (
    <div className="loginContainer">
      {/* <img src={`${loginImg}`} alt="" /> */}
      <div className="Login">
        <div className="LoginImg">
          <img src={`${loginImg}`} alt="" />
        </div>
        <div className='LoginText'>
          <input type="email" className="email" placeholder="Email" name="email" required={true} onChange={getUserData} />
          <input type="password" className="password" name="password" placeholder="Password" required={true} onChange={getUserData} />
          {/* <button type="submit" className="btn" onClick={(e) => { e.preventDefault(); handleSubmit(); }}>LOGIN</button> */}
          <div className="loginBUTTONS">
              <button type="submit" className="LOGINbtn" onClick={(e) => { e.preventDefault(); handleSubmit(); }}>LOGIN</button>
              <button type="submit" className="HOMEbtn"><a href="/">HOME</a></button>
          </div>
          <div className="havent" >haven't registered yet? 
              <span><a href="/Signup"><span className='sign-cover'>Sign Up</span></a></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login
