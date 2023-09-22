import React, { useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton(props) {

  const [isFav, setIsFav] = useState(false);

  const photoID = props.photoID;

  const favSwitch = () => {
    setIsFav(!isFav);
    if (!isFav) {
      props.dispatch({type: 'FAV_PHOTO_ADDED', id: photoID})
    } else {
      props.dispatch({type: 'FAV_PHOTO_REMOVED', id: photoID})
    }

  };

  return (
    <div onClick={favSwitch} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;