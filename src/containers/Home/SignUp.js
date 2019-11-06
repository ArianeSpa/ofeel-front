// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignUp from 'src/components/Home/SignUp';
import {
  accountCreation, changeNewsletterBinary, changeUserValue,
} from 'src/store/reducers/userReducer';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  username: state.userReducer.username,
  email: state.userReducer.email,
  newsletter: state.userReducer.newsletter,
  savedPreference: state.userReducer.savedPreference,
  password: state.userReducer.password,
  passwordConf: state.userReducer.passwordConf,
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
});

// Container
const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// == Export
export default SignUpContainer;
