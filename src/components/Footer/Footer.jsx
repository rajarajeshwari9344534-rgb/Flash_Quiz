import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>FlashQuiz</h3>
          <p>Master your skills with interactive high-speed learning.</p>
        </div>
        <div className="footer-links">
          <div className="footer-group">
            <h4>Courses</h4>
            <ul>
              <li>HTML5 Fundamentals</li>
              <li>Advanced CSS</li>
              <li>JavaScript Mastery</li>
            </ul>
          </div>
          <div className="footer-group">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>FlashQuiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
