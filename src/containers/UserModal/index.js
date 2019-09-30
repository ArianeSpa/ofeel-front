// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import UserModal from 'src/components/UserModal';
import { endSession } from 'src/store/reducers/userReducer';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  username: state.userReducer.username,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(endSession());
  },
});

// Container
const UserModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserModal);

// == Export
export default UserModalContainer;
