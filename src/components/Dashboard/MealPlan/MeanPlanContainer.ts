// == Import : npm
import { connect } from "react-redux";

// == Import : local
import { MealPlan } from "./MealPlan";

// Action Creators
import {
  changeValueFood,
  newCheckValue,
} from "@/store/reducers/mealPlanReducer";

// Action Creators

/* === State (données) === */
const mapStateToProps = (state: {
  mealPlanReducer: {
    datafood: any;
    foodToShow: any;
    proteinebreakfast: any;
    proteinelunch: any;
    proteinedinner: any;
    proteinesnack: any;
    lipidebreakfast: any;
    lipidelunch: any;
    lipidedinner: any;
    glucidebreakfast: any;
    glucidelunch: any;
    glucidedinner: any;
    glucidesnack: any;
    breakfastcheck: any;
    lunchcheck: any;
    dinnercheck: any;
    snackcheck: any;
  };
  appReducer: {
    vegan: any;
    sanslactose: any;
    sansgluten: any;
    loadingfood: any;
    lunchFatQuantity: any;
    breakfastAndDinnerFatQuantity: any;
    breakfastAndDinnerCarbsQuantity: any;
    lunchCarbsQuantity: any;
    breakfastAndDinnerProteinQuantity: any;
    lunchProteinQuantity: any;
  };
}) => ({
  datafood: state.mealPlanReducer.datafood,
  foodToShow: state.mealPlanReducer.foodToShow,
  // vegan: state.appReducer.vegan,
  // sanslactose: state.appReducer.sanslactose,
  // sansgluten: state.appReducer.sansgluten,
  proteinebreakfast: state.mealPlanReducer.proteinebreakfast,
  proteinelunch: state.mealPlanReducer.proteinelunch,
  proteinedinner: state.mealPlanReducer.proteinedinner,
  proteinesnack: state.mealPlanReducer.proteinesnack,
  lipidebreakfast: state.mealPlanReducer.lipidebreakfast,
  lipidelunch: state.mealPlanReducer.lipidelunch,
  lipidedinner: state.mealPlanReducer.lipidedinner,
  glucidebreakfast: state.mealPlanReducer.glucidebreakfast,
  glucidelunch: state.mealPlanReducer.glucidelunch,
  glucidedinner: state.mealPlanReducer.glucidedinner,
  glucidesnack: state.mealPlanReducer.glucidesnack,
  breakfastcheck: state.mealPlanReducer.breakfastcheck,
  lunchcheck: state.mealPlanReducer.lunchcheck,
  dinnercheck: state.mealPlanReducer.dinnercheck,
  snackcheck: state.mealPlanReducer.snackcheck,
  loadingfood: state.appReducer.loadingfood,
  state: {
    lunchFatQuantity: state.appReducer.lunchFatQuantity,
    breakfastAndDinnerFatQuantity:
      state.appReducer.breakfastAndDinnerFatQuantity,
    breakfastAndDinnerCarbsQuantity:
      state.appReducer.breakfastAndDinnerCarbsQuantity,
    lunchCarbsQuantity: state.appReducer.lunchCarbsQuantity,
    breakfastAndDinnerProteinQuantity:
      state.appReducer.breakfastAndDinnerProteinQuantity,
    lunchProteinQuantity: state.appReducer.lunchProteinQuantity,
  },
});

/* === Actions === */
const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    value?: any;
    name?: any;
    vegan?: any;
    sanslactose?: any;
    sansgluten?: any;
  }) => void
) => ({
  changeFoodValue: (value: any, stateElementToChange: any) => {
    const action = changeValueFood(stateElementToChange, value);
    dispatch(action);
  },
  changeCheckValue: (name: any) => {
    const action = newCheckValue(name);
    dispatch(action);
  },
  // sortFood: (vegan: any, sanslactose: any, sansgluten: any) => {
  //   const action = sortFoodChoice(vegan, sanslactose, sansgluten);
  //   dispatch(action);
  // },
});

// Container
const MealPlanContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MealPlan);

// == Export
export default MealPlanContainer;
