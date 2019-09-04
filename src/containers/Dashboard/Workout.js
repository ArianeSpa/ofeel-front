// == Import : npm
import { connect } from 'react-redux';

// == Import : local
/* import Workout from 'src/components/Workout'; */

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  message: state.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const WorkoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Workout);

// == Export
export default WorkoutContainer;
