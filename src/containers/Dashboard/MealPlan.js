// == Import : npm
import { connect } from 'react-redux';

// == Import : local
/* import MealPlan from 'src/components/MealPlan'; */

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  message: state.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const MealPlanContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealPlan);

// == Export
export default MealPlanContainer;
