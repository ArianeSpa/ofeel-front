// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import PostsList from 'src/components/Page/PostView/PostsList';

// Action Creators
import {
  saveActiveIndex, changeSortBool, cancelSortBool, sortPost,
} from 'src/store/reducers/postReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  activeIndex: state.postReducer.activeIndex,
  dataposts: state.postReducer.dataposts,
  postsToShow: state.postReducer.postsToShow,
  loadingPosts: state.postReducer.loadingPosts,
  sante: state.postReducer.sante,
  alimentation: state.postReducer.alimentation,
  sport: state.postReducer.sport,
  recuperation: state.postReducer.recuperation,
  divers: state.postReducer.divers,
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
  cancelSort: () => {
    const action = cancelSortBool();
    dispatch(action);
  },
  sortDataPosts: (dataposts) => {
    const action = sortPost(dataposts);
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
