import React from 'react';
import './MusicGenres.css';

const genres: string[] = ["Pop", "Rock", "Hip-Hop", "Jazz", "Classical", "Electronic"];

const MusicGenres: React.FC = () => {
  return (
    <div className="genres-container">
      {genres.map((genre) => (
        <button key={genre} className="genre-button">
          {genre}
        </button>
      ))}
    </div>
  );
};

export default MusicGenres;
