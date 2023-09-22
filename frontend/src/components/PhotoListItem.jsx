import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { urls, location, user } = props.data;

  const handleImageClick = () => {
    props.dispatch({type: 'DISPLAY_PHOTO_DETAILS', isVisible: true})
    props.dispatch({type: 'SET_PHOTO_DATA', data: props.data})
  }

  return (
    <section className="photo-list__item">
      <PhotoFavButton
      photoID = {props.photoID}
      dispatch = {props.dispatch}
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