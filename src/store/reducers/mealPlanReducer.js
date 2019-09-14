// reducer concernant la gestion du plan alimentaire

const initialState = {
    datafood:[],
};

// == Types

export const ASK_FOOD_INFO = 'ASK_FOOD_INFO';
const SAVE_FOOD = 'SAVE_FOOD';


const mealPlanReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_FOOD:      
            return {
                    ...state,
                    datafood: action.data,
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

export default mealPlanReducer;