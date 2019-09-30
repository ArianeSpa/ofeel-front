// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignUp from 'src/components/Home/SignUp';
import {
  changeValueUsername, changeValueEmail, accountCreation, changeNewsletterBinary,
} from 'src/store/reducers/userReducer';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  username: state.userReducer.username,
  email: state.userReducer.email,
  newsletter: state.userReducer.newsletter,
  savedPreference: state.userReducer.savedPreference,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeInputUsername: (value) => {
    const action = changeValueUsername('username', value);
    dispatch(action);
  },
  changeInputEmail: (value) => {
    const action = changeValueEmail('email', value);
    dispatch(action);
  },

  changeNewsletter: (checked) => {
    const action = changeNewsletterBinary('newsletter', checked);
    dispatch(action);
  },

  createAccount: () => {
    dispatch(accountCreation());
  },
});

// Container
const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// == Export
export default SignUpContainer;
