// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators
import { updateYPosition, updateHeaderClassname } from 'src/store/reducers/appReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  logged: state.userReducer.logged,
  yPosition: state.appReducer.yPosition,
  headerClassname: state.appReducer.headerClassname,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeViewPosition: (value) => {
    dispatch(updateYPosition('yPosition', value));
  },
  changeHeaderClassname: (value) => {
    dispatch(updateHeaderClassname('headerClassname', value));
  },
});

// Container
const HeaderMobileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderMobileContainer;
