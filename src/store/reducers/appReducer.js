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
  loadingfood: true,
  user_metabo: 0,
  cal_jour: 0,
  q_glu_dej: 30,
  q_glu_p_dej_din: 20,
  q_lip_dej: 10,
  q_lip_p_dej_din: 10,
  q_prot_dej: 35,
  q_prot_p_dej_din: 20,
  yPosition: 0,
  headerClassname: 'down',
};

const SAVE_GOAL = 'SAVE_GOAL';
const SAVE_PROFIL = 'SAVE_PROFIL';
const CHECK_REGIME = 'CHECK_REGIME';
const LOAD_FOOD = 'LOAD_FOOD';
const SAVE_USER_DATA = 'SAVE_USER_DATA';
const FINISH_LOAD_FOOD = 'FINISH_LOAD_FOOD';
const SAVE_METABO_CALORIE = 'SAVE_METABO_CALORIE';
const SAVE_PROP_MEAL = 'SAVE_PROP_MEAL';
const UPDATE_Y_POSITION = 'UPDATE_Y_POSITION';
const UPDATE_HEADER_CLASSNAME = 'UPDATE_HEADER_CLASSNAME';


export const SET_MY_FEELING_API = 'SET_MY_FEELING_API';
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
        vegan: action.objectUser.regime.includes('Vegan') && true,
        sanslactose: action.objectUser.regime.includes('lactose') && true,
        sansgluten: action.objectUser.regime.includes('gluten') && true,
        activity: action.objectUser.activity,
        cal_jour: action.objectUser.cal_jour,
        user_metabo: action.objectUser.user_metabo,
        cal_dej: action.objectUser.cal_dej,
        cal_obj: action.objectUser.cal_obj,
        cal_p_dej_din: action.objectUser.cal_p_dej_din,
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
        cal_p_dej_din: action.props.cal_p_dej_din,
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
    case UPDATE_Y_POSITION:
      return {
        ...state,
        [action.name]: action.value,
      };
    case UPDATE_HEADER_CLASSNAME:
      return {
        ...state,
        [action.name]: action.value,
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

export const loadFood = () => ({
  type: LOAD_FOOD,
});

export const finishLoadFood = () => ({
  type: FINISH_LOAD_FOOD,
});

export const askUserData = () => ({
  type: ASK_USER_DATA,
});

export const saveDataUser = (objectUser) => ({
  type: SAVE_USER_DATA,
  objectUser,
});

export const saveMC = (metaboBase, calorieJour) => ({
  type: SAVE_METABO_CALORIE,
  metaboBase,
  calorieJour,
});

export const savePMeal = (props) => ({
  type: SAVE_PROP_MEAL,
  props,
});

export const updateYPosition = (name, value) => ({
  type: UPDATE_Y_POSITION,
  value,
  name,
});

export const updateHeaderClassname = (name, value) => ({
  type: UPDATE_HEADER_CLASSNAME,
  name,
  value,
});

export default appReducer;
