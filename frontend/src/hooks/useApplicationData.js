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
    selectedPhoto: {},
    hasFavorites: false
  });

  let {favoritedPhotos, isModalOpen, selectedPhoto, hasFavorites} = state

  function reducer(state, action) {
    let favoritedPhotos;
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        favoritedPhotos = [...state.favoritedPhotos, action.id]
        return {...state, favoritedPhotos, hasFavorites: favoritedPhotos.length > 0}
      case ACTIONS.FAV_PHOTO_REMOVED:
        favoritedPhotos = state.favoritedPhotos.filter((id) => id !== action.id)
        return {...state, favoritedPhotos, hasFavorites: favoritedPhotos.length > 0}
      case ACTIONS.SET_PHOTO_DATA:
        let selectedPhoto = action.data;
        return {...state, selectedPhoto}
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        let isModalOpen = action.isVisible;
        return {...state, isModalOpen}
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  return {favoritedPhotos, isModalOpen, selectedPhoto, hasFavorites, dispatch}

}

export default useApplicationData;