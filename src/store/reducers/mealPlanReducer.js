// reducer concernant la gestion du plan alimentaire

const initialState = {
    datafood:[],
    proteinebreakfast: 'Fromage blanc',
    proteinelunch: 'Blanc de poulet',
    proteinedinner: 'Poisson',
    proteinesnack: 'Fromage blanc',
    lipidebreakfast: 'Amandes',
    lipidelunch: 'Avocat',
    lipidedinner: 'Huile d\'olive',
    glucidebreakfast: 'Muesli bio',
    glucidelunch: 'Quinoa',
    glucidedinner: 'Riz complet',
    glucidesnack: 'Muesli bio',
};

// == Types

export const ASK_FOOD_INFO = 'ASK_FOOD_INFO';
const SAVE_FOOD = 'SAVE_FOOD';
const CHANGE_FOOD = 'CHANGE_FOOD';



const mealPlanReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_FOOD:
            return {
                    ...state,
                    datafood: action.data,
                };
        case CHANGE_FOOD:  
        console.log(action.name + " " +  action.value)  
        return {
                ...state,
                [action.name]: action.value,
            };
        default:
            return state;
    }
};

export const askFoodInfo = () => ({
    type: ASK_FOOD_INFO,
});

export const saveFood = (data) => ({
    type: SAVE_FOOD,
    data,
});

export const changeValueFood = (name, value) => ({
    type: CHANGE_FOOD,
    value,
    name,
});

export default mealPlanReducer;