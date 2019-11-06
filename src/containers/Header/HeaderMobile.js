// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators
import { updateYPosition } from 'src/store/reducers/appReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  logged: state.userReducer.logged,
  position: state.userReducer.position,

  yPosition: state.appReducer.yPosition,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeViewPosition: (value) => {
    dispatch(updateYPosition('yPosition', value));
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
