import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import appReducer from "./reducers/appReducer";
import postReducer from "./reducers/postReducer";
import mealPlanReducer from "./reducers/mealPlanReducer";
import workoutReducer from "./reducers/workoutReducer";

const reducers = {
  userReducer,
  appReducer,
  mealPlanReducer,
  postReducer,
  workoutReducer,
};

export default combineReducers(reducers);
