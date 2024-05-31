import React, { useState } from "react";
import { useParams } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    image: "/images/react.png",
    instructor: "Manoj",
    description: "Learn React from scratch.",
    enrollmentStatus: "open",
    duration: "6 weeks",
    mode: "Online",
    prerequisites: "Basic understanding of programming",
    syllabus: "React basics, Components, State and Props, Hooks, Routing",
  },
  {
    id: 2,
    title: "DSA",
    image: "/images/dsa.jpg",
    instructor: "Akash",
    description: "Deep dive into data structures and algorithms.",
    enrollmentStatus: "closed",
    duration: "8 weeks",
    mode: "Online",
    prerequisites: "Basic understanding of programming",
    syllabus:
      "Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Sorting and Searching",
  },
  {
    id: 3,
    title: "Node js for Beginners",
    image: "/images/node.png",
    instructor: "Aditya",
    description: "Learn Node.js from scratch.",
    enrollmentStatus: "in progress",
    duration: "5 weeks",
    mode: "Online",
    prerequisites: "Basic understanding of JavaScript",
    syllabus: "Node.js basics, Express.js, REST APIs, MongoDB, Authentication",
  },
  {
    id: 4,
    title: "Machine Learning",
    image: "/images/machine.jpg",
    instructor: "Danish",
    description: "Learn machine learning from scratch.",
    enrollmentStatus: "open",
    duration: "10 weeks",
    mode: "Online",
    prerequisites: "Basic understanding of Python",
    syllabus:
      "Supervised Learning, Unsupervised Learning, Neural Networks, Deep Learning",
  },
  {
    id: 5,
    title: "Python Crash Course",
    image: "/images/python.png",
    instructor: "Rahul",
    description: "Learn Python in 7 hours.",
    enrollmentStatus: "open",
    duration: "1 day",
    mode: "Online",
    prerequisites: "None",
    syllabus:
      "Python basics, Data types, Control structures, Functions, Modules",
  },
  {
    id: 6,
    title: "FrontEnd Development",
    image: "/images/frontend.jpg",
    instructor: "Anmol",
    description: "Learn frontend development from scratch.",
    enrollmentStatus: "in progress",
    duration: "6 weeks",
    mode: "Online",
    prerequisites: "Basic understanding of HTML and CSS",
    syllabus: "HTML, CSS, JavaScript, Responsive Design, React",
  },
  {
    id: 7,
    title: "Computer Networks",
    image: "/images/computernetwork.jpg",
    instructor: "Anmol",
    description: "Learn computer networks from scratch.",
    enrollmentStatus: "in progress",
    duration: "6 weeks",
    mode: "Online",
    prerequisites: "Basic understanding of computers and networks",
    syllabus: "Introduction to Computer Networks,Physical Layer,Data Link Layer,Network Layer",
  },
  {
    id: 8,
    title: "Analog Circuits",
    image: "/images/analog.jpg",
    instructor: "Anmol",
    description: "Learn analog  form scratch.",
    enrollmentStatus: "in progress",
    duration: "6 weeks",
    mode: "Online",
    prerequisites: "Basic Electrical Engineering",
    syllabus: "Introduction to Analog Circuits, Passive Components and Circuit Analysis,Bipolar Junction Transistors (BJTs),Operational Amplifiers",
  },
  {
    id: 9,
    title: "Embedded Systems",
    image: "/images/embedded.jpg",
    instructor: "Anmol",
    description: "Learn Embedded Systems form scratch",
    enrollmentStatus: "in progress",
    duration: "6 weeks",
    mode: "Online",
    prerequisites: "Basic Electronics:",
    syllabus: "Introduction to Embedded Systems,Embedded Hardware,Embedded Software,Real-Time Operating Systems (RTOS),Embedded System Design and Development",
  },
  {
    id: 10,
    title: "Gate",
    image: "/images/gate.jpg",
    instructor: "Anmol",
    description: "Learn how to crack gate",
    enrollmentStatus: "in progress",
    duration: "6 weeks",
    mode: "Online",
    prerequisites: "Bachelor’s Degree",
    syllabus: "GATE in Computer Science and Information Technology (CS),GATE in Electrical Engineering (EE),GATE in Mechanical Engineering (ME)",
  },
];

const faqs = [
  {
    question: "What is the duration of the course?",
    answer: "The course lasts for 6 weeks.",
  },
  {
    question: "Is there a certificate upon completion?",
    answer: "Yes, a certificate will be provided.",
  },
  {
    question: "Do I need prior knowledge?",
    answer: "Basic understanding of programming is recommended.",
  },
];

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courses.find((course) => course.id === parseInt(courseId));
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="course-details">
      {course ? (
        <>
          <h2>{course.title}</h2>
          <img
            src={course.image}
            alt={course.title}
            className="course-detail-image"
          />
          <p>
            <strong>Instructor:</strong> {course.instructor}
          </p>
          <p>
            <strong>Description:</strong> {course.description}
          </p>
          <p>
            <strong>Enrollment Status:</strong> {course.enrollmentStatus}
          </p>
          <p>
            <strong>Duration:</strong> {course.duration}
          </p>
          <p>
            <strong>Mode of Study:</strong> {course.mode}
          </p>
          <p>
            <strong>Prerequisites:</strong> {course.prerequisites}
          </p>
          <p>
            <strong>Syllabus:</strong> {course.syllabus}
          </p>
          <h3>FAQs</h3>
          <ul className="faq-list">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className={`faq-item ${openFaqIndex === index ? "open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                </button>
                {openFaqIndex === index && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </li>
            ))}
          </ul>
          <button className="course-button">Enroll Now</button>
        </>
      ) : (
        <p>Course not found.</p>
      )}
    </div>
  );
};

export default CourseDetails;
