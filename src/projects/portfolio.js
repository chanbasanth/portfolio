import React from 'react';
import { useNavigate } from 'react-router-dom';
import './portfolio.css';

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="portfolio-container p-4">
      <div className="project-card">
        <h1>Portfolio Website</h1>
        <p>
          This is a responsive personal portfolio website built with <strong>React.js</strong> and <strong>Bootstrap</strong>. It showcases my resume, skills, personal introduction, and multiple project demos.
        </p>
        <p>
          The main goal of this project was to build a single-page application (SPA) where each section (Home, About, Skills, Resume, Projects, Contact) is displayed dynamically based on navigation without reloading the page.
        </p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>React Router for project-level navigation</li>
          <li>Dark/Light theme toggle</li>
          <li>EmailJS integration for contact form</li>
          <li>Responsive layout using Bootstrap</li>
          <li>Reusable component structure</li>
        </ul>
        <p><strong>Tech Stack:</strong> React, Bootstrap, EmailJS, CSS, HTML</p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/chanbasanth/portfolio" target="_blank" rel="noopener noreferrer">
            github.com/chanbasanth/portfolio
          </a>
        </p>
        <button onClick={() => navigate('/')} className="btn btn-secondary mt-3">
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
