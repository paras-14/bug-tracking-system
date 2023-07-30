import React, { useState } from 'react'
import "./Signup.scss"
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slices/userSlices';
import signUp from "../../assets/signup3.webp"

const Signup = () => {

    const dispatch = useDispatch();

    const [users, setUsers] = useState({});
    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
        // console.log(users)
    }

    const handleSubmit = () => {
        console.log("USers-> ", users)
        dispatch(updateUser(users))
    }


    return (
        <div className="signupContainer">
            <div className="Signup">
                <div className="SignupImg">
                   <img src={`${signUp}`} alt="" />
                </div>
                <div className='SignupText'>
                    <input type="email" className="signUpinput" placeholder="Email" name="email" onChange={getUserData} />
                    <input type="password" className="signUpinput" name="password" placeholder="Password" onChange={getUserData} />
                    <input type="text" className="signUpinput" name="uniqueCode" placeholder="Unique Code" onChange={getUserData} />
                    <div className="signupBUTTONS">
                        <button type="submit" className="signupbtn" onClick={(e) => { e.preventDefault(); handleSubmit(); }}>Signup</button>
                        <button type="submit" className="orgLeadbtn"><a href="/OrgLead">ORGANISATION LEADER</a></button>
                    </div>
                    {/* <button></button> */}
                    {/* <div className="OrgLead">
                        Want to Enter As Organistation Lead ? <span><a href="/OrgLead">Organisation Lead</a></span>
                    </div> */}
                    <div className="OrgLead">
                        Registered Already ?? <span><a href="/Login">Login</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup


