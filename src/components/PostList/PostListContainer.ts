// == Import : npm
import { connect } from "react-redux";

// == Import : local

// Action Creators
import {
  saveActiveIndex,
  changeSortBool,
  cancelSortBool,
  sortPost,
} from "@/store/reducers/postReducer";
import { PostList } from "./PostList";

/* === State (données) === */
const mapStateToProps = (state: {
  postReducer: {
    activeIndex: any;
    dataposts: any;
    postsToShow: any;
    loadingPosts: any;
    sante: any;
    alimentation: any;
    sport: any;
    recuperation: any;
    divers: any;
  };
}) => ({
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
const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    index?: any;
    name?: any;
    subject?: any;
    dataposts?: any;
  }) => void
) => ({
  changeActiveIndex: (index: any) => {
    const action = saveActiveIndex("activeIndex", index);
    dispatch(action);
  },
  changeSort: (subject: any) => {
    const action = changeSortBool(subject);
    dispatch(action);
  },
  cancelSort: () => {
    const action = cancelSortBool();
    dispatch(action);
  },
  sortDataPosts: (dataposts: any) => {
    const action = sortPost(dataposts);
    dispatch(action);
  },
});

// Container
const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

// == Export
export default PostListContainer;
