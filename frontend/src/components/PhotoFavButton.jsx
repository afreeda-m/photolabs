import React, { useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton(props) {

  // Define a state variable 'isFav' and a function 'setIsFav' to toggle favorite status

  let currentState = false;
  if (props.favoritedPhotos.includes(props.photoID)){
    currentState = true;
  }

  // Extract photoID from props
  const photoID = props.photoID;

  // Define 'favSwitch' function to toggle the favorite status and dispatch an action
  const favSwitch = () => {
    props.dispatch({type: 'UPDATE_FAV_PHOTO', id: photoID})
  };

  return (
    // Render a clickable div
    <div onClick={favSwitch} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={currentState}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;