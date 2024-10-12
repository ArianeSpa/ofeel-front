// == Import : npm
import { connect } from "react-redux";

// == Import : local

// Action Creators
import { askPagesFoodInfo } from "@/store/reducers/mealPlanReducer";
import { askPagesPostsInfo } from "@/store/reducers/postReducer";
import { askPagesWorkoutInfo } from "@/store/reducers/workoutReducer";
import { App } from "./App";

/* === State (données) === */
const mapStateToProps = () => ({
  //   message: state.message,
});

/* === Actions === */
const mapDispatchToProps = (dispatch: any) => ({
  catchFoodInfo: () => {
    const action = askPagesFoodInfo();
    dispatch(action);
  },
  catchPostsInfo: () => {
    const action = askPagesPostsInfo();
    dispatch(action);
  },
  catchWorkoutInfo: () => {
    const action = askPagesWorkoutInfo();
    dispatch(action);
  },
});

// Container
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

// == Export
export default AppContainer;
