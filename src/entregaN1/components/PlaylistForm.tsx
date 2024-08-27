import React, { useState } from "react";
import "./PlaylistForm.css";
import InputField from "../components/subComponents/InputField";

interface Playlist {
  id: number;
  name: string;
  subtitle: string;
  image: string;
}

interface PlaylistFormProps {
  addNewPlaylist: (playlist: Playlist) => void;
}

const PlaylistForm: React.FC<PlaylistFormProps> = ({ addNewPlaylist }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    if (name && description && image) {
      const newPlaylist = {
        id: Date.now(),
        name,
        description,
        image,
      };
      addNewPlaylist(newPlaylist);
    }
  };

  return (
    <div className="playlist-form-container">
      <div className="form-section">
        <h2>Create New Playlist</h2>
        <InputField label="Title" value={name} onChange={setName} />
        <InputField label="Description" value={description} onChange={setDescription} />
        <InputField label="Image URL" value={image} onChange={setImage} />
        <button onClick={handleSubmit} className="add-playlist-btn">
          <i className="bi bi-plus-circle"></i>
          Add Playlist
        </button>
      </div>
      <div className="preview-section">
        <div className="playlist-item-preview">
          {image && <img src={image} alt={name} width={200} height={200}/>}
          <strong>{name || "Playlist Title"}</strong>
          <p>{description || "Playlist Description"}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistForm;
