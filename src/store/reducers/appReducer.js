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
};

const SAVE_GOAL = 'SAVE_GOAL';
const SAVE_PROFIL = 'SAVE_PROFIL';
const CHECK_REGIME = 'CHECK_REGIME';

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROFIL:
      console.log(state.activity);
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_GOAL:
      // console.log('je suis dans SAVE GOAL et je veux change la valeur de ' + action.name + ' qui vaut actuellement ' + state.goal + ' et lui affecter la valeur correspondate à ' + action.id);
      if (action.id === 'perte-de-poids') {
        return {
          ...state,
          [action.name]: action.id,
        };
      }
      if (action.id === 'prise-de-masse') {
        return {
          ...state,
          [action.name]: action.id,
        };
      }
      if (action.id === 'remise-en-forme') {
        return {
          ...state,
          [action.name]: action.id,
        };
      }
      break;
    case CHECK_REGIME:
      // console.log('je suis dans CHECK_REGIME et je veux change la valeur de ' + action.name + ' qui vaut actuellement ' + state.isCheckedRegime + ' et lui affecter la valeur correspondante à ' + action.checked);
      if (action.checked === true) {
        return {
          ...state,
          [action.name]: action.checked,
        };
      } if (action.checked === false) {
        return {
          ...state,
          [action.name]: !action.checked,
        };
      }
      break;
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

export const checkRegime = (name, checked) => (
  {
    type: CHECK_REGIME,
    name,
    checked,
  }
);

export const saveProfil = (name, value) =>
  ({
    type: SAVE_PROFIL,
    value,
    name,
  });


export default appReducer;
