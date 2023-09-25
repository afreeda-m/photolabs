import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  // Extract photos obkect from props
  const { photos } = props;

  return (
    // Render an unordered list with the class 'photo-list'
    <ul className="photo-list">
      {/* Map through the 'photos' array and render a PhotoListItem component for each photo */}
      {photos.map((photo) => (
        <PhotoListItem
        key={photo.id}
        photoID = {photo.id}
        data={photo}
        selectedPhoto={props.selectedPhoto}
        setIsModalOpen={props.setIsModalOpen}
        dispatch = {props.dispatch}
        isFull={false}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
