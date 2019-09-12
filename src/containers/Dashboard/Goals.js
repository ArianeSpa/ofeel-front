// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Goals from 'src/components/Page/Dashboard/Goals';

// Action Creators
import { saveGoal, newCheckValue } from 'src/store/reducers/appReducer';


/* === State (données) === */
const mapStateToProps = (state) => ({
  goal: state.appReducer.goal,
  isChecked: state.appReducer.isChecked,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeGoal: (id) => {
    const action = saveGoal('goal', id);
    // console.log('je suis dans changeGoal du container');
    dispatch(action);
  },
  changeCheckboxValue: (id) => {
    const action = newCheckValue('isChecked', id);
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
