import { combineReducers } from 'redux';
import userReducer from 'src/store/reducers/userReducer';
import appReducer from 'src/store/reducers/appReducer';
import postReducer from 'src/store/reducers/postReducer';
import mealPlanReducer from 'src/store/reducers/mealPlanReducer';


const reducers = {
  userReducer,
  appReducer,
  mealPlanReducer,
  postReducer,
};

export default combineReducers(reducers);
