import React from 'react';
//import TopicList from 'components/TopicList';
//import PhotoList from './components/PhotoList';
import HomeRoute from 'routes/HomeRoute';

//import './styles/PhotoListItem.scss';
//import PhotoListItem from './components/PhotoListItem';
import './App.scss';

//import photos from 'mocks/photos';
//import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state} = useApplicationData();
  return (
    <div className='App'>
   
   <HomeRoute photos={state.photoData} topics={state.topicData}/>
      <PhotoDetailsModal/>
  </div>

  );
};

export default App;