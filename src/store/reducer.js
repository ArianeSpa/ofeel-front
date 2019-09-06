import { combineReducers } from 'redux';
import userReducer from 'src/store/reducers/userReducer';

const reducers = {
  userReducer,
};

export default combineReducers(reducers);
