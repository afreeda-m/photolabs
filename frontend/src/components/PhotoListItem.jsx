import React, { Format } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { urls, user, location } = props.data;

  return (
    <section className="photo-list__item">
      <PhotoFavButton/>
      <img src={urls.regular} className="photo-list__image"></img>
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
