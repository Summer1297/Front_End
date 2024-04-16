import React from 'react';
import githubIcon from '../assets/images/github.png';
import facebookIcon from '../assets/images/facebook.png';
import googleIcon from '../assets/images/google.png';
import linkedinIcon from '../assets/images/linkedin.png';
import '../assets/css/SocialMediaLinks.css';

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub's icon" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="Facebook's icon" />
      </a>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img src={googleIcon} alt="Google's icon" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn's icon" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
