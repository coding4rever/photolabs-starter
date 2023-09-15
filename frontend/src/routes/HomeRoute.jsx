import React, { useState} from 'react';

import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from "./PhotoDetailsModal";

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics,favorites,toggleFavorites,handleSelectTopic }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (photoId) => {
    const selectedPhoto = photos.find((photo) => photo.id === photoId);
    setSelectedPhoto(selectedPhoto)
  
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };
  
  const [isLiked, setIsLiked] = useState(false);
const [myTopicList, setMyTopicList] = useState("");
console.log(myTopicList)
  const handleFavIconClick = () => {
   setIsLiked(!isLiked);
  }
  const filteredPhotos = [];

  for (const photo of photos){
    console.log(photo)
  }
  return (
    <div className="home-route">
   <TopNavigationBar
        isFavPhotoExist={favorites.length > 0}  
        onSelectTopic={handleSelectTopic}
        topics={topics}
        setMyTopicList={setMyTopicList}

      />
      <PhotoList
        photos={photos}
        favorites={favorites}
        toggleFavorites={toggleFavorites}
       
        openModal={openModal}
        handleFavIconClick={handleFavIconClick}
        isLiked={isLiked}
      />
    
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          selectedPhoto={selectedPhoto}
          favorites = {favorites} // favorites to the modal
          toggleFavorites={toggleFavorites} //pass toggleFavortes function to the modal
          handleFavIconClick={handleFavIconClick}
          isLiked={isLiked}
        />
      )}
    </div>
  );
};

export default HomeRoute;