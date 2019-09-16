// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Goals from 'src/components/Page/Dashboard/Goals';

// Action Creators
import { saveGoal, checkRegime } from 'src/store/reducers/appReducer';


/* === State (données) === */
const mapStateToProps = (state) => ({
  goal: state.appReducer.goal,
  sanslactose: state.appReducer.sanslactose,
  sansgluten: state.appReducer.sansgluten,
  vegan: state.appReducer.vegan,
  isCheckedRegime: state.appReducer.isCheckedRegime,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeGoal: (id) => {
    const action = saveGoal('goal', id);
    // console.log('je suis dans changeGoal du container');
    dispatch(action);
  },
  selectRegime: (name, value) => {
    const action = checkRegime(name, value);
    // console.log('je suis dans selectRegime du container');
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
