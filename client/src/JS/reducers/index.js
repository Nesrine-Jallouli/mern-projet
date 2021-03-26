import { combineReducers } from "redux";
import userReducer from "./userReducer";
import entrepriseReducer from "./entrepriseReducer";
import offreReducer from "./offreReducer";

const rootReducer = combineReducers({
  userReducer,
  entrepriseReducer,
  offreReducer,

});

export default rootReducer;
