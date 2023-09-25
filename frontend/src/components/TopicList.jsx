import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// Define the TopicList functional component which takes 'props' as its argument
const TopicList = (props) => {

  // Extract the 'topics' from the 'props' object passed from TopNavigationBar
  const { topics } = props;

  return (
    // Render a div element
    <div className="top-nav-bar__topic-list">
       {topics.map((topic) => (
        <TopicListItem key={topic.id} title={topic.title} id = {topic.id} dispatch = {props.dispatch}/>
      ))}
    </div>
  );
};

export default TopicList;