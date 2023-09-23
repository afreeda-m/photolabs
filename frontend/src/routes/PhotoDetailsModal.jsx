import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoListItem from "components/PhotoListItem";
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = (props) => {
  return (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button">
          <img src={closeSymbol} onClick={() => {props.dispatch({type: 'DISPLAY_PHOTO_DETAILS', isVisible: false})}} alt="close symbol" />
        </button>

        <PhotoListItem
          key={props.selectedPhoto.id}
          photoID = {props.selectedPhoto.id}
          data={props.selectedPhoto}
          selectedPhoto={props.selectedPhoto}
          setIsModalOpen={props.setIsModalOpen}
          dispatch = {props.dispatch}
          isFull={true}
        />

        <div className="photo-details-modal__images">
          <div className="photo-details-modal__header">Similar Photos</div>
            <PhotoList
            photos={Object.values(props.selectedPhoto.similar_photos)}
            selectedPhoto={props.selectedPhoto}
            setIsModalOpen={props.setIsModalOpen}
            hasFavorites={props.hasFavorites}
            dispatch = {props.dispatch}
            />
        </div>
      </div>
  )
};

export default PhotoDetailsModal;