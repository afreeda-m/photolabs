import React, { useState } from 'react';

import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState({});

  const [isFav, setIsFav] = useState([]);

  const updateFavorites = (photo) => {
    if(isFav.includes(photo)) {
      setIsFav(isFav.filter((id) => id !== photo));
    }else {
      setIsFav([...isFav, photo]);
    }
  }

  const hasFavorites = () => {
    if (isFav.length > 0){
      return true;
    }
    return false;
  }

  return (
    <div className="App">
      <HomeRoute
      photos={photos}
      topics={topics}
      hasFavorites={hasFavorites}
      updateFavorites={updateFavorites}
      setIsModalOpen={setIsModalOpen}
      setSelectedPhoto={setSelectedPhoto}
      setIsFav={setIsFav}
      />
      {isModalOpen && <PhotoDetailsModal
      updateFavorites={updateFavorites}
      hasFavorites={hasFavorites}
      setIsModalOpen={setIsModalOpen}
      setSelectedPhoto={setSelectedPhoto}
      setIsFav={setIsFav}
      selectedPhoto={selectedPhoto}
      />}
    </div>
  );
};

export default App;