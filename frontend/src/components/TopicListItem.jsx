import React, { useState } from 'react';
//import TopicList from "./TopicList";
//import PhotoList from "./PhotoList";
import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };


const TopicListItem = ({ title, slug, onSelectTopic, selected }) => {
  const [isTopicSelected, setIsTopicSelected] = useState(selected);

  const handleClick = () => {
    setIsTopicSelected(!isTopicSelected);
    console.log(slug)
    onSelectTopic(slug);
  };
  
  return (
   
    <div className={`topic-list__item ${isTopicSelected ? 'selected' : ''}`} onClick={handleClick}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
