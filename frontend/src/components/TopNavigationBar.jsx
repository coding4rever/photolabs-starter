import React from 'react';
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ isFavPhotoExist, setMyTopicList, selectedTopics, onSelectTopic, topics }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} selectedTopics={selectedTopics} onSelectTopic={onSelectTopic}  setMyTopicList={setMyTopicList}/>
      <FavBadge isFavPhotoExist={!!isFavPhotoExist} selected={true} />
    </div>
  );
};
export default TopNavigation;