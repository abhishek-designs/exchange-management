import { combineReducers } from "redux";
import operatorReducer from "./operatorReducer";

export default combineReducers({
  operator: operatorReducer,
});
