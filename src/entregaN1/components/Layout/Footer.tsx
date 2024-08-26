import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import img from "../../../assets/QuickPicks/10.png";
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <i className="bi bi-skip-backward-fill"></i>
        <i className="bi bi-play-fill"></i>
        <i className="bi bi-skip-forward-fill"></i>
        <div className="footer-time">
          0:10 / 3:41
        </div>
      </div>
      
      <div className="footer-middle">
        <img src={img} alt="Playing Song" className="footer-song-image" />
        <div className="footer-song-info">
          <div className="footer-song-name">Can't Stop the Feeling!</div>
          <div className="footer-song-artist">Calvin Harris . 37K views . 603 likes</div>
        </div>
      </div>

      <div className="footer-icons">
        <i className="bi bi-hand-thumbs-up"></i>
        <i className="bi bi-hand-thumbs-down"></i>
        <i className="bi bi-three-dots"></i>
      </div>

      <div className="footer-right">
        <i className="bi bi-repeat"></i>
        <i className="bi bi-volume-up"></i>
        <i className="bi bi-caret-down-fill"></i>
      </div>
    </div>
  );
};

export default Footer;
