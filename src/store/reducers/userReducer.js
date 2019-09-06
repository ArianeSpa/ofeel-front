// reducer concernant la gestion du user

// == Initial State
const initialState = {
  logged: true,
  username: '',
  password: '',
  token: '',
};

// == Types
const CHANGE_USERNAME = 'CHANGE_USERNAME';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const SAVE_USER = 'SAVE_USER';


export const AUTHENTICATE = 'AUTHENTICATE';

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        logged: true,
        token: action.token,
      };

    default:
      return state;
  }
};

export const authenticate = () => ({
  type: AUTHENTICATE,
});

export const saveUser = (token) => ({
  type: SAVE_USER,
  token,
});

export const changeValueUsername = (name, value) => ({
  type: CHANGE_USERNAME,
  value,
  name,
});

export const changeValuePassword = (name, value) => ({
  type: CHANGE_PASSWORD,
  value,
  name,
});

export default userReducer;
