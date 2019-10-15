// reducer concernant la gestion du plan alimentaire

const initialState = {
  datafood: [],
  foodToShow: [],
  proteinebreakfast: 'fromage blanc 0% MG',
  proteinelunch: 'steak haché 5% MG',
  proteinedinner: 'poisson blanc',
  proteinesnack: 'fromage blanc 0% MG',
  lipidebreakfast: 'amandes',
  lipidelunch: 'avocat',
  lipidedinner: 'huile d\'olive',
  glucidebreakfast: 'pâtes complètes',
  glucidelunch: 'quinoa',
  glucidedinner: 'riz complet',
  glucidesnack: 'quinoa',
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
      return {
        ...state,
        [action.name]: !state[action.name],
      };

    case SORT_FOOD:
      // eslint-disable-next-line no-case-declarations
      const sortedFood = state.datafood.filter((food) => {
        let keepFood = '';
        if (action.vegan && action.sanslactose && action.sansgluten) {
          keepFood = food.diet.includes('lactose') && food.diet.includes('Vegan') && food.diet.includes('gluten');
        }
        else if (action.vegan && action.sanslactose && !action.sansgluten) {
          keepFood = food.diet.includes('lactose') && food.diet.includes('Vegan');
        }
        else if (action.vegan && action.sansgluten && !action.sanslactose) {
          keepFood = food.diet.includes('gluten') && food.diet.includes('Vegan');
        }
        else if (action.sanslactose && action.sansgluten && !action.vegan) {
          keepFood = food.diet.includes('gluten') && food.diet.includes('lactose');
        }
        else if (action.sanslactose && !action.sansgluten && !action.vegan) {
          keepFood = food.diet.includes('lactose');
        }
        else if (action.sansgluten && !action.vegan && !action.sanslactose) {
          keepFood = food.diet.includes('gluten');
        }
        else if (action.vegan && !action.sanslactose && !action.sansgluten) {
          keepFood = food.diet.includes('Vegan');
        }
        else {
          keepFood = food;
        }
        return keepFood;
      });

      return {
        ...state,
        foodToShow: sortedFood,
        proteinebreakfast: action.vegan ? 'whey' : action.sanslactose ? 'oeuf' : 'fromage blanc 0% MG',
        proteinelunch: action.vegan ? 'tofu nature' : 'blanc de poulet',
        proteinedinner: action.vegan ? 'tofu nature' : 'poisson blanc',
        proteinesnack: action.vegan ? 'whey' : action.sanslactose ? 'oeuf' : 'fromage blanc 0% MG',
        glucidebreakfast: action.sansgluten ? 'muesli chocolat' : 'pain complet',
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
