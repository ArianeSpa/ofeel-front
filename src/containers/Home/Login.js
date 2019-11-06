// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Login from 'src/components/Home/Login';

// Action Creators
import { changeUserValue, authenticate } from 'src/store/reducers/userReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  username: state.userReducer.username,
  password: state.userReducer.password,
  savedPreference: state.userReducer.savedPreference,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  doAuthenticate: () => {
    dispatch(authenticate());
  },
  changeUserData: (name, value) => {
    dispatch(changeUserValue(name, value));
  },
});

// Container
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// == Export
export default LoginContainer;
