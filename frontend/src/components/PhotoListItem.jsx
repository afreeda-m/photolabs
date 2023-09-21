import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { urls, location, user } = props.data;

  const handleImageClick = () => {
    props.setIsModalOpen(true);
    props.setSelectedPhoto(props.data);
  }

  return (
    <section className="photo-list__item">
      <PhotoFavButton
      photoID = {props.photoID}
      updateFavorites={props.updateFavorites}
      photo={props.data}
      />
      {!props.isFull && <img className="photo-list__image" onClick={handleImageClick} src={urls.regular}/>}
      {props.isFull && <img className="photo-details-modal__image" src={urls.full}/>}
      <div className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          <h3 className="photo-list__user-info">{user.username}</h3>
          <h3 className="photo-list__user-location">{location.city}, {location.country}</h3>
        </div>
      </div>
    </section>
  )
};

export default PhotoListItem;