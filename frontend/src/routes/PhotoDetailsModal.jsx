import React from "react";
import PhotoList from "components/PhotoList";
import "../styles/PhotoDetailsModal.scss";
import PhotoFavButton from "../components/PhotoFavButton";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ closeModal,  favorites, handleFavIconClick, 
  isLiked, selectedPhoto,toggleFavorites }) => {
  if (!selectedPhoto) {
    return null; // Return null if no photo is selected
  }
  const { urls, user, similar_photos } = selectedPhoto;
console.log(favorites);
  

  return (
    <div className="photo-details-modal">
    
   
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
      <PhotoFavButton photoId={selectedPhoto.id} favorites={favorites} toggleFavorites={toggleFavorites} selected={isLiked} onClick={handleFavIconClick}/> 
        <img
          src={urls.full}
          alt={`Photo by ${user.username}`}
          className="photo-details-modal__image"
        />

        {/* Display similar photos */}
        {similar_photos && (
          <div className="photo-details-modal__similar-photos">
            {/* Reuse the PhotoList component to display similar photos */
            }
            <h2>Similar Photosssss</h2>
            <PhotoList photos={Object.values(similar_photos)} handleFavIconClick={handleFavIconClick} favorites={favorites} toggleFavorites={toggleFavorites} isLiked={isLiked} />
          </div>
        )}
      </div>
      {/* ... (other content) */}
    </div>
  
  );
};

export default PhotoDetailsModal;
