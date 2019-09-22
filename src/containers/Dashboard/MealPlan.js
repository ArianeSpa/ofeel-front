// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MealPlan from 'src/components/Page/Dashboard/MealPlan';

// Action Creators
import { changeValueFood, newCheckValue, sortFoodChoice } from 'src/store/reducers/mealPlanReducer';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  datafood: state.mealPlanReducer.datafood,
  vegan: state.appReducer.vegan,
  sanslactose: state.appReducer.sanslactose,
  sansgluten: state.appReducer.sansgluten,
  proteinebreakfast: state.mealPlanReducer.proteinebreakfast,
  proteinelunch: state.mealPlanReducer.proteinelunch,
  proteinedinner: state.mealPlanReducer.proteinedinner,
  proteinesnack: state.mealPlanReducer.proteinesnack,
  lipidebreakfast: state.mealPlanReducer.lipidebreakfast,
  lipidelunch: state.mealPlanReducer.lipidelunch,
  lipidedinner: state.mealPlanReducer.lipidedinner,
  glucidebreakfast: state.mealPlanReducer.glucidebreakfast,
  glucidelunch: state.mealPlanReducer.glucidelunch,
  glucidedinner: state.mealPlanReducer.glucidedinner,
  glucidesnack: state.mealPlanReducer.glucidesnack,
  breakfastcheck: state.mealPlanReducer.breakfastcheck,
  lunchcheck: state.mealPlanReducer.lunchcheck,
  dinnercheck: state.mealPlanReducer.dinnercheck,
  snackcheck: state.mealPlanReducer.snackcheck,
  loadingfood: state.appReducer.loadingfood,
  state: state.appReducer,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeFoodValue: (value, stateElementToChange) => {
    const action = changeValueFood(stateElementToChange, value);
    dispatch(action);
  },
  changeCheckValue: (name) => {
    const action = newCheckValue(name);
    dispatch(action);
  },
  sortFood: (vegan, sanslactose, sansgluten) => {
    const action = sortFoodChoice(vegan, sanslactose, sansgluten);
    dispatch(action);
  },


});

// Container
const MealPlanContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealPlan);

// == Export
export default MealPlanContainer;
