// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignUp from 'src/components/Page/Home/SignUp';
import { changeValueUsername, changeValueEmail, accountCreation } from 'src/store/reducers/userReducer';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  username: state.userReducer.username,
  email: state.userReducer.email,
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
