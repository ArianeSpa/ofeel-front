// == Import : npm
import { connect } from "react-redux";

// == Import : local
import { Goal } from "./Goal";

// Action Creators
import {
  saveGoal,
  checkRegime,
  setGoalAPI,
  savePMeal,
  clearAllMessageAndInform,
  resetMessageModal,
} from "@/store/reducers/appReducer";

import { sortFoodChoice } from "@/store/reducers/mealPlanReducer";

/* === State (données) === */
const mapStateToProps = (state: {
  appReducer: {
    goal: any;
    sanslactose: any;
    sansgluten: any;
    vegan: any;
    energyExpenditure: any;
    errorMessagesSignup: any;
  };
  userReducer: { savedPreference: any };
}) => ({
  goal: state.appReducer.goal,
  sanslactose: state.appReducer.sanslactose,
  sansgluten: state.appReducer.sansgluten,
  vegan: state.appReducer.vegan,
  energyExpenditure: state.appReducer.energyExpenditure,
  savedPreference: state.userReducer.savedPreference,
  errorMessagesSignup: state.appReducer.errorMessagesSignup,
});

/* === Actions === */
const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    id?: any;
    name?: any;
    value?: any;
    props?: any;
    vegan?: any;
    sanslactose?: any;
    sansgluten?: any;
  }) => void
) => ({
  changeGoal: (id: any) => {
    const action = saveGoal("goal", id);
    dispatch(action);
  },
  selectRegime: (name: any, value: any) => {
    const action = checkRegime(name, value);
    dispatch(action);
  },

  savePropMeal: (props: any) => {
    const action = savePMeal(props);
    dispatch(action);
  },

  sendToAPI: () => {
    dispatch(setGoalAPI());
  },

  sortFood: (sanslactose: any, sansgluten: any, vegan: any) => {
    const action = sortFoodChoice(sanslactose, sansgluten, vegan);
    dispatch(action);
  },
  clearAllAndInform: (value: any) => {
    dispatch(clearAllMessageAndInform(value));
  },
  resetMessage: () => {
    dispatch(resetMessageModal());
  },
});

// Container
const GoalsContainer = connect(mapStateToProps, mapDispatchToProps)(Goal);

// == Export
export default GoalsContainer;
