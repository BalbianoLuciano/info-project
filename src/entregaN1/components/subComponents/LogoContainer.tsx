import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Youtubelogo from "../../../assets/pngwing.com.png";
import './LogoContainer.css';

const LogoContainer: React.FC = () => {
  return (
    <div className="logo-container">
      <i className="bi bi-list list-icon"></i>
      <img src={Youtubelogo} alt="YouTube Music Logo" className="logo" />
    </div>
  );
};

export default LogoContainer;
