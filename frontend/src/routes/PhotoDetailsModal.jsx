import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoListItem from "components/PhotoListItem";
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = (props) => {
  return (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button">
          <img src={closeSymbol} onClick={() => {props.setIsModalOpen(false)}}alt="close symbol" />
        </button>

        <PhotoListItem
          key={props.selectedPhoto.id}
          photoID = {props.selectedPhoto.id}
          data={props.selectedPhoto}
          updateFavorites={props.updateFavorites}
          selectedPhoto={props.selectedPhoto}
          setSelectedPhoto={props.setSelectedPhoto}
          setIsModalOpen={props.setIsModalOpen}
          isFull={true}
        />

        <div className="photo-details-modal__header">Similar Photos</div>

        <PhotoList
        photos={Object.values(props.selectedPhoto.similar_photos)}
        updateFavorites={props.updateFavorites}
        selectedPhoto={props.selectedPhoto}
        setSelectedPhoto={props.setSelectedPhoto}
        setIsModalOpen={props.setIsModalOpen}
        hasFavorites={props.hasFavorites}
        />

      </div>
  )
};

export default PhotoDetailsModal;