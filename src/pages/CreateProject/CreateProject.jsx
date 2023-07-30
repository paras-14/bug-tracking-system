import "./CreateProject.scss"

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProject } from "../../redux/slices/projectSlice";
import createProjectImage from "../../assets/robotic-automation-isometric-concept-with-robots-working-with-cloud-services-data-storage_1284-55386.webp"

const CreateProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState({});

  const handleChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Firts",projectData)
    dispatch(createProject(projectData));
    navigate('/');
  };

  return (
    <div>
      <div className="CreateProject">
        <img src={`${createProjectImage}`} alt="" />
        <div className="CreateProjectDiv">
          <form className="CreateProjectText" onSubmit={handleSubmit}>
            <input
              className="projectInput"
              type="text"
              name="projectName"
              placeholder="Project Name"
              onChange={handleChange}
            />
            <input
              className="projectInput"
              type="text"
              name="type"
              placeholder="type of Project"
              onChange={handleChange}
            />
            <input
              className="projectInput"
              type="text"
              name="submissionDate"
              placeholder="Submission Date"
              onChange={handleChange}
            />
            <input
              className="projectInput"
              type="text"
              name="duration"
              placeholder="Duration"
              onChange={handleChange}
            />
            <input
              className="projectInput"
              type="text"
              name="clientName"
              placeholder="Client Name"
              onChange={handleChange}
            />
            <input
              className="projectInput"
              type="text"
              name="clientAddress"
              placeholder="Client Address"
              onChange={handleChange}
            />
            <input
              className="projectInput"
              type="tel"
              name="clientPhone"
              placeholder="Client Phone"
              onChange={handleChange}
            />
            <input
              className="projectInput"
              type="email"
              name="clientEmail"
              placeholder="Client Email"
              onChange={handleChange}
            />
            <input
              className="projectInput"
              type="text"
              name="leader"
              placeholder="Leader"
              onChange={handleChange}
            />
            <input
              className="projectInput"
              type="email"
              name="leaderEmail"
              placeholder="Leader Email"
              onChange={handleChange}
            />
            <input
              className="projectInput"
              type="text"
              name="department"
              placeholder="Department"
              onChange={handleChange}
            />
            <input
              className="projectInput"
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
            />
            <input
              className="projectInput"
              type="text"
              name="members"
              placeholder="Members"
              onChange={handleChange}
            />
            <button className="projectButton" type="submit">Create Project</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
