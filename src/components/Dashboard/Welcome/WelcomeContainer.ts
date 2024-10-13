// == Import : npm
import { connect } from "react-redux";

// == Import : local
import { Welcome } from "@/components/Dashboard/Welcome/Welcome";

// Action Creators

/* === State (données) === */
const mapStateToProps = (_state: any) => ({
  //   message: state.appReducer.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

// == Export
export default WelcomeContainer;
