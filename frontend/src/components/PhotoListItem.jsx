import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({
  location,
  handleFavIconClick,
  isLiked,
  urls,
  user,
  favorites,
  toggleFavorites,
  photo,
  openModal,
}) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photoId={photo.id}
        favorites={favorites}
        toggleFavorites={toggleFavorites}
        selected={isLiked}
        onClick={handleFavIconClick}
      />
      <img
        src={urls.regular}
        alt={`Photo by ${user.username}`}
        className="photo-list__image"
        onClick={openModal}
      />
      <div className="photo-list__user-info">
        <h3 className="photo-list__user-details">{user.username}</h3>
        <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
      </div>

      <img
        src={user.profile}
        alt={`${user.username}'s profile`}
        className="photo-list__user-profile"
      />
    </div>
  );
};

export default PhotoListItem;
