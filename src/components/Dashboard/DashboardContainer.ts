// == Import : npm
import { connect } from "react-redux";
import Dashboard from "./Dashboard";

// == Import : local

// Action Creators

/* === State (données) === */
const mapStateToProps = (state: { userReducer: { logged: any } }) => ({
  logged: state.userReducer.logged,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

// == Export
export default DashboardContainer;
