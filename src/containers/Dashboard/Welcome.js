// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Welcome from 'src/components/Page/Dashboard/Welcome';

// Action Creators


/* === State (données) === */
const mapStateToProps = (state) => ({
//   message: state.appReducer.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);

// == Export
export default WelcomeContainer;
