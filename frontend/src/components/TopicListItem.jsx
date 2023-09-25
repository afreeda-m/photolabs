import React from "react";

import "../styles/TopicListItem.scss";

// Define a functional component to render each topic item
const TopicListItem = (props) => {

  return (
    // Render a clickable element with all topics
    <div className="topic-list__item">
      <span onClick={() => props.dispatch({type: "SET_TOPIC", topicID: props.id})}>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
