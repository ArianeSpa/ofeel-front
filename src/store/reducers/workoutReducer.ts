// reducer pour la section workout

import {
  ActionModel,
  WorkoutStateModel,
  WorkoutSubjectEnum,
} from "@/models/reducer.model";
import { WorkoutModel } from "@/models/workout.model";

// == Initial State
const initialState: WorkoutStateModel = {
  workoutList: [],
  workoutToShow: [],
  loadingWorkout: true,
  activeIndex: -1,
  course: null,
  salle: null,
  maison: null,
  debutant: null,
  intermediaire: null,
  confirme: null,
};

// == Types
const SAVE_WORKOUT = "SAVE_WORKOUT";
const SAVE_WORKOUT_PAGES = "SAVE_WORKOUT_PAGES";
const LOAD_WORKOUT = "LOAD_WORKOUT";
const SAVE_ACTIVE_INDEX = "SAVE_ACTIVE_INDEX";
const CHANGE_SORT = "CHANGE_SORT";
const SORT_WORKOUT = "SORT_WORKOUT";
const CANCEL_SORT = "CANCEL_SORT";
export const ASK_PAGES_WORKOUT_INFO = "ASK_PAGES_WORKOUT_INFO";

const workoutReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: WorkoutStateModel = initialState,
  action: ActionModel
) => {
  switch (action.type) {
    case SAVE_ACTIVE_INDEX:
      if (action.index === state.activeIndex) {
        action.index = -1;
      }
      return {
        ...state,
        [action.name]: action.index,
      };
    case SAVE_WORKOUT_PAGES:
      return {
        ...state,
        workoutpages: action.numberpages,
      };
    case SAVE_WORKOUT:
      return {
        ...state,
        workoutList: action.workoutList,
        workoutToShow: action.workoutList,
      };
    case LOAD_WORKOUT:
      return {
        ...state,
        loadingWorkout: true,
      };
    case CHANGE_SORT:
      if (state[action.subject] === null) {
        return {
          ...state,
          [action.subject]: true,
        };
      }
      return {
        ...state,
        [action.subject]: !state[action.subject],
      };
    case SORT_WORKOUT:
      // eslint-disable-next-line no-case-declarations
      const sortedWorkoutList = state.workoutList.filter((wod) => {
        let keepWod = null;
        if (
          state.course &&
          state.debutant &&
          state.intermediaire &&
          state.confirme
        ) {
          keepWod =
            wod.name.includes("Course débutant") ||
            wod.name.includes("Course intermédiaire") ||
            wod.name.includes("Course confirmé") ||
            (state.salle && wod.name.includes("salle")) ||
            (state.maison && wod.name.includes("domicile")) ||
            (state.maison && wod.name.includes("round"));
        } else if (state.course && state.debutant && state.intermediaire) {
          keepWod =
            wod.name.includes("Course débutant") ||
            wod.name.includes("Course intermédiaire") ||
            (state.salle && wod.name.includes("salle")) ||
            (state.maison && wod.name.includes("domicile")) ||
            (state.maison && wod.name.includes("round"));
        } else if (state.course && state.debutant && state.confirme) {
          keepWod =
            wod.name.includes("Course débutant") ||
            wod.name.includes("Course confirmé") ||
            (state.salle && wod.name.includes("salle")) ||
            (state.maison && wod.name.includes("domicile")) ||
            (state.maison && wod.name.includes("round"));
        } else if (state.course && state.intermediaire && state.confirme) {
          keepWod =
            wod.name.includes("Course intermédiaire") ||
            wod.name.includes("Course confirmé") ||
            (state.salle && wod.name.includes("salle")) ||
            (state.maison && wod.name.includes("domicile")) ||
            (state.maison && wod.name.includes("round"));
        } else if (state.course && state.debutant) {
          keepWod =
            wod.name.includes("Course débutant") ||
            (state.salle && wod.name.includes("salle")) ||
            (state.maison && wod.name.includes("domicile")) ||
            (state.maison && wod.name.includes("round"));
        } else if (state.course && state.intermediaire) {
          keepWod =
            wod.name.includes("Course intermédiaire") ||
            (state.salle && wod.name.includes("salle")) ||
            (state.maison && wod.name.includes("domicile")) ||
            (state.maison && wod.name.includes("round"));
        } else if (state.course && state.confirme) {
          keepWod =
            wod.name.includes("Course confirmé") ||
            (state.salle && wod.name.includes("salle")) ||
            (state.maison && wod.name.includes("domicile")) ||
            (state.maison && wod.name.includes("round"));
        } else {
          keepWod =
            (state.course && wod.name.includes("Course")) ||
            (state.salle && wod.name.includes("salle")) ||
            (state.maison && wod.name.includes("domicile")) ||
            (state.maison && wod.name.includes("round")) ||
            (state.debutant && wod.name.includes("débutant")) ||
            (state.debutant &&
              state.course &&
              wod.name.includes("Course débutant")) ||
            (state.intermediaire &&
              state.course &&
              wod.name.includes("Course intermédiaire")) ||
            (state.intermediaire && wod.name.includes("intermédiaire")) ||
            (state.confirme &&
              state.course &&
              wod.name.includes("Course confirmé")) ||
            (state.confirme && wod.name.includes("confirmé"));
        }
        return keepWod;
      });
      return {
        ...state,
        workoutToShow: sortedWorkoutList,
      };
    case CANCEL_SORT:
      return {
        ...state,
        workoutToShow: state.workoutList,
        course: null,
        salle: null,
        maison: null,
        debutant: null,
        intermediaire: null,
        confirme: null,
      };
    default:
      return state;
  }
};

export const askPagesWorkoutInfo = () => ({
  type: ASK_PAGES_WORKOUT_INFO,
});

export const saveWorkoutPages = (numberpages: number) => ({
  type: SAVE_WORKOUT_PAGES,
  numberpages,
});

export const saveWorkout = (workoutList: WorkoutModel[]) => ({
  type: SAVE_WORKOUT,
  workoutList,
});

export const loadWorkout = () => ({
  type: LOAD_WORKOUT,
});

export const saveActiveIndex = (name: string, index: any) => ({
  type: SAVE_ACTIVE_INDEX,
  index,
  name,
});

export const changeSortBool = (subject: WorkoutSubjectEnum) => ({
  type: CHANGE_SORT,
  subject,
});

export const sortPost = (dataposts: any) => ({
  type: SORT_WORKOUT,
  dataposts,
});

export const cancelSortBool = () => ({
  type: CANCEL_SORT,
});

export default workoutReducer;
