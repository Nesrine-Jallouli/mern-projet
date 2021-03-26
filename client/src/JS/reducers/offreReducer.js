import {
    GET_OFFRE,
    GET_OFFRES,
    TOGGLE_FALSE,
    TOGGLE_TRUE,
  } from "../constants/actionsTypes";
  
  const intialState = {
    offres: [],
    offreId: {},
    isEdit: false,
  };
  
  const offreReducer = (state = intialState, action) => {
    switch (action.type) {
      case GET_OFFRES:
        return { ...state, offres: action.payload };
  
      case GET_OFFRE:
        return { ...state, offreId: action.payload[0] };
  
      case TOGGLE_TRUE:
        return { ...state, isEdit: true };
  
      case TOGGLE_FALSE:
        return { ...state, isEdit: false };
  
      default:
        return state;
    }
  };
  
  export default offreReducer;
  