import React from "react";

interface Playlist {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface SidebarProps {
  playlists: Playlist[];
  addNewPlaylist: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ playlists, addNewPlaylist }) => {
  return (
    <div className="sidebar">
      <button onClick={addNewPlaylist} className="new-playlist-btn">
        <i className="bi bi-plus-circle"></i>
        New Playlist
      </button>
      <ul className="playlist-list">
        {playlists.map((playlist) => (
          <li key={playlist.id} className="playlist-item">
            <img src={playlist.image} alt={playlist.name} className="playlist-image" />
            <div>
              <strong>{playlist.name}</strong>
              <p>{playlist.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
