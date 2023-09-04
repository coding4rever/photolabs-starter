import React from 'react';
//import TopicList from 'components/TopicList';


//import PhotoList from './components/PhotoList';
import HomeRoute from 'routes/HomeRoute';

//import './styles/PhotoListItem.scss';
//import PhotoListItem from './components/PhotoListItem';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className='App'>
   
     <HomeRoute/>
  </div>

  );
};

export default App;