// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Main from 'src/components/Main';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  logged: state.userReducer.logged,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

// == Export
export default MainContainer;
