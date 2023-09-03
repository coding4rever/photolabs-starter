import React from "react";

//import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canadaaaaaaaaa",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = () => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={sampleDataForPhotoListItem.imageSource} alt="Photo"  />
      <img className="photo-list__user-profile" src={sampleDataForPhotoListItem.profile} alt="Profile-photo"  />
      <div className="photo-list__user-details ">
      {sampleDataForPhotoListItem.username},
      {sampleDataForPhotoListItem.location.city},
      {sampleDataForPhotoListItem.location.country},
      </div>
    </div>
  );
};

export default PhotoListItem;
