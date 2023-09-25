import { useEffect, useReducer } from "react";

// Define and export user action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTO_CATALOGUE: 'SET_PHOTO_CATALOGUE',
  SET_TOPIC: 'SET_TOPIC'
}

// Define the custom hook
const useApplicationData = () => {

  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    favoritedPhotos: [],
    isModalOpen: false,
    selectedPhoto: {},
    hasFavorites: false,
    photoData: [],
    topicData: [],
    selectedTopic: null
  });

  // Utalize useEffect hook to fetch PHOTO data from the API
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({type: ACTIONS.SET_PHOTO_CATALOGUE, payload: data })
      });
  }, []);

  // Utalize useEffect hook to fetch TOPIC data from the API
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data })
      });
  }, []);

  // Fetch photo data based on selected topic
  useEffect(() => {
    // If no topic is selected, show all photos (when clicke don PhotoLabs logo or when page initially loads)
    if (!state.selectedTopic){
      fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({type: ACTIONS.SET_PHOTO_CATALOGUE, payload: data })
      });
    } else {
      fetch("http://localhost:8001/api/topics/photos/" + state.selectedTopic)
      .then((response) => response.json())
      .then((data) => {
        dispatch({type: ACTIONS.SET_PHOTO_CATALOGUE, payload: data })
      });
    }
      // Set selectedTopic as a dependency for above code execution
  }, [state.selectedTopic]);

  // use Reducer function to handle state updates
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
      case ACTIONS.SET_PHOTO_CATALOGUE:
        return {...state, photoData: action.payload}
      case ACTIONS.SET_TOPIC_DATA:
        return {...state, topicData: action.payload}
      case ACTIONS.SET_TOPIC:
        return {...state, selectedTopic: action.topicID}
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  let {favoritedPhotos, isModalOpen, selectedPhoto, hasFavorites, photoData, topicData} = state

  return {favoritedPhotos, isModalOpen, selectedPhoto, hasFavorites, dispatch, photoData, topicData}

}

export default useApplicationData;