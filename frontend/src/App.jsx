import React, { useState } from 'react';

import useApplicationData from 'Hooks/useApplicationData';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  let {favoritedPhotos, isModalOpen, selectedPhoto, hasFavorites, dispatch} = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
      photos={photos}
      topics={topics}
      hasFavorites={hasFavorites}
      setIsModalOpen={isModalOpen}
      dispatch = {dispatch}
      />
      {isModalOpen && <PhotoDetailsModal
      hasFavorites={hasFavorites}
      setIsModalOpen={isModalOpen}
      selectedPhoto={selectedPhoto}
      dispatch = {dispatch}
      />}
    </div>
  );
};

export default App;