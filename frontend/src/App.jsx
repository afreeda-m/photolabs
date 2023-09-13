import React from 'react';

import './App.scss';
import PhotoListItem from './components/PhotoListItem';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const renderPhotos = () => {
  const photos = new Array(3).fill(sampleDataForPhotoListItem);
  console.log(photos);

  return photos.map((photo, index) => (
    <PhotoListItem key={index} photo={photo}/>
  ))
}

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {renderPhotos()}
    </div>
  );
};

export default App;
