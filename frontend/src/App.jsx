import React from 'react';

import useApplicationData from 'Hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // Extract all relevant information (data and functions) from the imported useApplicationData function
  let {isModalOpen, selectedPhoto, hasFavorites, dispatch, photoData, topicData} = useApplicationData();

  return (
    <div className="App">
      {/* Render the HomeRoute component by passing relevant props */}
      <HomeRoute
      photos={photoData}
      topics={topicData}
      hasFavorites={hasFavorites}
      setIsModalOpen={isModalOpen}
      dispatch = {dispatch}
      />

      {/* Conditionally render the PhotoDetailsModal component if 'isModalOpen' is true */}
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