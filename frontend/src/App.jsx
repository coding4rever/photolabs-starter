import React from 'react';

import PhotoList from './components/PhotoList';
import './styles/PhotoListItem.scss';
import PhotoListItem from './components/PhotoListItem';
//import './App.scss';
//import './App.scss';

const sampleDataForPhotoListItem = [{
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  liked: true
},
{
  id: "2",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  liked: true
},
{
  id: "3",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  liked: true
}
];

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className='App'>
    {sampleDataForPhotoListItem.map(photo => (
      <PhotoListItem key={photo.id} {...photo} />
    ))}
    {/* <PhotoListItem  {...sampleDataForPhotoListItem}/> */}
  </div>
  );
};

export default App;