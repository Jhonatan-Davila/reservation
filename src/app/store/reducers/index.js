import { combineReducers } from "redux";
import eventReducer from "./event.reducer";
import resourceReducer from "./resource.reducer";

const rootReducer = combineReducers({
  event: eventReducer,
  resource: resourceReducer
});

export default rootReducer;
