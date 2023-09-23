import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const { topics } = props;

  return (
    <div className="top-nav-bar__topic-list">
       {topics.map((topic) => (
        <TopicListItem key={topic.id} title={topic.title} id = {topic.id} dispatch = {props.dispatch}/>
      ))}
    </div>
  );
};

export default TopicList;