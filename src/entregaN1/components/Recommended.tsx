import React from 'react';
import MediaList from './subComponents/MediaList';
import first from "../../assets/Recommended/1.png";
import second from "../../assets/Recommended/2.png";
import third from "../../assets/Recommended/3.png";
import fourth from "../../assets/Recommended/4.png";
import five from "../../assets/Recommended/5.png";
import profile from "../../assets/056cc892636460bee5791aa3f243854c.png";

const playlists = [
  { id: 1, image: first, name: 'Listen Again', artist: 'Listen Again . Listen Again' },
  { id: 2, image: second, name: 'Listen Again', artist: 'Listen Again . Listen Again' },
  { id: 3, image: third, name: 'Listen Again', artist: 'Listen Again . Listen Again' },
  { id: 4, image: fourth, name: 'Listen Again', artist: 'Listen Again . Listen Again' },
  { id: 5, image: five, name: 'Listen Again', artist: 'Listen Again . Listen Again' },
];

const Recommended: React.FC = () => {
  return (
    <MediaList
      title=""
      subtitle="Recommended albums"
      profileImage={profile}
      items={playlists}
      last={true}
    />
  );
};

export default Recommended;
