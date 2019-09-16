// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MyFeeling from 'src/components/Page/Dashboard/MyFeeling/MyFeeling';

// Action Creators
import { saveProfil } from 'src/store/reducers/appReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  gender: state.appReducer.gender,
  age: state.appReducer.age,
  taille: state.appReducer.taille,
  poids: state.appReducer.poids,
  activity: state.appReducer.activity,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeProfil: (name, value) => {
    const action = saveProfil(name, value);
    dispatch(action);
  },
});
// Container
const MyFeelingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyFeeling);

// == Export
export default MyFeelingContainer;
