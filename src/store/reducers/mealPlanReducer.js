// reducer concernant la gestion du plan alimentaire

const initialState = {
  datafood: [],
  foodToShow: [],
  proteinebreakfast: 'Fromage blanc',
  proteinelunch: 'Steack hache',
  proteinedinner: 'Poisson blanc',
  proteinesnack: 'Fromage blanc',
  lipidebreakfast: 'Amande',
  lipidelunch: 'Avocat',
  lipidedinner: 'Huile olive',
  glucidebreakfast: 'Pates',
  glucidelunch: 'Quinoa',
  glucidedinner: 'Riz',
  glucidesnack: 'Quinoa',
  breakfastcheck: false,
  lunchcheck: false,
  dinnercheck: false,
  snackcheck: false,
};

// == Types

export const ASK_PAGES_FOOD_INFO = 'ASK_PAGES_FOOD_INFO';
const SAVE_FOOD_PAGES = 'SAVE_FOOD_PAGES';
const SAVE_FOOD = 'SAVE_FOOD';
const CHANGE_FOOD = 'CHANGE_FOOD';
const CHANGE_CHECK = 'CHANGE_CHECK';
const SORT_FOOD = 'SORT_FOOD';


const mealPlanReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FOOD_PAGES:
      return {
        ...state,
        foodpages: action.data,
      };
    case SAVE_FOOD:
      return {
        ...state,
        datafood: action.datafood,
        foodToShow: action.datafood,
      };
    case CHANGE_FOOD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_CHECK:
      if (action.name === 'breakfastcheck') {
        return {
          ...state,
          [action.name]: !state.breakfastcheck,
        };
      } if (action.name === 'lunchcheck') {
        return {
          ...state,
          [action.name]: !state.lunchcheck,
        };
      } if (action.name === 'dinnercheck') {
        return {
          ...state,
          [action.name]: !state.dinnercheck,
        };
      } if (action.name === 'snackcheck') {
        return {
          ...state,
          [action.name]: !state.snackcheck,
        };
      }
      break;
    case SORT_FOOD:
      // eslint-disable-next-line no-case-declarations
      const sortedFood = state.datafood.filter((food) => {
        let keepFood = '';
        if (action.vegan && action.sanslactose && action.sansgluten) {
          keepFood = food.regime.includes('lactose') && food.regime.includes('vegan') && food.regime.includes('gluten');
        }
        else if (action.vegan && action.sanslactose && !action.sansgluten) {
          keepFood = food.regime.includes('lactose') && food.regime.includes('vegan');
        }
        else if (action.vegan && action.sansgluten && !action.sanslactose) {
          keepFood = food.regime.includes('gluten') && food.regime.includes('vegan');
        }
        else if (action.sanslactose && action.sansgluten && !action.vegan) {
          keepFood = food.regime.includes('gluten') && food.regime.includes('lactose');
        }
        else if (action.sanslactose && !action.sansgluten && !action.vegan) {
          keepFood = food.regime.includes('lactose');
        }
        else if (action.sansgluten && !action.vegan && !action.sanslactose) {
          keepFood = food.regime.includes('gluten');
        }
        else if (action.vegan && !action.sanslactose && !action.sansgluten) {
          keepFood = food.regime.includes('vegan');
        }
        else {
          keepFood = food;
        }
        return keepFood;
      });

      return {
        ...state,
        foodToShow: sortedFood,
      };
    default:
      return state;
  }
};

export const askPagesFoodInfo = () => ({
  type: ASK_PAGES_FOOD_INFO,
});

export const saveFoodPages = (data) => ({
  type: SAVE_FOOD_PAGES,
  data,
});

export const saveFood = (datafood) => ({
  type: SAVE_FOOD,
  datafood,
});

export const changeValueFood = (name, value) => ({
  type: CHANGE_FOOD,
  value,
  name,
});

export const newCheckValue = (name) => ({
  type: CHANGE_CHECK,
  name,
});

export const sortFoodChoice = (sanslactose, sansgluten, vegan) => ({
  type: SORT_FOOD,
  vegan,
  sanslactose,
  sansgluten,
});

export default mealPlanReducer;
