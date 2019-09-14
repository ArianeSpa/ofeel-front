import { combineReducers } from 'redux';
import userReducer from 'src/store/reducers/userReducer';
import appReducer from 'src/store/reducers/appReducer';
import mealPlanReducer from 'src/store/reducers/mealPlanReducer';


const reducers = {
  userReducer,
  appReducer,
  mealPlanReducer,
};

export default combineReducers(reducers);
