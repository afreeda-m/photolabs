import React from 'react';

import useApplicationData from 'Hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  let {favoritedPhotos, isModalOpen, selectedPhoto, hasFavorites, dispatch, photoData, topicData} = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
      photos={photoData}
      topics={topicData}
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