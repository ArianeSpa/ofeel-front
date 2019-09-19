// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Welcome from 'src/components/Page/Dashboard/Welcome';

// Action Creators
import { askUserData } from 'src/store/reducers/appReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
//   activeIndex: state.appReducer.activeIndex,
//   dataposts: state.appReducer.dataposts,
//   loadingPosts: state.appReducer.loadingPosts,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  catchUserData: () => {
    const action = askUserData();
    dispatch(action);
  },
});

// Container
const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);

// == Export
export default WelcomeContainer;
