// == Import : npm
import { connect } from "react-redux";

// == Import : local
import { WorkoutList } from "./WorkoutList";

// Action Creators
import {
  saveActiveIndex,
  changeSortBool,
  sortPost,
  cancelSortBool,
} from "@/store/reducers/workoutReducer";

/* === State (données) === */
const mapStateToProps = (state: {
  workoutReducer: {
    workoutList: any;
    loadingWorkout: any;
    activeIndex: any;
    course: any;
    salle: any;
    maison: any;
    debutant: any;
    intermediaire: any;
    confirme: any;
    workoutToShow: any;
  };
}) => ({
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
const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    index?: any;
    name?: any;
    subject?: any;
    dataposts?: any;
  }) => void
) => ({
  changeActiveIndex: (index: any) => {
    const action = saveActiveIndex("activeIndex", index);
    dispatch(action);
  },
  changeSort: (subject: any) => {
    const action = changeSortBool(subject);
    dispatch(action);
  },
  sortWorkoutData: (workoutList: any) => {
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
  mapDispatchToProps
)(WorkoutList);

// == Export
export default WorkoutListContainer;
