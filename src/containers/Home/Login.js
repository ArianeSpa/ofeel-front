// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Login from 'src/components/Home/Login';

// Action Creators
import { changeUserValue, authenticate } from 'src/store/reducers/userReducer';
import { changeShowValue } from 'src/store/reducers/appReducer';


/* === State (données) === */
const mapStateToProps = (state) => ({
  username: state.userReducer.username,
  password: state.userReducer.password,
  message: state.appReducer.message,
  showLoginPassword: state.appReducer.showLoginPassword,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  doAuthenticate: () => {
    dispatch(authenticate());
  },
  changeUserData: (name, value) => {
    dispatch(changeUserValue(name, value));
  },
  changeStateShow: (name) => {
    dispatch(changeShowValue(name));
  },
});

// Container
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// == Export
export default LoginContainer;
