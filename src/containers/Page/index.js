// == Import : npm
import { connect } from 'react-redux';

// == Import : local
/* import Page from 'src/components/Page'; */

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  message: state.message,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

// == Export
export default PageContainer;
