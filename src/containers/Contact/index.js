// == Import : npm
import { connect } from 'react-redux';

// == Import : local
/* import Contact from 'src/components/Contact'; */

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  message: state.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

// == Export
export default ContactContainer;
