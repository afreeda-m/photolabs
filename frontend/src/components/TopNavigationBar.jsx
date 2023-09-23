import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  const { topics } = props;

  return (
    <div className="top-nav-bar">
      <span onClick={()=> props.dispatch({type: "SET_TOPIC", topicID: null})} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} dispatch = {props.dispatch}/>
      <FavBadge hasFavorites={props.hasFavorites}/>
    </div>
  )
}

export default TopNavigation;