import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for component-specific styles

const Home = () => {
  return (
    <div className="container">
      <div className="banner">
        <h2 className="heading">Welcome Back, <span className="name">Rudra!</span></h2>
        <p className="greeting">Hope you're having a fantastic day!</p>
      </div>

      <div className="quick-links">
        <h3 className="sub-heading">Quick Links</h3>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/rudranarayan-ratha-360799267/">LinkedIn</a>
          <a href="https://github.com/Rudranarayan12/">GitHub</a>
        </div>
      </div>

      <div className="logout-link">
        <Link to={'/'} className="logout-btn">Logout</Link>
      </div>

      <div className="toggle-dark">
        <input type="checkbox" id="checkbox" className="toggle-checkbox" />
        <label htmlFor="checkbox" className="toggle-label">Dark Mode</label>
      </div>
    </div>
  );
}

export default Home;
