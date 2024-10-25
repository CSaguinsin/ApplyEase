import React, { useState } from "react";
import Navigation from './Navigation';
import { IoPerson } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from 'axios';

import Modal from './Modal';

const jobPositions = [
  { id: 1, title: "Software Developer" },
  { id: 2, title: "Data Analyst" },
  { id: 3, title: "UI/UX Designer" },
  { id: 4, title: "Project Manager" },
  { id: 5, title: "Marketing Specialist" },
  { id: 6, title: "Human Resources Manager" },
  { id: 7, title: "Sales Executive" },
  { id: 8, title: "Customer Support" },
];

const educationLevel = [
  { id: 1, title: "High School Diploma" },
  { id: 2, title: "Associate's Degree" },
  { id: 3, title: "Bachelor's Degree" },
  { id: 4, title: "Master's Degree" },
  { id: 5, title: "Doctorate Degree" },
];

const skillAndCompetencies = [
  { id: 1, title: "Communication Skills" },
  { id: 2, title: "Problem-solving Skills" },
  { id: 3, title: "Leadership Skills" },
  { id: 4, title: "Time Management" },
  { id: 5, title: "Teamwork" },
];

export default function ApplicationAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJobPositions, setSelectedJobPositions] = useState([]);
  const [selectedEducationLevels, setSelectedEducationLevels] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experience, setExperience] = useState('');

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleCheckboxChange = (setFunction, value) => {
    setFunction(prevState =>
      prevState.includes(value) ? prevState.filter(item => item !== value) : [...prevState, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hrPreferenceData = {
      hr_name: 'HR Manager',
      position: selectedJobPositions.join(', '),
      required_experience: experience,
      required_education: selectedEducationLevels.join(', '),
      required_skills: selectedSkills,
    };
    try {
      const response = await axios.post('http://localhost:5000/api/hr-preferences', hrPreferenceData);
      console.log(response.data);
      if (response.data.success) {
        alert('HR preference added successfully!');
      } else {
        alert('Failed to add HR preference.');
      }
    } catch (error) {
      console.error('Error submitting HR preference:', error);
    }
  };

  return (

    <>
      <div className="absolute top-0 left-0 w-full h-64 bg-blue-500">
        <img src='./Background.png' className="absolute h-64 w-full cover z-0" />
        <div className="flex">
          <div className="fixed">
            <Navigation page="Generate" />
          </div>
          <div className="w-screen m-8 ml-80 z-50">
            <div className="flex items-center justify-between">
              <div className="text-white">
                Pages / Preference Form
                <div className="font-bold">
                  Preference Form
                </div>
              </div>
              <div className="flex items-center font-bold text-white ">
                <Link to="#" className="flex items-center m-3">
                  <IoPerson className="text-white m-1" />
                  Akari
                </Link>
                <Link to="#" className="m-3">
                  <IoMdSettings className="text-white text-xl" />
                </Link>
                <Link to="#" className="m-3">
                  <IoIosNotifications className="text-white text-xl" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md border p-2 flex mt-4 p-6">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mr-6">
                  <div className="text-gray-600 text-5xl font-bold">
                    Preference Form
                  </div>
                  {/* Job Position Div */}
                  <div className="mt-4">
                    <h1 className="text-black font-bold pt-[10rem]">1. Job Position:</h1>
                    {jobPositions.map((job) => (
                      <div key={job.id} className="acp">
                        <div className="ab mb zn flex flex-col space-x-10">
                          <div className="mb on zp">
                            <input
                              id={`comments-${job.id}`}
                              name="comments"
                              type="checkbox"
                              aria-describedby={`comments-description-${job.id}`}
                              className="oh sn aej agu azp bpd mr-2"
                              onChange={() => handleCheckboxChange(setSelectedJobPositions, job.title)}
                            />
                          </div>
                          <div className="ka axe axw">
                            <p id={`comments-description-${job.id}`} className="ayy">
                              {job.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* End of job position div */}
                  {/* Educational attainment div */}
                  <div className="mt-4">
                    <h1 className="text-black font-bold pt-[10rem]">2. Education Requirements:</h1>
                    {educationLevel.map((education) => (
                      <div key={education.id} className="acp">
                        <div className="ab mb zn flex flex-col space-x-10">
                          <div className="mb on zp">
                            <input
                              id={`comments-${education.id}`}
                              name="comments"
                              type="checkbox"
                              aria-describedby={`comments-description-${education.id}`}
                              className="oh sn aej agu azp bpd mr-2"
                              onChange={() => handleCheckboxChange(setSelectedEducationLevels, education.title)}
                            />
                          </div>
                          <div className="ka axe axw">
                            <p id={`comments-description-${education.id}`} className="ayy">
                              {education.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* End of educational attainment div */}
                  {/* Work experience div */}
                  <div className="mt-4">
                    <h1 className="text-black font-bold pt-[10rem]">3. Work Experience:</h1>
                    <div className="mb-4 flex items-center">
                      <label
                        className="text-sm mb-2"
                        htmlFor="experience"
                      >
                        Minimum years of working experience:
                        <input
                          className="ml-2 shadow border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="experience"
                          type="number"
                          placeholder="Years of experience"
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                        />
                        Years
                      </label>
                    </div>
                  </div>
                  {/* End of work experience div */}
                  {/* Skills & competencies div */}
                  <div className="">
                    <h1 className="text-black font-bold pt-[10rem]">4. Skills & Competencies:</h1>
                    {skillAndCompetencies.map((skills) => (
                      <div key={skills.id} className="acp">
                        <div className="ab mb zn flex flex-col space-x-10">
                          <div className="mb on zp">
                            <input
                              id={`comments-${skills.id}`}
                              name="comments"
                              type="checkbox"
                              aria-describedby={`comments-description-${skills.id}`}
                              className="oh sn aej agu azp bpd mr-2"
                              onChange={() => handleCheckboxChange(setSelectedSkills, skills.title)}
                            />
                          </div>
                          <div className="ka axe axw">
                            <p id={`comments-description-${skills.id}`} className="ayy">
                              {skills.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* End of skills & competencies div */}
                </div>
                <div class="flex w-full justify-end">
                  <button
                    type="submit"
                    className="mt-4 bg-blue-800 text-white p-2 text-sm rounded-md shadow focus:outline-none hover:bg-blue-700 hover:text-white"
                    onClick={handleOpen}
                  >
                    Submit
                  </button>
                  <Modal isOpen={isOpen} onClose={handleClose}>
                    <div>
                      <div className="font-bold flex">
                        Are you sure you want to submit?
                      </div>
                      <div className="flex justify-center">
                        <div className="flex justify-center m-4" style={{ backgroundColor: 'green', color: 'white', padding: 5, borderRadius: 5, width: 100 }}>
                          Yes
                        </div>
                        <div
                          onClick={handleClose}
                          className="flex justify-center m-4" style={{ backgroundColor: 'blue', color: 'white', padding: 5, borderRadius: 5, width: 100 }}
                        >
                          No
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
