// reducer concernant la gestion du plan alimentaire

const initialState = {
    datafood:[],
};

// == Types

export const ASK_FOOD_INFO = 'ASK_FOOD_INFO';

const mealPlanReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        
        default:
            return state;
    }
};

export const askFoodInfo = () => ({
    type: ASK_FOOD_INFO,
})

export default mealPlanReducer;