import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">

      {/* Render the TopNavigation component with relevant props */}
      <TopNavigation
      topics={props.topics}
      hasFavorites={props.hasFavorites}
      dispatch = {props.dispatch}
      />

      {/* Render the PhotoList component with relevant props */}
      <PhotoList
      photos={props.photos}
      selectedPhoto={props.selectedPhoto}
      setIsModalOpen={props.setIsModalOpen}
      hasFavorites={props.hasFavorites}
      dispatch = {props.dispatch}
      />

    </div>
  );
};

export default HomeRoute;
