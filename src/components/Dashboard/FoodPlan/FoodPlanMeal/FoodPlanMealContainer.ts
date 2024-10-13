// == Import : npm
import { connect } from "react-redux";

// == Import : local
import { FoodPlanMeal } from "@/components/Dashboard/FoodPlan/FoodPlanMeal/FoodPlanMeal";

// Action Creators
import { changeValueFood } from "@/store/reducers/mealPlanReducer";

// Action Creators

/* === State (données) === */
const mapStateToProps = (state: { appReducer: any }) => ({
  state: state.appReducer,
});

/* === Actions === */
const mapDispatchToProps = (
  dispatch: (arg0: { type: string; value: any; name: any }) => void
) => ({
  changeFoodValue: (value: any, stateElementToChange: any) => {
    const action = changeValueFood(stateElementToChange, value);
    dispatch(action);
  },
});

// Container
const OneMealContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodPlanMeal);

// == Export
export default OneMealContainer;
