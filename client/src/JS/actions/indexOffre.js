import {
    GET_OFFRE,
    GET_OFFRES,
    TOGGLE_FALSE,
    TOGGLE_TRUE,
  } from "../constants/actionsTypes";
  import axios from "axios";
  
  export const getOffres = () => (dispatch) => {
    axios
      .get("/api/offres")
      .then((res) => dispatch({ type: GET_OFFRES, payload: res.data }))
      .catch((err) => console.log(err));
  };
  
  export const getOffre = (id) => (dispatch) => {
    axios
      .get(`/api/offres/${id}`)
      .then((res) => dispatch({ type: GET_OFFRE, payload: res.data }))
      .catch((err) => console.log(err));
  };
  
  export const addOffre = (newOffre) => (dispatch) => {
    axios
      .post("/api/offres", newOffre)
      .then(() => dispatch(getOffres()))
      .catch((err) => console.log(err));
  };
  
  export const deleteOffre = (id) => (dispatch) => {
    axios
      .delete(`/api/Offre/${id}`)
      .then(() => dispatch(getOffres()))
      .catch((err) => console.log(err));
  };
  
  export const editOffre = (id, editOffre) => (dispatch) => {
    axios
      .put(`/api/offres/${id}`, editOffre)
      .then(() => dispatch(getOffres()))
      .catch((err) => console.log(err));
  };
  
  export const toggleTrue = () => {
    return {
      type: TOGGLE_TRUE,
    };
  };
  export const toggleFalse = () => {
    return {
      type: TOGGLE_FALSE,
    };
  };
  