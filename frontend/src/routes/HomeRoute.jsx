import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">

      <TopNavigation
      topics={props.topics}
      hasFavorites={props.hasFavorites}
      dispatch = {props.dispatch}
      />

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
