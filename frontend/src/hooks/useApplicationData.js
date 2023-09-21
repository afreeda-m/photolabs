import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    favoritedPhotos: [],
    isModalOpen: false,
    selectedPhoto: {}
  })

  const hasFavorites = () => {
    if (state.favoritedPhotos.length > 0){
      return true;
    }
    return false;
  }

  function reducer(state, action) {
    switch (action.type) {
      case FAV_PHOTO_ADDED:
        return {...state, favoritedPhotos: [...state.favoritedPhotos, action.id]}
      case FAV_PHOTO_REMOVED:
        let favoritedPhotos;
        favoritedPhotos = prevState.favoritedPhotos.filter((id) => id !== action.photo)
        return {...state, favoritedPhotos}
      case SET_PHOTO_DATA:
        let selectedPhoto = action.data;
        return {...state, selectedPhoto}
      case DISPLAY_PHOTO_DETAILS:
        let isModalOpen = action.isVisible;
        return {...state, isModalOpen}
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }


}

export default useApplicationData;