import React from 'react';

import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import './App.scss';
//import PhotoListItem from './components/PhotoListItem';

// const renderPhotos = () => {
//   const photos = new Array(3).fill(sampleDataForPhotoListItem);

//   return photos.map((photo, index) => (
//     <PhotoListItem key={index} photo={photo}/>
//   ))
// }

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {renderPhotos()} */}
      <PhotoList/>
    </div>
  );
};

export default App;
