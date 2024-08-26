import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Title.css";

interface TitleProps {
  profileImage: string;
  title: string;
  subtitle: string;
  showPlayAllButton?: boolean;
}

const Title: React.FC<TitleProps> = ({
  profileImage,
  title,
  subtitle,
  showPlayAllButton,
}) => {
  return (
    <div className="title-container">
      <div className="first-container-title">
        <img src={profileImage} alt="profile" className="profile-image" />
        <div className="title-text">
          <div className="username">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
      </div>
      <div className="first-container-title">
        {showPlayAllButton && (
          <button className="play-all-button">Play ll</button>
        )}
        <div className="arrows">
          <i className="bi bi-arrow-left-circle"></i>
          <i className="bi bi-arrow-right-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Title;
