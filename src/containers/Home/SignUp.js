// == Import : npm
import { connect } from 'react-redux';

// == Import : local
/* import SignUp from 'src/components/SignUp'; */

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  message: state.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const SignUp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// == Export
export default SignUp;
