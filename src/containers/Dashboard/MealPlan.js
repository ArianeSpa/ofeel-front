// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MealPlan from 'src/components/Page/Dashboard/MealPlan/index.js'; 

// Action Creators
import { changeValueFood } from 'src/store/reducers/mealPlanReducer';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  datafood: state.mealPlanReducer.datafood,
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
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeFoodValue: (value, stateElementToChange) => {
    const action = changeValueFood (stateElementToChange, value);
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
