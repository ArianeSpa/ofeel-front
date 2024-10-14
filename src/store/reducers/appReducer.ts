// reducer pour l'app en général

import { ActionModel, AppStateModel } from "@/models/reducer.model";

// == Initial State
const initialState: AppStateModel = {
  goal: "Equilibre",
  gender: "homme",
  age: 0,
  height: 0,
  weight: 0,
  activity: "Sédentaire",
  sansgluten: false,
  vegan: false,
  sanslactose: false,
  loadingfood: true,
  basalMetabolicRate: 0,
  energyExpenditure: 0,
  headerClassname: "down",
  message: "",
  dailyCalories: 0,
  lunchCalories: 0,
  breakfastAndDinnerCalories: 0,
  dailyCarbohydrateProportion: 0,
  dailyFatProportion: 0,
  dailyProteinProportion: 0,
  lunchCarbsQuantity: 0,
  breakfastAndDinnerCarbsQuantity: 0,
  lunchFatQuantity: 0,
  breakfastAndDinnerFatQuantity: 0,
  lunchProteinQuantity: 0,
  breakfastAndDinnerProteinQuantity: 0,
  yPosition: 0,
  showSignupPassword: false,
  showSignupPasswordConf: false,
  showLoginPassword: false,
  errorMessagesSignup: [],
};

const SAVE_GOAL = "SAVE_GOAL";
const SAVE_PROFIL = "SAVE_PROFIL";
const CHECK_REGIME = "CHECK_REGIME";
const LOAD_FOOD = "LOAD_FOOD";
const SAVE_USER_DATA = "SAVE_USER_DATA";
const FINISH_LOAD_FOOD = "FINISH_LOAD_FOOD";
const SAVE_METABO_CALORIE = "SAVE_METABO_CALORIE";
const SAVE_PROP_MEAL = "SAVE_PROP_MEAL";
const UPDATE_Y_POSITION = "UPDATE_Y_POSITION";
const UPDATE_HEADER_CLASSNAME = "UPDATE_HEADER_CLASSNAME";
const INFORM_USER = "INFORM_USER";
const CHANGE_SHOW = "CHANGE_SHOW";
const CHANGE_MESSAGE_LIST = "CHANGE_MESSAGE_LIST";
const CLEAR_MESSAGE_LIST = "CLEAR_MESSAGE_LIST";
const CLEAR_ALL_MESSAGE_AND_INFORM = "CLEAR_ALL_MESSAGE_AND_INFORM";
const RESET_MESSAGE_MODAL = "RESET_MESSAGE_MODAL";

export const SET_MY_FEELING_API = "SET_MY_FEELING_API";
export const SET_GOAL_API = "SET_GOAL_API";
export const ASK_USER_DATA = "ASK_USER_DATA";

const appReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: AppStateModel = initialState,
  action: ActionModel
) => {
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
        age: action.objectUser?.age,
        weight: action.objectUser?.weight,
        height: action.objectUser?.height,
        gender: action.objectUser?.sexe,
        goal: action.objectUser?.goal,
        vegan: action.objectUser?.regime.includes("Vegan") && true,
        sanslactose: action.objectUser?.regime.includes("lactose") && true,
        sansgluten: action.objectUser?.regime.includes("gluten") && true,
        activity: action.objectUser?.activity,
        energyExpenditure: action.objectUser?.energyExpenditure,
        basalMetabolicRate: action.objectUser?.basalMetabolicRate,
        dailyCalories: action.objectUser?.dailyCalories,
        lunchCalories: action.objectUser?.lunchCalories,
        breakfastAndDinnerCalories:
          action.objectUser?.breakfastAndDinnerCalories,
        dailyCarbohydrateProportion:
          action.objectUser?.dailyCarbohydrateProportion,
        dailyFatProportion: action.objectUser?.dailyFatProportion,
        dailyProteinProportion: action.objectUser?.dailyProteinProportion,
        lunchCarbsQuantity: action.objectUser?.lunchCarbsQuantity,
        breakfastAndDinnerCarbsQuantity:
          action.objectUser?.breakfastAndDinnerCarbsQuantity,
        lunchFatQuantity: action.objectUser?.lunchFatQuantity,
        breakfastAndDinnerFatQuantity:
          action.objectUser?.breakfastAndDinnerFatQuantity,
        lunchProteinQuantity: action.objectUser?.lunchProteinQuantity,
        breakfastAndDinnerProteinQuantity:
          action.objectUser?.breakfastAndDinnerProteinQuantity,
      };
    case SAVE_METABO_CALORIE:
      return {
        ...state,
        basalMetabolicRate: action.basalMetabolicRate,
        energyExpenditure: action.energyExpenditure,
      };
    case SAVE_PROP_MEAL:
      return {
        ...state,
        dailyCalories: action.props?.dailyCalories,
        lunchCalories: action.props?.lunchCalories,
        breakfastAndDinnerCalories: action.props?.breakfastAndDinnerCalories,
        dailyCarbohydrateProportion: action.props?.dailyCarbohydrateProportion,
        dailyFatProportion: action.props?.dailyFatProportion,
        dailyProteinProportion: action.props?.dailyProteinProportion,
        lunchCarbsQuantity: action.props?.lunchCarbsQuantity,
        breakfastAndDinnerCarbsQuantity:
          action.props?.breakfastAndDinnerCarbsQuantity,
        lunchFatQuantity: action.props?.lunchFatQuantity,
        breakfastAndDinnerFatQuantity:
          action.props?.breakfastAndDinnerFatQuantity,
        lunchProteinQuantity: action.props?.lunchProteinQuantity,
        breakfastAndDinnerProteinQuantity:
          action.props?.breakfastAndDinnerProteinQuantity,
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
    case INFORM_USER:
      return {
        ...state,
        [action.name]: action.message,
      };
    case CHANGE_SHOW:
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    case CHANGE_MESSAGE_LIST:
      if (!state.errorMessagesSignup.includes(action.value)) {
        return {
          ...state,
          errorMessagesSignup: [...state.errorMessagesSignup, action.value],
        };
      }
      return {
        ...state,
      };
    case CLEAR_MESSAGE_LIST:
      return {
        ...state,
        errorMessagesSignup: state.errorMessagesSignup.filter(
          (message) => message !== action.value
        ),
      };
    case CLEAR_ALL_MESSAGE_AND_INFORM:
      return {
        ...state,
        errorMessagesSignup: [action.value],
      };
    case RESET_MESSAGE_MODAL:
      return {
        ...state,
        errorMessagesSignup: [],
      };
    default:
      return state;
  }
};

export const saveGoal = (name: string, id: any) => ({
  type: SAVE_GOAL,
  id,
  name,
});

export const checkRegime = (name: string, value: any) => ({
  type: CHECK_REGIME,
  name,
  value,
});

export const saveProfil = (name: string, value: any) => ({
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

export const saveDataUser = (objectUser: any) => ({
  type: SAVE_USER_DATA,
  objectUser,
});

export const saveMetabAndCal = (
  basalMetabolicRate: number,
  energyExpenditure: number
) => ({
  type: SAVE_METABO_CALORIE,
  basalMetabolicRate,
  energyExpenditure,
});

export const savePMeal = (props: any) => ({
  type: SAVE_PROP_MEAL,
  props,
});

export const updateYPosition = (name: string, value: any) => ({
  type: UPDATE_Y_POSITION,
  value,
  name,
});

export const updateHeaderClassname = (name: string, value: any) => ({
  type: UPDATE_HEADER_CLASSNAME,
  name,
  value,
});

export const informUser = (name: string, message: string) => ({
  type: INFORM_USER,
  name,
  message,
});

export const setGoalAPI = () => ({
  type: SET_GOAL_API,
});

export const changeShowValue = (name: string) => ({
  type: CHANGE_SHOW,
  name,
});

export const changeMessageListValue = (value: any) => ({
  type: CHANGE_MESSAGE_LIST,
  value,
});

export const clearMessageListValue = (value: any) => ({
  type: CLEAR_MESSAGE_LIST,
  value,
});

export const clearAllMessageAndInform = (value: any) => ({
  type: CLEAR_ALL_MESSAGE_AND_INFORM,
  value,
});

export const resetMessageModal = () => ({
  type: RESET_MESSAGE_MODAL,
});

export default appReducer;
