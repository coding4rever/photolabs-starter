import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ favorites, toggleFavorites, photoId }) {
  const toggleFavoritePhoto = () => {
    console.log("inside Toggle fav Photo", photoId);
    toggleFavorites(photoId);
  };

  const checkFavorite = favorites ? favorites.includes(photoId) : false;

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavoritePhoto}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={checkFavorite} />
      </div>
    </div>
  );
}
export default PhotoFavButton;
