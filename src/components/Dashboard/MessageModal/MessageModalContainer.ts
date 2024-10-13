// == Import : npm
import { connect } from "react-redux";

// == Import : local
import { MessageModal } from "./MessageModal";

// Action Creators
import { preferenceUserSaved } from "@/store/reducers/userReducer";

// === State (données) ===
const mapStateToProps = (state: { message: any }) => ({
  message: state.message,
});

// === Actions ===
const mapDispatchToProps = (
  dispatch: (arg0: { type: string; bool: any }) => void
) => ({
  preferenceSaved: (value: any) => {
    const action = preferenceUserSaved(value);
    dispatch(action);
  },
});

// Container
const MessageModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageModal);

// == Export
export default MessageModalContainer;
