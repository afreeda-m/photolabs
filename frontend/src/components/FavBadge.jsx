import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

// Define the FavBadge component which takes 'props' as argument
const FavBadge = (props) => {
  return (
    // Create a div element with the 'fav-badge' CSS class
    <div className='fav-badge'>
      <FavIcon displayAlert={props.hasFavorites} selected={props.hasFavorites}/>
    </div>
  )
};

export default FavBadge;