import React from "react";
//import TopicList from "./TopicList";
//import PhotoList from "./PhotoList";
import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };


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
