// == Import : npm
import { connect } from "react-redux";

// == Import : local
import Contact from "./Contact";

// Action Creators

/* === State (données) === */
const mapStateToProps = (state: { message: any }) => ({
  message: state.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

// == Export
export default ContactContainer;
