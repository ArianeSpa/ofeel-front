// == Import : npm
import { connect } from 'react-redux';

// == Import : local
/* import OnePostView from 'src/components/OnePostView'; */

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  message: state.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const OnePostViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OnePostView);

// == Export
export default OnePostViewContainer;
