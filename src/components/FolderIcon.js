// src/FolderIcon.js
import React from 'react';
import '../styles/FolderIcon.css';
import { Link } from 'react-router-dom';

const FolderIcon = ({ image, altText, folderName }) => {
  return (
    <Link to={`/folder/${folderName}`} className="folder-icon-container">
      <div className="folder-icon">
        <img src={image} alt={altText} />
      </div>
    </Link>
  );
};

export default FolderIcon;
