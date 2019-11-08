// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignUp from 'src/components/Home/SignUp';
import {
  accountCreation, changeNewsletterBinary, changeUserValue,
} from 'src/store/reducers/userReducer';
import { informUser } from 'src/store/reducers/appReducer';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  username: state.userReducer.username,
  email: state.userReducer.email,
  newsletter: state.userReducer.newsletter,
  savedPreference: state.userReducer.savedPreference,
  password: state.userReducer.password,
  passwordConf: state.userReducer.passwordConf,
  message: state.appReducer.message,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeNewsletter: (checked) => {
    const action = changeNewsletterBinary('newsletter', checked);
    dispatch(action);
  },

  createAccount: () => {
    dispatch(accountCreation());
  },

  changeUserData: (name, value) => {
    dispatch(changeUserValue(name, value));
  },
  showMessage: (name, message) => {
    dispatch(informUser(name, message));
  },
});

// Container
const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// == Export
export default SignUpContainer;
