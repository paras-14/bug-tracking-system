import React, { useEffect } from 'react'
import "./OrgLead.scss"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/slices/userSLices';
import orgLead from "../../assets/OrgLead.webp"

const OrgLead = () => {

    const [users, setUsers] = useState({});

    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
        // console.log(users)
    }

    const handleSubmit = () => {
        console.log("USers-> ", users)
        dispatch(createUser(users))
    }

    return (
        <div className="orgLeaderContainer">
            <div className="orgLead">
                <div className="OrgLeadImg">
                    <img src={`${orgLead}`} alt="" />
                </div>
                <div className='OrgLeadText'>
                    <input type="email" className="orgInput" placeholder="Email" name="email" required={true} onChange={getUserData} />
                    <input type="text" className="orgInput" name="username" placeholder="username" required={true} onChange={getUserData} />
                    <input type="tel" className="orgInput" name="phone" placeholder="phone" required={true} onChange={getUserData} />
                    <input type="text" className="orgInput" name="address" placeholder="address" required={true} onChange={getUserData} />

                    <div className="genderContainer">
                        <label className="orgGenderLabel">Gender:</label>
                        <div className="orgInputGender">
                            <label>
                                <input type="radio" name="gender" value="male" required onChange={getUserData} /> Male
                            </label>
                            <label>
                                <input type="radio" name="gender" value="female" required onChange={getUserData} /> Female
                            </label>
                            <label>
                                <input type="radio" name="gender" value="other" required onChange={getUserData} /> Other
                            </label>
                        </div>
                    </div>
                    <div className="orgBUTTONS" >
                        <button type="submit" className="ORGbtnnSUBMIT" onClick={(e) => { e.preventDefault(); handleSubmit(); }}>SUBMIT</button>
                        <button type="submit" className="ORGbtnnSIGNUP"><a href="/signup">SIGNUP</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrgLead




