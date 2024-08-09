import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MediaList.css';
import Title from './Title';

interface MediaItem {
  id: number;
  image: string;
  name: string;
  artist: string;
  isRounded?: boolean;
}

interface MediaListProps {
  title: string;
  subtitle: string;
  profileImage: string;
  items: MediaItem[];
  isRounded?: boolean;
}

const MediaList: React.FC<MediaListProps> = ({ title, subtitle, profileImage, items, isRounded }) => {
  return (
    <div className="media-list-container">
      <Title
        profileImage={profileImage}
        title={title}
        subtitle={subtitle ? subtitle : ""}
      />
      <div className={`media-items ${isRounded ? 'rounded-items' : ''}`}>
        {items.map((item) => (
          <div key={item.id} className="media-item-card">
            <img
              src={item.image}
              alt={`${item.name} cover`}
              className={`media-item-image ${isRounded ? 'rounded-image' : ''}`}
            />
            <div className="media-item-info">
              <div className="media-item-name">{item.name}</div>
              <div className="media-item-artist">{item.artist}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaList;
