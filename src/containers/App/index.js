// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App'; 

// Action Creators
import { askFoodInfo } from 'src/store/reducers/mealPlanReducer';


/* === State (données) === */
const mapStateToProps = () => ({
//   message: state.message,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
    catchFoodInfo: () => {
        const action = askFoodInfo();
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
