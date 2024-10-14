// == Import : npm
import { connect } from "react-redux";

// == Import : local
import {
  accountCreation,
  changeNewsletterBinary,
  changeUserValue,
} from "@/store/reducers/userReducer";
import {
  informUser,
  changeShowValue,
  changeMessageListValue,
  clearMessageListValue,
  clearAllMessageAndInform,
} from "@/store/reducers/appReducer";
import { SignUp } from "./SignUp";

// Action Creators

/* === State (données) === */
const mapStateToProps = (state: {
  userReducer: {
    username: any;
    email: any;
    newsletter: any;
    savedPreference: any;
    password: any;
    passwordConf: any;
  };
  appReducer: {
    message: any;
    showSignupPassword: any;
    showSignupPasswordConf: any;
    errorMessagesSignup: any;
  };
}) => ({
  username: state.userReducer.username,
  email: state.userReducer.email,
  newsletter: state.userReducer.newsletter,
  savedPreference: state.userReducer.savedPreference,
  password: state.userReducer.password,
  passwordConf: state.userReducer.passwordConf,
  message: state.appReducer.message,
  showSignupPassword: state.appReducer.showSignupPassword,
  showSignupPasswordConf: state.appReducer.showSignupPasswordConf,
  errorMessagesSignup: state.appReducer.errorMessagesSignup,
});

/* === Actions === */
const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    value?: any;
    name?: any;
    message?: any;
  }) => void
) => ({
  changeNewsletter: (checked: any) => {
    const action = changeNewsletterBinary("newsletter", checked);
    dispatch(action);
  },

  createAccount: () => {
    dispatch(accountCreation());
  },

  changeUserData: (name: any, value: any) => {
    dispatch(changeUserValue(name, value));
  },
  showMessage: (name: any, message: any) => {
    dispatch(informUser(name, message));
  },

  changeStateShow: (name: any) => {
    dispatch(changeShowValue(name));
  },

  changeMessageList: (value: any) => {
    dispatch(changeMessageListValue(value));
  },

  clearMessageList: (value: any) => {
    dispatch(clearMessageListValue(value));
  },

  clearAllAndInform: (value: any) => {
    dispatch(clearAllMessageAndInform(value));
  },
});

// Container
const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

// == Export
export default SignUpContainer;
