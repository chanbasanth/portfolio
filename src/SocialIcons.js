import React from 'react';


const SocialIcons = () => {
  return (
    <div className="social-icons d-flex gap-3 align-items-center rotated-email justify-content-column">
      <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer">
         <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" width="24" height="24" alt="Telegram" />
     </a>

      <a href="https://www.linkedin.com/in/chanbasanth/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" width="24" height="24" alt="LinkedIn" />
      </a>
      <a href="https://instagram.com/chanbasanth" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" width="24" height="24" alt="Instagram" />
      </a>
      <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" width="24" height="24" alt="Twitter" />
      </a>
      <a href="https://github.com/chanbasanth?tab=repositories" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" width="24" height="24" alt="GitHub" />
      </a>
    </div>
  );
};

export default SocialIcons;
