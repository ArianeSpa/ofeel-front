// == Import : npm
import { connect } from 'react-redux';

// == Import : local
/* import MyFeeling from 'src/components/MyFeeling'; */

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  message: state.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const MyFeelingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyFeeling);

// == Export
export default MyFeelingContainer;
