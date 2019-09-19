// reducer concernant la gestion du plan alimentaire

const initialState = {
    datafood:[],
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
    breakfastcheck:false,
    lunchcheck: false,
    dinnercheck: false,
    snackcheck: false,
};

// == Types

export const ASK_PAGES_FOOD_INFO = 'ASK_PAGES_FOOD_INFO';
const SAVE_FOOD_PAGES = 'SAVE_FOOD_PAGES';
export const ASK_FOOD = 'ASK_FOOD';
const SAVE_FOOD = 'SAVE_FOOD';
const CHANGE_FOOD = 'CHANGE_FOOD';
const CHANGE_CHECK = 'CHANGE_CHECK';


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
                datafood: action.datafood
            }
        case CHANGE_FOOD:  
            return {
                ...state,
                [action.name]: action.value,
            };
        case CHANGE_CHECK:
            if (action.name === 'breakfastcheck'){
                return {
                    ...state,
                    [action.name]: !state.breakfastcheck,
                };
            }else if (action.name === 'lunchcheck'){
                return {
                    ...state,
                    [action.name]: !state.lunchcheck,
                };
            }else if (action.name === 'dinnercheck'){    
                return {
                    ...state,
                    [action.name]: !state.dinnercheck,
                };
            }else if (action.name === 'snackcheck'){
                return {
                    ...state,
                    [action.name]: !state.snackcheck,
                };
            }
        default:
            return state;
    }
};

export const askPagesFoodInfo = () => ({
    type: ASK_PAGES_FOOD_INFO,
});

export const saveFoodPages = (data) => {
return({
    type: SAVE_FOOD_PAGES,
    data,
}
)};

export const askFood = () => ({
    type: ASK_FOOD,
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



export default mealPlanReducer;