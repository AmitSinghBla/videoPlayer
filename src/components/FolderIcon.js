// src/FolderIcon.js
import React, {useState} from 'react';
import '../styles/FolderIcon.css';
import { Link, useNavigate } from 'react-router-dom';

const FolderIcon = ({ image, altText, folderName }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  // let loggedIn = true;
  const handleClick = (e) => {
    if (!loggedIn) {
      e.preventDefault();
      setShowDialog(true); 
    }
  };

  const handleLoginClick = () => navigate('/login');

  const closeDialog = () => setShowDialog(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === 'dialog-overlay') {
      closeDialog(); // Close dialog if clicked on the overlay
    }
  };

  return (
    <>
    <Link to={`/folder/${folderName}`} className="folder-icon-container" onClick={handleClick}>
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

    {showDialog && (
        <div className="dialog-overlay"  onClick={handleOverlayClick}>
          <div className="dialog-box">
          <h2>Subscription on Hold!</h2>
            <p>Make payment to continue watching.</p>
            <button onClick={handleLoginClick}>Log In</button>
            <button>Make Payment</button>
          </div>
        </div>
      )}
      </>
  );
};

export default FolderIcon;
