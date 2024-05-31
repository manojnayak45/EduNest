import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    image: "/images/react.png",
    instructor: "Manoj",
    description: "Learn React from scratch.",
    EmrollmentStatus: "open",
  },
  {
    id: 2,
    title: "DSA",
    image: "/images/dsa.jpg",
    description: "Deep dive into data structures and algorithms.",
    instructor: "Akash",
  },
  {
    id: 3,
    title: "Node js for Beginners",
    image: "/images/node.png",
    description: "Learn Node js form scratch",
  },
  {
    id: 4,
    title: " Machine Learning",
    image: "/images/machine.jpg",
    description: "Learn machine learning scratch",
  },
  {
    id: 5,
    title: "Python crash course",
    image: "/images/python.png",
    description: "Learn python in 7 hours",
  },
  {
    id: 6,
    title: "FrontEnd Development",
    image: "/images/frontend.jpg",
    description: "Learn frontend development form scratch",
  },
  {
    id: 7,
    title: "Computer Networks",
    image: "/images/computernetwork.jpg",
    description: "Learn Computer netwrok form scratch",
  },
  {
    id: 8,
    title: "Analog Circuits",
    image: "/images/analog.jpg",
    description: "Learn analog  form scratch",
  },
  {
    id: 9,
    title: "Embedded Systems",
    image: "/images/embedded.jpg",
    description: "Learn Embedded Systems form scratch",
  },
  {
    id: 10,
    title: "Gate",
    image: "/images/gate.jpg",
    description: "Learn how to crack gate",
  },
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEnroll = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses">
      <h2>Courses</h2>
      <input
        type="text"
        placeholder="Search for courses..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="course-list">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <h3>{course.title}</h3>
            <button
              className="course-button"
              onClick={() => handleEnroll(course.id)}
            >
              Course Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
