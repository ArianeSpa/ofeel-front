// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MyFeelingProfile from 'src/components/Page/Dashboard/MyFeeling/MyFeelingProfile';


// Action Creators

/* === State (données) === */
const mapStateToProps = {};
/* === Actions === */
const mapDispatchToProps = {};

// Container
const MyFeelingProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyFeelingProfile);

// == Export
export default MyFeelingProfileContainer;
