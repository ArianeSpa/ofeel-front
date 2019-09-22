import { combineReducers } from 'redux';
import userReducer from 'src/store/reducers/userReducer';
import appReducer from 'src/store/reducers/appReducer';
import postReducer from 'src/store/reducers/postReducer';
import mealPlanReducer from 'src/store/reducers/mealPlanReducer';
import workoutReducer from 'src/store/reducers/workoutReducer';


const reducers = {
  userReducer,
  appReducer,
  mealPlanReducer,
  postReducer,
  workoutReducer,
};

export default combineReducers(reducers);
