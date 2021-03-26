import {
    ENTREPRISE_REGISTER,
    ENTREPRISEREGISTER_SUCCESS,
    ENTREPRISEREGISTER_FAIL,
    ENTREPRISE_LOGIN,
    ENTREPRISELOGIN_FAIL,
    ENTREPRISELOGIN_SUCCESS,
    GET_PROFILEENTREPRISE,
    GET_PROFILEENTREPRISE_SUCCESS,
    GET_PROFILEENTREPRISE_FAIL,
  } from "../constants/actionsTypes";
  import axios from "axios";
     ///////// Partie Entreprise ////////
   export const entrepriseRegister = (newEntreprise) => async (dispatch) => {
    dispatch({ type: ENTREPRISE_REGISTER });
 
    try {
      const addResultE = await axios.post("/entreprise/entrepriseregister", newEntreprise);
  
      dispatch({ type: ENTREPRISEREGISTER_SUCCESS, payload: addResultE.data });
    } catch (error) {
      dispatch({ type: ENTREPRISEREGISTER_FAIL, payload: error.response.data });
    }
  };
  export const entrepriseLogin = (entrepriseLog) => async (dispatch) => {
    dispatch({ type: ENTREPRISE_LOGIN });
  
    try {
      const loginResultE = await axios.post("/entreprise/entrepriselogin", entrepriseLog);
  
      // console.log(loginResultE);
      localStorage.setItem("mytoken", loginResultE.data.mytoken);
  
      dispatch({ type: ENTREPRISELOGIN_SUCCESS, payload: loginResultE.data});

    } catch (error) {
      console.log(error);
      dispatch({ type: ENTREPRISELOGIN_FAIL, payload: error.response.data });
    }
  };
  export const getentreprise = () => async (dispatch) => {
     dispatch({ type: GET_PROFILEENTREPRISE });
  
    try {
      const config = {
        headers: {
          Authorization: localStorage.getItem("mytoken"),
        },
      };
      const entreprise = await axios.get("/entreprise/entreprisecurrent",config);
      dispatch({ type: GET_PROFILEENTREPRISE_SUCCESS, payload: entreprise.data });
      console.log(entreprise.data)
    } 
    catch (error) {
      dispatch({ type: GET_PROFILEENTREPRISE_FAIL, payload: error.response.data });
    }
  };


  //  export const getentreprise = () => (dispatch) => {
  //    axios
  //     .get(`/entreprise/entreprisecurrent`)
  //     .then((res) => dispatch({ type: GET_PROFILEENTREPRISE_SUCCESS, payload: res.data }))
  //      .catch((err) => console.log(err));
  //  };

  export const editEntreprise = (id, editEntreprise) => (dispatch) => {
    axios
      .put(`/entreprise/updateentreprise/${id}`, editEntreprise)
      .then(() => dispatch(getentreprise()))
      .catch((err) => console.log(err));
  };
  

  