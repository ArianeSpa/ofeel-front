// reducer concernant la gestion des articles

// == Initial State
const initialState = {
  activeIndex: -1,
  dataposts: [],
  loadingPosts: true,
  postspages: 0,
};

// ACTION TYPE
const SAVE_ACTIVE_INDEX = 'SAVE_ACTIVE_INDEX';
const SAVE_POSTS_PAGES = 'SAVE_POSTS_PAGES';
const SAVE_POSTS = 'SAVE_POSTS';
const LOAD_POSTS = 'LOAD_POSTS';
const FINISH_LOAD_POSTS = 'FINISH_LOAD_POSTS';

export const ASK_PAGES_POSTS_INFO = 'ASK_PAGES_POSTS_INFO';


const postReducer = (state = initialState, action = {}) => {
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
    default:
      return state;
  }
};

export const saveActiveIndex = (name, index) => ({
  type: SAVE_ACTIVE_INDEX,
  index,
  name,
});

export const askPagesPostsInfo = () => ({
  type: ASK_PAGES_POSTS_INFO,
});

export const savePostsPages = (numberpages) => ({
  type: SAVE_POSTS_PAGES,
  numberpages,
});

export const savePosts = (dataposts) => ({
  type: SAVE_POSTS,
  dataposts,
});

export const loadPosts = () => ({
  type: LOAD_POSTS,
});

export const finishLoadPosts = () => ({
  type: FINISH_LOAD_POSTS,
});

export default postReducer;
