import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {

  // Extract relevant information from props to render the component
  const { topics, hasFavorites } = props;

  return (
    <div className="top-nav-bar">
      {/* Render a clickable PhotoLabs logo with an onClick event to reset the selected topic */}
      <span onClick={()=> props.dispatch({type: "SET_TOPIC", topicID: null})} className="top-nav-bar__logo">PhotoLabs</span>
       {/* Render the TopicList component with 'topics' and 'dispatch' props */}
      <TopicList topics={topics} dispatch = {props.dispatch}/>
       {/* Render the FavBadge component with 'hasFavorites' prop */}
      <FavBadge hasFavorites={hasFavorites}/>
    </div>
  )
}

export default TopNavigation;