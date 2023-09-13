import React, { Format } from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <>
      <img src={props.imageSource}></img>
      <img src={props.profile}></img>
      <h3>{props.username}</h3>
      <h3>{props.locationCity} {props.locationCountry}</h3>
    </>
  )
};

export default PhotoListItem;
