// reducer pour l'app en général

// == Initial State
const initialState = {
  goal: '',
  gender: '',
  age: 18,
  taille: 140,
  poids: 45,
  activity: '',
  sansgluten: false,
  vegan: false,
  sanslactose: false,
  activeIndex: -1,
};

const SAVE_GOAL = 'SAVE_GOAL';
const SAVE_PROFIL = 'SAVE_PROFIL';
const CHECK_REGIME = 'CHECK_REGIME';
const SAVE_ACTIVE_INDEX = 'SAVE_ACTIVE_INDEX';
const SAVE_POSTS_PAGES = 'SAVE_POSTS_PAGES';
const SAVE_POSTS = 'SAVE_POSTS';

export const SET_MY_FEELING_API = 'SET_MY_FEELING_API';
export const ASK_PAGES_POSTS_INFO = 'ASK_PAGES_POSTS_INFO';
export const ASK_POSTS = 'ASK_POSTS';

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROFIL:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_GOAL:
      return {
        ...state,
        [action.name]: action.id,
      };
    case CHECK_REGIME:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_ACTIVE_INDEX:
      if (action.index === state.activeIndex) {
        action.index = -1;
      }
      return {
        ...state,
        [action.name]: action.index,
      };
    case SAVE_POSTS_PAGES:
      return{
        ...state,
        postspages: action.numberpages,
      }
    case SAVE_POSTS:
      return{
        ...state,
        dataposts: action.dataposts,
      }

    default:
      return state;
  }
};


export const saveGoal = (name, id) => (
  {
    type: SAVE_GOAL,
    id,
    name,
  });

export const checkRegime = (name, value) => (
  {
    type: CHECK_REGIME,
    name,
    value,
  }
);

export const saveProfil = (name, value) => (
  {
    type: SAVE_PROFIL,
    value,
    name,
  });

export const setMyFeelingAPI = () => ({
  type: SET_MY_FEELING_API,
});


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

export const askPosts = () =>({
  type: ASK_POSTS,
})

export const savePosts = (dataposts) => ({
  type: SAVE_POSTS,
  dataposts,
})


export default appReducer;
