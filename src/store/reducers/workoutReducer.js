
// reducer pour la section workout


// == Initial State
const initialState = {
  workoutList: [],
  loadingWorkout: true,
};

// == Types
const SAVE_WORKOUT = 'SAVE_WORKOUT';
const SAVE_WORKOUT_PAGES = 'SAVE_WORKOUT_PAGES';
const LOAD_WORKOUT = 'LOAD_WORKOUT';
export const ASK_PAGES_WORKOUT_INFO = 'ASK_PAGES_WORKOUT_INFO';


const workoutReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_WORKOUT_PAGES:
      return {
        ...state,
        workoutpages: action.numberpages,
      };
    case SAVE_WORKOUT:
      return {
        ...state,
        workoutList: action.workoutList,
      };
    case LOAD_WORKOUT:
      return {
        ...state,
        loadingWorkout: true,
      };
    default:
      return state;
  }
};

export const askPagesWorkoutInfo = () => ({
  type: ASK_PAGES_WORKOUT_INFO,
});

export const saveWorkoutPages = (numberpages) => ({
  type: SAVE_WORKOUT_PAGES,
  numberpages,
});

export const saveWorkout = (workoutList) => ({
  type: SAVE_WORKOUT,
  workoutList,
});

export const loadWorkout = () => ({
  type: LOAD_WORKOUT,
});

export default workoutReducer;
