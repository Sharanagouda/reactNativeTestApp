import { combineReducers } from "redux";
import appReducer from "./app-reducer";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  form,
  appReducer
});

export default rootReducer;
