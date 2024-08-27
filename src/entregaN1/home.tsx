import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MusicGenres from "./components/Layout/MusicGenres";
import ListenAgain from "./components/ListenAgain";
import Artists from "./components/Artists";
import Recommended from "./components/Recommended";
import QuickPicks from "./components/QuickPicks";
import PlaylistForm from "./components/PlaylistForm";
import first from "../assets/Artists/1.png";
import second from "../assets/Artists/2.png";
import third from "../assets/Artists/3.png";
import './components/Sidebar.css';

interface Playlist {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([
    { id: 1, name: "Chill Vibes", description: "Relax and unwind", image: first },
    { id: 2, name: "Workout Hits", description: "Get pumped", image: second },
    { id: 3, name: "Indie Mix", description: "Discover new tunes", image: third },
  ]);

  const [showForm, setShowForm] = useState(false);

  const addNewPlaylist = (newPlaylist: Playlist) => {
    setPlaylists([...playlists, newPlaylist]);
    setShowForm(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar playlists={playlists} addNewPlaylist={() => setShowForm(true)} />
      <div style={{ flex: 1, paddingLeft: "20px" }}>
        {showForm ? (
          <PlaylistForm addNewPlaylist={addNewPlaylist} />
        ) : (
          <>
            <MusicGenres />
            <ListenAgain />
            <Artists />
            <QuickPicks />
            <Recommended />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
