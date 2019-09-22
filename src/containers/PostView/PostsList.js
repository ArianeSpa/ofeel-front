// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import PostsList from 'src/components/Page/PostView/PostsList';

// Action Creators
import { saveActiveIndex } from 'src/store/reducers/postReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  activeIndex: state.postReducer.activeIndex,
  dataposts: state.postReducer.dataposts,
  loadingPosts: state.postReducer.loadingPosts,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeActiveIndex: (index) => {
    const action = saveActiveIndex('activeIndex', index);
    dispatch(action);
  },
  changeSort: (subject) => {
    const action = changeSortBool(subject);
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
