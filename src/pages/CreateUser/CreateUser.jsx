import "./CreateUser.scss"

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/slices/userSLices';
import { useNavigate } from 'react-router-dom';
import createUserImage from "../../assets/daily-routine-background-with-working-man_1284-65140.webp"

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    navigate('/');
  };

  return (
    <div className="CreateUser">
      <img src={`${createUserImage}`} alt="" />
      <div className="CreateUserDiv">
        {/* <div className="CreateUserImage">NiceImage</div> */}
        <form className="CreateUserText" onSubmit={handleSubmit}>
          <input
            className="userInput"
            type="text"
            name="role"
            placeholder="Role"
            onChange={handleChange}
          />
          <input
            className="userInput"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="userInput"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            className="userInput"
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />
          <input
            className="userInput"
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />
          <div className="createUserGender">
            <span className="createUserGenderLabel">Gender:</span>
            <label>
              <input
                // className="userRadio"
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />{' '}
              Male
            </label>
            <label>
              <input
                className="userRadio"
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />{' '}
              Female
            </label>
            <label>
              <input
                className="userRadio"
                type="radio"
                name="gender"
                value="others"
                onChange={handleChange}
              />{' '}
              Others
            </label>
          </div>
          <button className="userButton" type="submit">Create User</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;