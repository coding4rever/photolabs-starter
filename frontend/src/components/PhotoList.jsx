import React from "react";

import PhotoListItem from "./PhotoListItem";
//import photos from "mocks/photos";
import "../styles/PhotoList.scss";


const PhotoList = ({imageSource, photos, favorites,toggleFavorites}) => {
  return (
    <ul className="photo-list">
       {photos.map(photo => (
    <PhotoListItem key={photo.id} photo={photo} imageSource={photo.urls.regular} toggleFavorites={toggleFavorites}{...photo} />
      ))}
    </ul>
  );
};

export default PhotoList;
