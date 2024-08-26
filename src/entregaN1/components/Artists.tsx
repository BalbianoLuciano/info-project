import React from 'react';
import MediaList from './subComponents/MediaList';
import first from "../../assets/Artists/1.png";
import second from "../../assets/Artists/2.png";
import third from "../../assets/Artists/3.png";
import fourth from "../../assets/Artists/4.png";
import five from "../../assets/Artists/5.png";
import profile from "../../assets/056cc892636460bee5791aa3f243854c.png";

const artists = [
  { id: 1, image: first, name: 'Listen Again', artist: '4.53 subscribers' },
  { id: 2, image: second, name: 'Listen Again', artist: '4.53 subscribers' },
  { id: 3, image: third, name: 'Listen Again', artist: '4.53 subscribers' },
  { id: 4, image: fourth, name: 'Listen Again', artist: '4.53 subscribers' },
  { id: 5, image: five, name: 'Listen Again', artist: '4.53 subscribers' },
];

const Artists: React.FC = () => {
  return (
    <MediaList
      title="Similar to"
      subtitle="Akon"
      profileImage={profile}
      items={artists}
      isRounded={true}
    />
  );
};

export default Artists;
