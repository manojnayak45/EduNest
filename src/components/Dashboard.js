import React, { useState } from "react";

const students = [
  {
    id: 1,
    name: "Manoj",
    courses: [
      {
        id: 1,
        title: "React for Beginners",
        image: "/images/react.png",
        progress: 20,
      },
      {
        id: 2,
        title: "Machine Learning",
        image: "/images/machine.jpg",
        progress: 40,
      },
    ],
  },
  {
    id: 2,
    name: "Akash",
    courses: [
      {
        id: 2,
        title: "Node js for Beginners",
        image: "/images/node.png",
        progress: 60,
      },
      {
        id: 3,
        title: "FrontEnd Development",
        image: "/images/frontend.jpg",
        progress: 80,
      },
    ],
  },
  {
    id: 3,
    name: "Aditya",
    courses: [
      {
        id: 1,
        title: "React for Beginners",
        image: "/images/react.png",
        progress: 90,
      },
      {
        id: 3,
        title: "FrontEnd Development",
        image: "/images/frontend.jpg",
        progress: 30,
      },
    ],
  },
];

const Dashboard = () => {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);

  const handleStudentChange = (e) => {
    const studentId = parseInt(e.target.value);
    const student = students.find((student) => student.id === studentId);
    setSelectedStudent(student);
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div>
        <label htmlFor="student-select">Select Student: </label>
        <select id="student-select" onChange={handleStudentChange}>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>
      <h3>Enrolled Courses for {selectedStudent.name}</h3>
      <div className="enrolled-courses">
        {selectedStudent.courses.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <h3>{course.title}</h3>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p>Progress: {course.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
