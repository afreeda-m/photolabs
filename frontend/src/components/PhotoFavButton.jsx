import React, { useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton(props) {

  // Define a state variable 'isFav' and a function 'setIsFav' to toggle favorite status
  const [isFav, setIsFav] = useState(false);

  // Extract photoID from props
  const photoID = props.photoID;

  // Define 'favSwitch' function to toggle the favorite status and dispatch an action
  const favSwitch = () => {
    setIsFav(!isFav);
    // Dispatch an action based on the current favorite status
    if (!isFav) {
      props.dispatch({type: 'FAV_PHOTO_ADDED', id: photoID})
    } else {
      props.dispatch({type: 'FAV_PHOTO_REMOVED', id: photoID})
    }

  };

  return (
    // Render a clickable div
    <div onClick={favSwitch} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;