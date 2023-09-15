import React from "react";

import photos from "mocks/photos";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem key={photoData.id} data={photoData} />
      ))}
    </ul>
  );
};

export default PhotoList;
