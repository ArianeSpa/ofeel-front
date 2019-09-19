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
  loadingPosts: true,
  loadingfood: true,
  user_metabo: 0,
  cal_jour: 0,
};

const SAVE_GOAL = 'SAVE_GOAL';
const SAVE_PROFIL = 'SAVE_PROFIL';
const CHECK_REGIME = 'CHECK_REGIME';
const SAVE_ACTIVE_INDEX = 'SAVE_ACTIVE_INDEX';
const SAVE_POSTS_PAGES = 'SAVE_POSTS_PAGES';
const SAVE_POSTS = 'SAVE_POSTS';
const LOAD_POSTS = 'LOAD_POSTS';
const LOAD_FOOD = 'LOAD_FOOD';
const FINISH_LOAD_POSTS = 'FINISH_LOAD_POSTS';
const SAVE_USER_DATA = 'SAVE_USER_DATA';
const FINISH_LOAD_FOOD = 'FINISH_LOAD_FOOD';
const SAVE_METABO_CALORIE = 'SAVE_METABO_CALORIE';
const SAVE_PROP_MEAL = 'SAVE_PROP_MEAL';


export const SET_MY_FEELING_API = 'SET_MY_FEELING_API';
export const ASK_PAGES_POSTS_INFO = 'ASK_PAGES_POSTS_INFO';
export const ASK_POSTS = 'ASK_POSTS';
export const ASK_USER_DATA = 'ASK_USER_DATA';

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
      };
      return {
        ...state,
        [action.name]: action.index,
      };
    case SAVE_POSTS_PAGES:
      return{
        ...state,
        postspages: action.numberpages,
      };
    case SAVE_POSTS:
      return{
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
    case LOAD_FOOD:
      return {
        ...state,
        loadingfood: true,
      };
    case FINISH_LOAD_FOOD:
      return {
        ...state,
        loadingfood: false,
      };
    case SAVE_USER_DATA:  
      return {
        ...state,
        age: action.objectUser.age,
        poids: action.objectUser.poids,
        taille: action.objectUser.taille,
        gender: action.objectUser.sexe,
        goal: action.objectUser.goal,
        vegan: action.objectUser.regime.includes("vegan") && true,
        sanslactose: action.objectUser.regime.includes("sans-lactose") && true,
        sansgluten: action.objectUser.regime.includes("sans-gluten") && true,
        activity: action.objectUser.activity,
        cal_jour: action.objectUser.cal_jour,
        user_metabo: action.objectUser.user_metabo,
        cal_dej: action.objectUser.cal_dej,
        cal_obj: action.objectUser.cal_obj,
        cal_p_dej_din : action.objectUser.cal_p_dej_din,
        prop_glu: action.objectUser.prop_glu,
        prop_lip: action.objectUser.prop_lip,
        prop_prot: action.objectUser.prop_prot,
        q_glu_dej: action.objectUser.q_glu_dej,
        q_glu_p_dej_din: action.objectUser.q_glu_p_dej_din,
        q_lip_dej: action.objectUser.q_lip_dej,
        q_lip_p_dej_din: action.objectUser.q_lip_p_dej_din,
        q_prot_dej: action.objectUser.q_prot_dej,
        q_prot_p_dej_din: action.objectUser.q_prot_p_dej_din,

      };
    case SAVE_METABO_CALORIE:
      return {
        ...state,
        user_metabo: action.metaboBase,
        cal_jour: action.calorieJour,
      };
    case SAVE_PROP_MEAL:
      return {
        ...state,
        cal_dej: action.props.cal_dej,
        cal_obj: action.props.cal_obj,
        cal_p_dej_din : action.props.cal_p_dej_din,
        prop_glu: action.props.prop_glu,
        prop_lip: action.props.prop_lip,
        prop_prot: action.props.prop_prot,
        q_glu_dej: action.props.q_glu_dej,
        q_glu_p_dej_din: action.props.q_glu_p_dej_din,
        q_lip_dej: action.props.q_lip_dej,
        q_lip_p_dej_din: action.props.q_lip_p_dej_din,
        q_prot_dej: action.props.q_prot_dej,
        q_prot_p_dej_din: action.props.q_prot_p_dej_din,
      };

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

export const loadPosts = () => ({
  type: LOAD_POSTS,
});

export const finishLoadPosts = () => ({
  type: FINISH_LOAD_POSTS,
});

export const loadFood = () => ({
  type: LOAD_FOOD,
});

export const finishLoadFood = () => ({
  type: FINISH_LOAD_FOOD,
})

export const askUserData = () =>({
  type: ASK_USER_DATA,
})

export const saveDataUser = (objectUser) => ({
  type: SAVE_USER_DATA,
  objectUser,
})

export const saveMC = (metaboBase, calorieJour) =>({
  type: SAVE_METABO_CALORIE,
  metaboBase,
  calorieJour,
})

export const savePMeal = (props) => ({
  type: SAVE_PROP_MEAL,
  props,
})

export default appReducer;
