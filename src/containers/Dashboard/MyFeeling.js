// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MyFeeling from 'src/components/Page/Dashboard/MyFeeling';

// Action Creators
import { saveGender } from 'src/store/reducers/appReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  gender: state.appReducer.gender,
  profiles: state.appReducer.profiles,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeGender: (id) => {
    const action = saveGender('gender', id);
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
