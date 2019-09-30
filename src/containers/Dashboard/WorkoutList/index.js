// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Workout from 'src/components/Dashboard/WorkoutList';

// Action Creators
import {
  saveActiveIndex, changeSortBool, sortPost, cancelSortBool,
} from 'src/store/reducers/workoutReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  workoutList: state.workoutReducer.workoutList,
  loadingWorkout: state.workoutReducer.loadingWorkout,
  activeIndex: state.workoutReducer.activeIndex,
  course: state.workoutReducer.course,
  salle: state.workoutReducer.salle,
  maison: state.workoutReducer.maison,
  debutant: state.workoutReducer.debutant,
  intermediaire: state.workoutReducer.intermediaire,
  confirme: state.workoutReducer.confirme,
  workoutToShow: state.workoutReducer.workoutToShow,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeActiveIndex: (index) => {
    const action = saveActiveIndex('activeIndex', index);
    dispatch(action);
  },
  changeSort: (subject) => {
    const action = changeSortBool(subject);
    dispatch(action);
  },
  sortWorkoutData: (workoutList) => {
    const action = sortPost(workoutList);
    dispatch(action);
  },
  cancelSort: () => {
    const action = cancelSortBool();
    dispatch(action);
  },
});

// Container
const WorkoutListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Workout);

// == Export
export default WorkoutListContainer;
