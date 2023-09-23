import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  return (
    <div className="topic-list__item">
      <span onClick={() => props.dispatch({type: "SET_TOPIC", topicID: props.id})}>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
