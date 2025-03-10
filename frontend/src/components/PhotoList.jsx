import React from "react";

import PhotoListItem from "./PhotoListItem";
//import photos from "mocks/photos";
import "../styles/PhotoList.scss";

const PhotoList = ({
  photos,
  favorites,
  handleFavIconClick,
  isLiked,
  toggleFavorites,
  selectedTopics,
  openModal = null,
}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          imageSource={photo.urls.regular}
          favorites={favorites}
          toggleFavorites={toggleFavorites}
          {...photo}
          selectedTopics={selectedTopics}
          handleFavIconClick={handleFavIconClick}
          isLiked={isLiked}
          openModal={() => openModal && openModal(photo.id)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
