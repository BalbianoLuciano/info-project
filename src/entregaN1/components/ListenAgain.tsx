import React from 'react';
import MediaList from './subComponents/MediaList';
import first from "../../assets/ListenAgain/1.png";
import second from "../../assets/ListenAgain/2.png";
import third from "../../assets/ListenAgain/3.png";
import fourth from "../../assets/ListenAgain/4.png";
import profile from "../../assets/056cc892636460bee5791aa3f243854c.png";

const playlists = [
  { id: 1, image: first, name: 'Playlist name', artist: 'Artist Name . 68 songs' },
  { id: 2, image: second, name: 'Playlist name', artist: 'Artist Name . 68 songs' },
  { id: 3, image: third, name: 'Playlist name', artist: 'Artist Name . 68 songs' },
  { id: 4, image: fourth, name: 'Playlist name', artist: 'Artist Name . 68 songs' },
  { id: 5, image: first, name: 'Playlist name', artist: 'Artist Name . 68 songs' },
];

const ListenAgain: React.FC = () => {
  return (
    <MediaList
      title="Sufyan Ali"
      subtitle="Listen Again"
      profileImage={profile}
      items={playlists}
    />
  );
};

export default ListenAgain;
