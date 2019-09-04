// == Import : npm
import { connect } from 'react-redux';

// == Import : local
/* import Goals from 'src/components/Goals'; */

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  message: state.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const GoalsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Goals);

// == Export
export default GoalsContainer;
