import React, { useState } from "react";

import photos from "mocks/photos";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem
        key={photoData.id}
        photoID = {photoData.id}
        data={photoData}
        updateFavorites={props.updateFavorites}
        setIsModalOpen={props.setIsModalOpen}/>
      ))}
    </ul>
  );
};

export default PhotoList;
