// reducer pour l'app en général

// == Initial State
const initialState = {
  goal: '',
  isCheckedRegime: false,
  gender: '',
  age: 18,
  taille: 140,
  poids: 45,
  activity: '',
  sansgluten: false,
  vegan: false,
  sanslactose: false,
};

const SAVE_GOAL = 'SAVE_GOAL';
const SAVE_PROFIL = 'SAVE_PROFIL';
const CHECK_REGIME = 'CHECK_REGIME';

const appReducer = (state = initialState, action = {}) => {
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
    default:
      return state;
  }
};
export const saveGoal = (name, id) =>
  // console.log('je suis dans action creator savegoal');
  ({
    type: SAVE_GOAL,
    id,
    name,
  });

export const checkRegime = (name, value) => (
  {
    type: CHECK_REGIME,
    name,
    value,
  }
);

export const saveProfil = (name, value) =>
  ({
    type: SAVE_PROFIL,
    value,
    name,
  });


export default appReducer;
