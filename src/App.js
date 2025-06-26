import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialIcons from './SocialIcons';

function App() {
  const [section, setSection] = useState("home");
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? 'dark-mode' : 'light-mode';
  }, [isDark]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:channubasanth@gmail.com?subject=Message from ${contactName}&body=${contactMessage}`;
    window.open(mailtoLink, '_blank');
    setMessageSent(true);
    setContactName("");
    setContactMessage("");
    setTimeout(() => {
      setMessageSent(false);
      setSection("home");
    }, 2000);
  };

  const renderBottomSection = () => {
    switch (section) {
      case "home":
        return (
          <div className="bottom1-container p-4">
            <div className="heading-container p-4">
              <h1>Hello</h1>
              <h2>I'm Anish</h2>
              <p>UI/Ux, Designer Front-end Developer & Thinker, Based on India</p>
              <div className='d-flex flex-direction-row'>
                <button className="download-button">Download Vc</button>
                <button className="get-button" onClick={() => setSection("contact")}>Get in Touch!</button>
              </div>
            </div>
            <div className="heading-photo">
              <img className="image" alt="Loading..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTos6azT4olcW8cQDG_M6w7r2NwKByk-ee2nw&s" />
            </div>
          </div>
        );
      case "about":
        return (
          <div className="bottom2-container p-4">
            <h2><strong><span style={{ fontSize: '2rem', borderBottom: '2px solid #000', paddingBottom: '0.2rem' }}>T</span>his is it. ;)</strong></h2>
            <hr />
            <p>
              Anish Kr. Sinha is an Indian <strong>UI/UX Designer & Front End Developer</strong> with a passion for designing beautiful and functional user experiences. Typically, he's Driven & permanently Curious.
            </p>
            <p>
              He holds a <strong>bachelor degree in Computer Applications</strong>. During his graduation, he has been actively involved in the web design community for the last 3 years.
            </p>
            <p>
              His interests extend beyond the web and he loves helping people with branding and print design. He even loves designing <strong>3D floor plan</strong>.
            </p>
            <p>
              When he’s not designing, he’s probably hanging out, watching series, sketching or trying new YouTube tutorials.
            </p>
          
          </div>
        );
      case "resume":
        return (
          <div className="bottom2-container p-4">
            <h2>My Resume</h2>
            <iframe title="Resume PDF" src="https://drive.google.com/file/d/1oWjgN3CjQZGZZHMLIFXeoulAtepMS-42/preview" width="100%" height="600px" style={{ border: "1px solid #ccc" }}></iframe>
          </div>
        );
      case "skills":
        return (
          <div className="bottom2-container p-4">
            <h2>Java Full Stack Developer</h2>
            <p><strong>Technologies:</strong> Java, JavaScript, React.js, Spring Boot, SQL, HTML, CSS</p>
          </div>
        );
      case "contact":
        return (
          <div className="bottom2-container p-4">
            <h2 className="mb-3"><strong><span style={{ fontSize: '2rem', borderBottom: '2px solid #000', paddingBottom: '0.2rem' }}>C</span>ontact Me</strong></h2>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" value={contactName} onChange={(e) => setContactName(e.target.value)} required />
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
            {/* FIX: Removed Bootstrap classes here */}
            <h1 className="h3 mb-0 heading-name">Chanbasanth kurva</h1>
          </div>
          <nav className="d-flex align-items-center">
            <ul className="nav me-3">
              {['home', 'about', 'resume', 'skills', 'projects', 'contact'].map((item) => (
                <li className="nav-item" key={item}>
                  <a href={`#${item}`} className="nav-link" onClick={() => setSection(item)}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={() => setIsDark(!isDark)} className="btn btn-outline-secondary">
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      {renderBottomSection()}

      <div className="icon-mail-container">
        <div className="icon-mail d-flex justify-content-between flex-direction-row">
          <SocialIcons className="social-icons" />
          <p className="mb-0 rotated-email">channubasanth@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;

