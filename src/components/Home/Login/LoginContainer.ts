// == Import : npm
import { connect } from "react-redux";

// == Import : local

// Action Creators
import { changeUserValue, authenticate } from "@/store/reducers/userReducer";
import { changeShowValue } from "@/store/reducers/appReducer";
import { Login } from "./Login";

/* === State (données) === */
const mapStateToProps = (state: {
  userReducer: { username: any; password: any };
  appReducer: { message: any; showLoginPassword: any };
}) => ({
  username: state.userReducer.username,
  password: state.userReducer.password,
  message: state.appReducer.message,
  showLoginPassword: state.appReducer.showLoginPassword,
});

/* === Actions === */
const mapDispatchToProps = (
  dispatch: (arg0: { type: string; name?: any; value?: any }) => void
) => ({
  doAuthenticate: () => {
    dispatch(authenticate());
  },
  changeUserData: (name: any, value: any) => {
    dispatch(changeUserValue(name, value));
  },
  changeStateShow: (name: any) => {
    dispatch(changeShowValue(name));
  },
});

// Container
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

// == Export
export default LoginContainer;
