// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MyFeelingProfile from '../../components/Page/Dashboard/MyFeelingProfile';


// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  profiles: state.appReducer.profiles,
});
/* === Actions === */
const mapDispatchToProps = {};

// Container
const MyFeelingProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyFeelingProfile);

// == Export
export default MyFeelingProfileContainer;
