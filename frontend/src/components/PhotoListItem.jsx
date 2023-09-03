import React from "react";

import "../styles/PhotoListItem.scss";


// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//     country: "Canadaaaaaaaaa",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const PhotoListItem = (props) => {
  /* Insert React */
  const { username, imageSource, id, location, profile , liked} = props;
  return (
    <div className ="photo-list__item">
      <img src={imageSource} alt={`Photo by ${username}` } className = "photo-list__image"  />
      <div className = "photo-list__user-info">
        <h3 className = "photo-list__user-details" >{username}</h3>
        <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        <p className="liked">{liked ? 'Liked' : 'Not Liked'}</p>
      </div>
      <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
    </div>
  );
};


export default PhotoListItem;