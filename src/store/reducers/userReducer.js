// reducer concernant la gestion du user

// == Initial State
const initialState = {
  logged: false,
  username: '',
  password: '',
  passwordConf: '',
  email: '',
  token: '',
  newsletter: 0,
  savedPreference: '',
};

// == Types
const SAVE_USER = 'SAVE_USER';
const LOG_OUT = 'LOG_OUT';
const CHANGE_NEWSLETTER = 'CHANGE_NEWSLETTER';
const PREFERENCE_USER_SAVED = 'PREFERENCE_USER_SAVED';
const SAVE_USER_INFO = 'SAVE_USER_INFO';


export const AUTHENTICATE = 'AUTHENTICATE';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NEWSLETTER:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      console.log('je suis dans userReducer');
      console.log(action);
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
    case PREFERENCE_USER_SAVED:
      return {
        ...state,
        savedPreference: action.bool,
      };
    case SAVE_USER_INFO:
      return {
        ...state,
        [action.name]: action.value,
      }
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

export const changeNewsletterBinary = (name, value) => ({
  type: CHANGE_NEWSLETTER,
  value,
  name,
});

export const preferenceUserSaved = (bool) => ({
  type: PREFERENCE_USER_SAVED,
  bool,
});

export const changeUserValue = (name, value) => ({
  type: SAVE_USER_INFO,
  name,
  value,
})

export default userReducer;
