import React from "react";
//import TopicList from "./TopicList";
//import PhotoList from "./PhotoList";
import "../styles/TopicListItem.scss";


const TopicListItem = ({ title, slug, onSelectTopic }) => {
  const handleClick = () => {
    onSelectTopic(slug);
  };
  
  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
