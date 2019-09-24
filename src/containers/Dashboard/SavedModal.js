// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SavedModal from 'src/components/Page/Dashboard/SavedModal';

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
const SavedModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SavedModal);

// == Export
export default SavedModalContainer;

