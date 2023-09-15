import React from "react";

import topics from "mocks/topics";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
       {topics.map((topic) => (
        <TopicListItem key={topic.id} title={topic.title} />
      ))}
    </div>
  );
};

export default TopicList;
