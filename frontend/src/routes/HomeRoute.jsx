import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const favList = [];

  const [isFav, setIsFav] = useState(favList);

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
    <div className="home-route">
      <TopNavigation hasFavorites = {hasFavorites}/>
      <PhotoList updateFavorites={updateFavorites}/>
    </div>
  );
};

export default HomeRoute;
