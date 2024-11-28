// src/FolderIcon.js
import React from 'react';
import '../styles/FolderIcon.css';
import { Link } from 'react-router-dom';

const FolderIcon = ({ image, altText, folderName }) => {
  let loggedIn = true;
  const handleClick = (e) => {
    if (!loggedIn) {
      e.preventDefault();
    }
  };
  return (
    <Link to={`/folder/${folderName}`} className="folder-icon-container"
    onClick={handleClick}>
      <div className="folder-icon">
        <img src={image} alt={altText} />
        <div className="folder-icon-overlay">
          {!loggedIn &&
            // Lock SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              color='yellow'
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="folder-icon-lock"
            >
              <rect x="3" y="10" width="18" height="11" rx="2" ry="2" />
              <path d="M7 10V6a5 5 0 0 1 10 0v4" />
              <line x1="12" y1="15" x2="12" y2="19" />
            </svg>
          }
        </div>
      </div>
    </Link>
  );
};

export default FolderIcon;
