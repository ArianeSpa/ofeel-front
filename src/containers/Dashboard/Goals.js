// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Goals from 'src/components/Page/Dashboard/Goals';

// Action Creators
import { saveGoal, checkRegime, setMyFeelingAPI, savePMeal } from 'src/store/reducers/appReducer';


/* === State (données) === */
const mapStateToProps = (state) => ({
  goal: state.appReducer.goal,
  sanslactose: state.appReducer.sanslactose,
  sansgluten: state.appReducer.sansgluten,
  vegan: state.appReducer.vegan,
  cal_jour: state.appReducer.cal_jour,
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
    dispatch(setMyFeelingAPI());
  },
});

// Container
const GoalsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Goals);

// == Export
export default GoalsContainer;
