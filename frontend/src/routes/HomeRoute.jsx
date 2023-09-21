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
      />

      <PhotoList
      photos={props.photos}
      updateFavorites={props.updateFavorites}
      selectedPhoto={props.selectedPhoto}
      setSelectedPhoto={props.setSelectedPhoto}
      setIsModalOpen={props.setIsModalOpen}
      hasFavorites={props.hasFavorites}
      />

    </div>
  );
};

export default HomeRoute;
