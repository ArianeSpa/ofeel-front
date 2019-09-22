// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators
import { askPagesFoodInfo } from 'src/store/reducers/mealPlanReducer';
import { askPagesPostsInfo } from 'src/store/reducers/postReducer';


/* === State (données) === */
const mapStateToProps = () => ({
//   message: state.message,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  catchFoodInfo: () => {
    const action = askPagesFoodInfo();
    dispatch(action);
  },
  catchPostsInfo: () => {
    const action = askPagesPostsInfo();
    dispatch(action);
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
