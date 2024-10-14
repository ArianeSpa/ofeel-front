// == Import : npm
import { connect } from "react-redux";

// == Import : local

// Action Creators
import {
  saveProfil,
  setMyFeelingAPI,
  saveMetabAndCal,
  changeMessageListValue,
  clearMessageListValue,
  clearAllMessageAndInform,
  resetMessageModal,
} from "@/store/reducers/appReducer";
import { Profile } from "./Profile";

/* === State (données) === */
const mapStateToProps = (state: {
  appReducer: {
    gender: any;
    age: any;
    height: any;
    weight: any;
    activity: any;
    errorMessagesSignup: any;
  };
  userReducer: { savedPreference: any };
}) => ({
  gender: state.appReducer.gender,
  age: state.appReducer.age,
  height: state.appReducer.height,
  weight: state.appReducer.weight,
  activity: state.appReducer.activity,
  savedPreference: state.userReducer.savedPreference,
  errorMessagesSignup: state.appReducer.errorMessagesSignup,
});

/* === Actions === */
const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  changeProfil: (name: any, value: any) => {
    const action = saveProfil(name, value);
    dispatch(action);
  },
  saveMetaboCalorie: (object: {
    basalMetabolicRate: any;
    energyExpenditure: any;
  }) => {
    const action = saveMetabAndCal(
      object.basalMetabolicRate,
      object.energyExpenditure
    );
    dispatch(action);
  },
  sendToAPI: () => {
    dispatch(setMyFeelingAPI());
  },
  changeMessageList: (value: any) => {
    dispatch(changeMessageListValue(value));
  },

  clearMessageList: (value: any) => {
    dispatch(clearMessageListValue(value));
  },

  clearAllAndInform: (value: any) => {
    dispatch(clearAllMessageAndInform(value));
  },
  resetMessage: () => {
    dispatch(resetMessageModal());
  },
});
// Container
const ProfilContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

// == Export
export default ProfilContainer;
