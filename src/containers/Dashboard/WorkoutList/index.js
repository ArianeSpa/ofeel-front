// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Workout from 'src/components/Page/Dashboard/WorkoutList';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  workoutList: state.workoutReducer.workoutList,
  loadingWorkout: state.workoutReducer.loadingWorkout,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const WorkoutListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Workout);

// == Export
export default WorkoutListContainer;
