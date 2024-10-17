// reducer concernant la gestion des articles

import { PostModel } from "@/models/post.model";
import { ActionModel, PostStateModel } from "@/models/reducer.model";

// == Initial State
const initialState: PostStateModel = {
  activeIndex: -1,
  dataposts: [],
  postsToShow: [],
  loadingPosts: true,
  postspages: 0,
  alimentation: null,
  sante: null,
  sport: null,
  recuperation: null,
  divers: null,
};

// ACTION TYPE
const SAVE_ACTIVE_INDEX = "SAVE_ACTIVE_INDEX";
const SAVE_POSTS_PAGES = "SAVE_POSTS_PAGES";
const SAVE_POSTS = "SAVE_POSTS";
const LOAD_POSTS = "LOAD_POSTS";
const FINISH_LOAD_POSTS = "FINISH_LOAD_POSTS";
const CHANGE_SORT = "CHANGE_SORT";
const CANCEL_SORT = "CANCEL_SORT";
const SORT_DATAPOSTS = "SORT_DATAPOSTS";

export const ASK_PAGES_POSTS_INFO = "ASK_PAGES_POSTS_INFO";

const postReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: PostStateModel = initialState,
  action: ActionModel
) => {
  switch (action.type) {
    case SAVE_ACTIVE_INDEX:
      if (action.index === state.activeIndex) {
        action.index = -1;
      }
      return {
        ...state,
        [action.name]: action.index,
      };
    case SAVE_POSTS_PAGES:
      return {
        ...state,
        postspages: action.numberpages,
      };
    case SAVE_POSTS:
      return {
        ...state,
        postsToShow: action.dataposts,
        dataposts: action.dataposts,
      };
    case LOAD_POSTS:
      return {
        ...state,
        loadingPosts: true,
      };
    case FINISH_LOAD_POSTS:
      return {
        ...state,
        loadingPosts: false,
      };
    /** @todo FIX */
    // case CHANGE_SORT:
    //     if (state[action.subject] === null) {
    //         return {
    //             ...state,
    //             [action.subject]: true,
    //         };
    //     }
    //     return {
    //         ...state,
    //         [action.subject]: !state[action.subject],
    //     };
    case CANCEL_SORT:
      return {
        ...state,
        postsToShow: state.dataposts,
        alimentation: null,
        sante: null,
        sport: null,
        recuperation: null,
        divers: null,
      };
    case SORT_DATAPOSTS:
      // eslint-disable-next-line no-case-declarations
      const sortedDataposts = state.dataposts.filter((post) => {
        const keepPost =
          (state.alimentation && post.tags === "alimentation") ||
          (state.sante && post.tags === "sante") ||
          (state.sport && post.tags === "sport") ||
          (state.recuperation && post.tags === "recuperation") ||
          (state.divers && post.tags === "divers");
        return keepPost;
      });
      return {
        ...state,
        postsToShow: sortedDataposts,
      };
    default:
      return state;
  }
};

export const saveActiveIndex = (name: string, index: any) => ({
  type: SAVE_ACTIVE_INDEX,
  index,
  name,
});

export const askPagesPostsInfo = () => ({
  type: ASK_PAGES_POSTS_INFO,
});

export const savePostsPages = (numberpages: number) => ({
  type: SAVE_POSTS_PAGES,
  numberpages,
});

export const savePosts = (dataposts: PostModel[]) => ({
  type: SAVE_POSTS,
  dataposts,
});

export const loadPosts = () => ({
  type: LOAD_POSTS,
});

export const finishLoadPosts = () => ({
  type: FINISH_LOAD_POSTS,
});

export const changeSortBool = (subject: any) => ({
  type: CHANGE_SORT,
  subject,
});

export const cancelSortBool = () => ({
  type: CANCEL_SORT,
});

export const sortPost = (dataposts: PostModel[]) => ({
  type: SORT_DATAPOSTS,
  dataposts,
});

export default postReducer;
