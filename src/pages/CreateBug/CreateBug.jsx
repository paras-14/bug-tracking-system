import "./CreateBug.scss"

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import {createBug} from "../../redux/slices/bugSlice"
import createBugImage from "../../assets/hahbackground-rain-drops-close-up_23-2148900898.avif"

const CreateBug = () => {

  // const nav=useNavigate();

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [bugData, setBugData] = useState({});

  const handleChange = (e) => {
    setBugData({ ...bugData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("CreatedBugObject->",bugData)
    e.preventDefault();
    dispatch(createBug(bugData));
    console.log(bugData);
    // nav("/allBugs");
  };

  return (
    <div>
      <div className="CreateBug">
        <img src={`${createBugImage}`} alt="" />
        <div className="createBugImgContainer1"></div>
        <div className="createBugImgContainer2"></div>
        <div className="CreateBugDiv">
          <form className="CreateBugText" onSubmit={handleSubmit}>
            <input
              className="bugInput"
              type="text"
              name="bugName"
              placeholder="Bug Name"
              onChange={handleChange}
            />
            <input
              className="bugInput"
              type="text"
              name="project"
              placeholder="Project"
              onChange={handleChange}
            />
            <input
              className="bugInput"
              type="text"
              name="bugDate"
              placeholder="Bug Date"
              onChange={handleChange}
            />
            <input
              className="bugInput"
              type="text"
              name="bugLevel"
              placeholder="Bug Level"
              onChange={handleChange}
            />
            <input
              className="bugInput"
              type="text"
              name="bugPriority"
              placeholder="Bug Priority"
              onChange={handleChange}
            />
            <input
              className="bugInput"
              type="text"
              name="deadline"
              placeholder="Deadline"
              onChange={handleChange}
            />
            <input
              className="bugInput"
              type="text"
              name="status"
              placeholder="Status"
              onChange={handleChange}
            />
            <button className="bugButton" type="submit">Create Bug</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBug;
