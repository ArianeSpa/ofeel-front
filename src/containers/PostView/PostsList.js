// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import PostsList from 'src/components/Page/PostView/PostsList';

import { saveActiveIndex } from 'src/store/reducers/appReducer';


// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  activeIndex: state.appReducer.activeIndex,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeActiveIndex: (index) => {
    const action = saveActiveIndex('activeIndex', index);
    dispatch(action);
  },
});

// Container
const PostsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList);

// == Export
export default PostsListContainer;
