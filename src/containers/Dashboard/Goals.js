// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Goals from 'src/components/Dashboard/Goals';

// Action Creators
import {
  saveGoal, checkRegime, setGoalAPI, savePMeal,
} from 'src/store/reducers/appReducer';

import { sortFoodChoice } from 'src/store/reducers/mealPlanReducer';


/* === State (données) === */
const mapStateToProps = (state) => ({
  goal: state.appReducer.goal,
  sanslactose: state.appReducer.sanslactose,
  sansgluten: state.appReducer.sansgluten,
  vegan: state.appReducer.vegan,
  energyExpenditure: state.appReducer.energyExpenditure,
  savedPreference: state.userReducer.savedPreference,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeGoal: (id) => {
    const action = saveGoal('goal', id);
    dispatch(action);
  },
  selectRegime: (name, value) => {
    const action = checkRegime(name, value);
    dispatch(action);
  },

  savePropMeal: (props) => {
    const action = savePMeal(props);
    dispatch(action);
  },

  sendToAPI: () => {
    dispatch(setGoalAPI());
  },

  sortFood: (sanslactose, sansgluten, vegan) => {
    const action = sortFoodChoice(sanslactose, sansgluten, vegan);
    dispatch(action);
  },

});

// Container
const GoalsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Goals);

// == Export
export default GoalsContainer;
