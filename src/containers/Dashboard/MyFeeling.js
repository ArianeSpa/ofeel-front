// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MyFeeling from 'src/components/Dashboard/MyFeeling';

// Action Creators
import {
  saveProfil,
  setMyFeelingAPI,
  saveMetabAndCal,
  changeMessageListValue,
  clearMessageListValue,
  clearAllMessageAndInform,
  resetMessageModal,
} from 'src/store/reducers/appReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  gender: state.appReducer.gender,
  age: state.appReducer.age,
  height: state.appReducer.height,
  weight: state.appReducer.weight,
  activity: state.appReducer.activity,
  savedPreference: state.userReducer.savedPreference,
  errorMessagesSignup: state.appReducer.errorMessagesSignup,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeProfil: (name, value) => {
    const action = saveProfil(name, value);
    dispatch(action);
  },
  saveMetaboCalorie: (object) => {
    const action = saveMetabAndCal(object.basalMetabolicRate, object.energyExpenditure);
    dispatch(action);
  },
  sendToAPI: () => {
    dispatch(setMyFeelingAPI());
  },
  changeMessageList: (value) => {
    dispatch(changeMessageListValue(value));
  },

  clearMessageList: (value) => {
    dispatch(clearMessageListValue(value));
  },

  clearAllAndInform: (value) => {
    dispatch(clearAllMessageAndInform(value));
  },
  resetMessage: () => {
    dispatch(resetMessageModal());
  },
});
// Container
const MyFeelingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyFeeling);

// == Export
export default MyFeelingContainer;
