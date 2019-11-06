// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import OneMeal from 'src/components/Dashboard/MealPlan/OneMeal';

// Action Creators
import { changeValueFood, newCheckValue, sortFoodChoice } from 'src/store/reducers/mealPlanReducer';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  state: state.appReducer,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeFoodValue: (value, stateElementToChange) => {
    const action = changeValueFood(stateElementToChange, value);
    dispatch(action);
  },
//   changeCheckValue: (name) => {
//     const action = newCheckValue(name);
//     dispatch(action);
//   },
//   sortFood: (vegan, sanslactose, sansgluten) => {
//     const action = sortFoodChoice(vegan, sanslactose, sansgluten);
//     dispatch(action);
//   },


});

// Container
const OneMealContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OneMeal);

// == Export
export default OneMealContainer;
