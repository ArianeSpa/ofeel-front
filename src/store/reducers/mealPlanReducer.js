// reducer concernant la gestion du plan alimentaire

const initialState = {
    datafood:[],
    proteinebreakfast: 'Fromage blanc',
    proteinelunch: 'Steack hache',
    proteinedinner: 'Poisson blanc',
    proteinesnack: 'Fromage blanc',
    lipidebreakfast: 'Amandes',
    lipidelunch: 'Avocat',
    lipidedinner: 'Huile d\'olive',
    glucidebreakfast: 'Muesli bio',
    glucidelunch: 'Quinoa',
    glucidedinner: 'Riz complet',
    glucidesnack: 'Muesli bio',
    breakfastcheck:false,
    lunchcheck: false,
    dinnercheck: false,
    snackcheck: false,
};

// == Types

export const ASK_FOOD_INFO = 'ASK_FOOD_INFO';
const SAVE_FOOD = 'SAVE_FOOD';
const CHANGE_FOOD = 'CHANGE_FOOD';
const CHANGE_CHECK = 'CHANGE_CHECK';


const mealPlanReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_FOOD:
            return {
                    ...state,
                    datafood: action.data,
                };
        case CHANGE_FOOD:  
            // console.log(action.name + " " +  action.value)  
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

export const askFoodInfo = () => ({
    type: ASK_FOOD_INFO,
});

export const saveFood = (data) => {
return({
    type: SAVE_FOOD,
    data,
}
)};

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