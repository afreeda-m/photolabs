import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  // Extract relevant information from props
  const { urls, location, user } = props.data;

  // Define a function 'handleImageClick' to handle image click events
  const handleImageClick = () => {
    // Dispatch actions to display photo details and set photo data
    props.dispatch({type: 'DISPLAY_PHOTO_DETAILS', isVisible: true})
    props.dispatch({type: 'SET_PHOTO_DATA', data: props.data})
  }

  let imageClassName = 'photo-list__image'
  let imageUrl = urls.regular;
  if (props.isFull) {
    imageClassName = 'photo-details-modal__image'
    imageUrl = urls.full;
  }

  return (
    // Render a section element
    <section className="photo-list__item">
      <PhotoFavButton
      photoID = {props.photoID}
      dispatch = {props.dispatch}
      photo={props.data}
      favoritedPhotos={props.favoritedPhotos}
      />
      {/* Conditionally render image based on if modal is open or not */}
      {props.isClickable && <img className={imageClassName} src={imageUrl} onClick={handleImageClick}/>}
      {!props.isClickable && <img className={imageClassName} src={imageUrl}/>}
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