import React, { useCallback, useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton() {
  const [isFav, setFav] = useState(false);

  const favSwitch = () => setFav((isFav === false) ? true : false);

  return (
    <div onClick={favSwitch} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;