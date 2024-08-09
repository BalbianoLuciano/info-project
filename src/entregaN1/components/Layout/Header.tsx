import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';
import profile from "../../../assets/056cc892636460bee5791aa3f243854c.png";
import LogoContainer from '../subComponents/LogoContainer';

const Header: React.FC = () => {
  return (
    <header className="header">
      <LogoContainer />
      <div className="search-bar-container">
        <div className="search-input-group">
          <i className="bi bi-search search-icon"></i>
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </div>
      <div className="user-icon-container">
        <i className="bi bi-cast"></i>
        <img src={profile} alt="profile" />
      </div>
    </header>
  );
};

export default Header;
