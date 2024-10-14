// == Import : npm
import { connect } from "react-redux";
import { Main } from "./Main";

// == Import : local

// Action Creators

/* === State (données) === */
const mapStateToProps = (state: { userReducer: { logged: any } }) => ({
  logged: state.userReducer.logged,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

// == Export
export default MainContainer;
