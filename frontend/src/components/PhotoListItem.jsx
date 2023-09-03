import React from "react";

//import "../styles/PhotoListItem.scss";


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
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.data.imageSource} alt="Photo"  />
      <img className="photo-list__user-profile" src={props.data.profile} alt="Profile-photo"  />
      <div className="photo-list__user-details ">
      {props.data.username},
      {props.data.location.city},
      {props.data.location.country},
      </div>
    </div>
  );
};

export default PhotoListItem;