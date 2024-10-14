// == Import : npm
import { connect } from "react-redux";

// == Import : local
import { endSession } from "@/store/reducers/userReducer";
import { UserModal } from "./UserModal";

// Action Creators

/* === State (données) === */
const mapStateToProps = (state: { userReducer: { logged: any } }) => ({
  logged: state.userReducer.logged,
});

/* === Actions === */
const mapDispatchToProps = (dispatch: (arg0: { type: string }) => void) => ({
  logout: () => {
    dispatch(endSession());
  },
});

// Container
const UserModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserModal);

// == Export
export default UserModalContainer;
