import { combineReducers } from 'redux';
import userReducer from 'src/store/reducers/userReducer';
import appReducer from 'src/store/reducers/appReducer';
import mealPlanReducer from 'src/store/reducers/mealPlanReducer';
import workoutReducer from 'src/store/reducers/workoutReducer';


const reducers = {
  userReducer,
  appReducer,
  mealPlanReducer,
  workoutReducer,
};

export default combineReducers(reducers);
