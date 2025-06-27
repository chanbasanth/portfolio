import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialIcons from "./SocialIcons";
import { Link, Route, Routes } from "react-router-dom";
import Portfolio from './projects/portfolio';
import emailjs from '@emailjs/browser';
import Todo from './projects/todolist';
import FoodMunch from './projects/foodmunch';

function App() {
  const [section, setSection] = useState("home");
  const [contactName, setContactName] = useState("");
  const [contactMobile, setContactMobile] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? 'dark-mode' : 'light-mode';
  }, [isDark]);

  useEffect(() => {
    let timeout;
    if (messageSent) {
      timeout = setTimeout(() => {
        setMessageSent(false);
        setSection('home');
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [messageSent]);

  const handleContactSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: contactName,
      mobile: contactMobile,
      message: contactMessage,
    };

    emailjs
      .send('service_o0gvzki', 'template_4mpgjnr', templateParams, 'TzeoLfPv4s5z68SMl')
      .then(() => {
        setMessageSent(true);
        setContactName('');
        setContactMobile('');
        setContactMessage('');
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert("Failed to send message. Please try again.");
      });
  };

  const renderBottomSection = () => {
    switch (section) {
      case "home":
        return (
          <div className="bottom1-container p-4">
            <div className="heading-container p-4">
              <h1>Hello</h1>
              <h2>I'm Chanbasanth</h2>
              <p>Java Full Stack developer</p>
              <div className="d-flex flex-direction-row">
                {/* <a href="https://drive.google.com/file/d/1E_JoP_PjO59yvbPlaxDNybwHvBUIQI6r/view?usp=sharing" download> */}
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href =
                      "https://drive.google.com/uc?export=download&id=1E_JoP_PjO59yvbPlaxDNybwHvBUIQI6r";
                    link.download = "ChanduYadav_Resume.pdf"; // optional: give a custom name
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="download-button"
                >
                  Download Vc
                </button>
                {/* </a> */}
                <button
                  className="get-button"
                  onClick={() => setSection("contact")}
                >
                  Get in Touch!
                </button>
              </div>
            </div>
            <div className="heading-photo">
              <img
                className="image"
                alt="Loading..."
                src="https://i.ibb.co/YBCQXZnB/cvvv.jpg"
              />
            </div>
          </div>
        );
      case "about":
        return (
          <div className="bottom2-container p-4">
            <h1 className='name'>Chanbasanth Kurva</h1>
            <p className="aboutme"> I am Motivated and detail-oriented Computer Science graduate with a solid foundation in both front-end and back-end development. Skilled in Java, React JS, and SQL, with hands-on experience building responsive web applications using modern frameworks and technologies. Eager to begin a career as a Java Full Stack Developer to contribute to innovative, scalable software solutions.</p>
          </div>
        );
      case "resume":
        return (
          <div className="bottom2-container p-4 align-items-center">
            <h2>My Resume</h2>
            <iframe title="Resume PDF" src="https://drive.google.com/file/d/1oWjgN3CjQZGZZHMLIFXeoulAtepMS-42/preview" width="80%" height="500px" style={{ border: "1px solid #ccc" }}></iframe>
          </div>
        );
      case "skills":
        return (
          <div className="bottom2-container skill-container">
            <h2>Java Full Stack Developer</h2>
            <ul>Technologies
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React Js</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>SQL</li>
            </ul>
          </div>
        );
      case "contact":
        return (
          <div className="bottom2-container p-4">
            <h2 className="mb-3"><strong><span style={{ fontSize: '2rem', borderBottom: '2px solid #000', paddingBottom: '0.2rem' }}>Contact Me</span></strong></h2>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" value={contactName} onChange={(e) => setContactName(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" value={contactMobile} onChange={(e) => setContactMobile(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Message</label>
                <textarea className="form-control" rows="5" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            {messageSent && (
              <div className="alert alert-success mt-3 d-flex align-items-center">
                <span className="me-2">✅</span> Message sent! Redirecting to Home...
              </div>
            )}
          </div>
        );
      case "projects":
        return (
          <div className="bottom2-container p-4">
            <h2 className="mb-4"><strong><span style={{ fontSize: '2rem', borderBottom: '2px solid #000' }}>Projects</span></strong></h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <img src="/images/project1.jpg" className="card-img-top" alt="Project 1" />
                  <div className="card-body">
                    <h5 className="card-title">Portfolio Website</h5>
                    <p className="card-text">A personal portfolio built with React, Bootstrap, and responsive design principles.</p>
                    <Link to="/projects/portfolio" className="btn btn-outline-primary">View Project</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <img src="/images/project2.jpg" className="card-img-top" alt="Project 2" />
                  <div className="card-body">
                    <h5 className="card-title">Todo Manager</h5>
                    <p className="card-text">A simple CRUD-based Todo Manager using React Hooks and localStorage.</p>
                    <Link to = "/projects/todolist" className="btn btn-outline-primary">View project</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <img src="/images/project3.jpg" className="card-img-top" alt="Project 3" />
                  <div className="card-body">
                    <h5 className="card-title">Food Munch</h5>
                    <p className="card-text">A FoodMunch is resuarent website, find different types of food.</p>
                    <Link to = "/projects/foodmunch" className="btn btn-outline-primary">View Project</Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container p-4">
      <header className={`py-3 border-bottom ${isDark ? 'bg-dark' : 'bg-light'}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="nav_container d-flex justify-content-between align-items-center">
            <svg className="logo-icon" width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" />
            <h1 className="h3 mb-0 heading-name">Chanbasanth kurva</h1>
          </div>
          <nav className="d-flex align-items-center">
            <ul className="nav me-3">
              {["home", "about", "resume", "skills", "projects", "contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <a href={`#${item}`} className="nav-link" onClick={() => setSection(item)}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={() => setIsDark(!isDark)} className="btn btn-outline-secondary">
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      {renderBottomSection()}

      <Routes>
        <Route path="/projects/portfolio" element={<Portfolio />}/>
        <Route path="/projects/todolist" element={<Todo/>}/>
        <Route path="/projects/foodmunch" element={<FoodMunch/>}/>
      </Routes>

      <div className="icon-mail-container">
        <div className="icon-mail d-flex justify-content-center flex-direction-column">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export default App;

