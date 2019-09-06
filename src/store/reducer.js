/* 
import { combineReducers } from 'redux';
import userReducer from 'src/store/reducers/userReducer';

const reducers = {
  userReducer,
};

export default combineReducers(reducers);
 */
// == Initial State
const initialState = {
  message: 'Hello',
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

// == Action Creators
export const doSomething = message => ({
  type: DO_SOMETHING,
  message,
});


// == Selectors


// == Export
export default reducer;
