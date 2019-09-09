// reducer concernant la gestion du user

// == Initial State
const initialState = {
  logged: false,
  username: '',
  password: '',
  email: '',
  token: '',
};

// == Types
const CHANGE_USERNAME = 'CHANGE_USERNAME';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const CHANGE_EMAIL = 'CHANGE_EMAIL';
const SAVE_USER = 'SAVE_USER';
const LOG_OUT = 'LOG_OUT';


export const AUTHENTICATE = 'AUTHENTICATE';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

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
    case CHANGE_EMAIL:
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
    case LOG_OUT:
      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
};

export const authenticate = () => ({
  type: AUTHENTICATE,
});

export const accountCreation = () => ({
  type: CREATE_ACCOUNT,
});

export const endSession = () => ({
  type: LOG_OUT,
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
export const changeValueEmail = (name, value) => ({
  type: CHANGE_EMAIL,
  value,
  name,
});


export default userReducer;
