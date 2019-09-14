// reducer pour l'app en général
// import radios from 'src/dataRadio';
import profil from 'src/datas/MyFeeling/profile';


// == Initial State
const initialState = {
  goal: '',
  isChecked: false,
  gender: '',
  profiles: profil,
};
// console.log(profil);
// console.log(radios);

const SAVE_GOAL = 'SAVE_GOAL';
const CHANGE_CHKBOX = 'CHANGE_CHKBOX';
const SAVE_GENDER = 'SAVE_GENDER';

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
    case CHANGE_CHKBOX:
      // console.log('je suis dans SAVE GOAL et je veux change la valeur de ' + action.name + ' qui vaut actuellement ' + state.isChecked + ' et lui affecter la valeur correspondate à ' + action.isChecked);
      return {
        ...state,
        [action.name]: action.isChecked,
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
export const newCheckValue = (name, id) => ({
  type: CHANGE_CHKBOX,
  id,
  name,
});

export const saveGender = (name, id) => ({
  type: SAVE_GENDER,
  id,
  name,
});

export default appReducer;
