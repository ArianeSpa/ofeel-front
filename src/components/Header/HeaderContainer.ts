// == Import : npm
import { connect } from "react-redux";

// == Import : local
import { Header } from "./Header";

// Action Creators
import {
  updateYPosition,
  updateHeaderClassname,
} from "@/store/reducers/appReducer";

/* === State (données) === */
const mapStateToProps = (state: {
  userReducer: { logged: any };
  appReducer: { yPosition: any; headerClassname: any };
}) => ({
  logged: state.userReducer.logged,
  yPosition: state.appReducer.yPosition,
  headerClassname: state.appReducer.headerClassname,
});

/* === Actions === */
const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  changeViewPosition: (value: any) => {
    dispatch(updateYPosition("yPosition", value));
  },
  changeHeaderClassname: (value: any) => {
    dispatch(updateHeaderClassname("headerClassname", value));
  },
});

// Container
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

// == Export
export default HeaderContainer;
