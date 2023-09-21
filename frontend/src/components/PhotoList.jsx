import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const { photos } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
        key={photo.id}
        photoID = {photo.id}
        data={photo}
        updateFavorites={props.updateFavorites}
        selectedPhoto={props.selectedPhoto}
        setSelectedPhoto={props.setSelectedPhoto}
        setIsModalOpen={props.setIsModalOpen}
        isFull={false}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
