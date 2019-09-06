// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Dashboard from 'src/components/Page/Dashboard';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  logged: state.userReducer.logged,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

// == Export
export default DashboardContainer;
