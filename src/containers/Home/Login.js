// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Login from 'src/components/Page/Home/Login';
import { changeValueUsername, changeValuePassword, authenticate } from 'src/store/reducers/userReducer';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  username: state.userReducer.username,
  password: state.userReducer.password,
  savedPreference: state.userReducer.savedPreference,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeInputUsername: (value) => {
    const action = changeValueUsername('username', value);
    dispatch(action);
  },
  changeInputPassword: (value) => {
    const action = changeValuePassword('password', value);
    dispatch(action);
  },
  doAuthenticate: () => {
    dispatch(authenticate());
  },
});

// Container
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// == Export
export default LoginContainer;
