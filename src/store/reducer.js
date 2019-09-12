import { combineReducers } from 'redux';
import userReducer from 'src/store/reducers/userReducer';
import appReducer from 'src/store/reducers/appReducer';

const reducers = {
  userReducer,
  appReducer,
};

export default combineReducers(reducers);
