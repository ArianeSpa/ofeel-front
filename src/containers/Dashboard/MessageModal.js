// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MessageModal from 'src/components/Dashboard/MessageModal';

// Action Creators
import { preferenceUserSaved } from 'src/store/reducers/userReducer';


// === State (données) ===
const mapStateToProps = (state) => ({
  message: state.message,
});


// === Actions ===
const mapDispatchToProps = (dispatch) => ({
  preferenceSaved: (value) => {
    const action = preferenceUserSaved(value);
    dispatch(action);
  },
});

// Container
const MessageModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageModal);

// == Export
export default MessageModalContainer;

