// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import GoalRadio from 'src/components/Page/Dashboard/GoalRadio';


// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  checked: state.appReducer.checked,
});
/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeStatusRadio: (checked) => {
    const action = 
  }
})

// Container
const GoalRadioContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalRadio);

// == Export
export default GoalRadioContainer;
