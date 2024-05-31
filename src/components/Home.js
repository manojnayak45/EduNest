import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='wholebody'>
    <div className="home">
      <h1>Welcome to Our EduNest</h1>
      <p>
        Our courses are designed to provide the best learning experience. Whether you are a beginner
        looking to start your journey in a new field, or an experienced professional aiming to enhance
        your skills, we have the right course for you. Our instructors are industry experts who bring
        real-world experience and insights to the classroom.
      </p>
      <Link to="/courses" className="explore-btn">Explore Our Courses</Link>
    </div>
    </div>
  );
}

export default Home;
