import { DataFoodModel, CarbEnum, FatEnum, ProtEnum } from "./food.model";
import { PostModel } from "./post.model";
import {
  ActivityLevelEnum,
  GenderEnum,
  GoalEnum,
  ObjecUserModel,
} from "./profil.model";
// import { WorkoutModel } from "./workout.model";

export type AppStateModel = {
  age: number;
  weight: number;
  height: number;
  goal: GoalEnum;
  gender: GenderEnum;
  activity: ActivityLevelEnum;
  sansgluten: boolean;
  vegan: boolean;
  sanslactose: boolean;
  loadingfood: boolean;
  basalMetabolicRate: number;
  energyExpenditure: number;
  headerClassname: string;
  message: string;
  dailyCalories: number;
  lunchCalories: number;
  breakfastAndDinnerCalories: number;
  dailyCarbohydrateProportion: number;
  dailyFatProportion: number;
  dailyProteinProportion: number;
  lunchCarbsQuantity: number;
  breakfastAndDinnerCarbsQuantity: number;
  lunchFatQuantity: number;
  breakfastAndDinnerFatQuantity: number;
  lunchProteinQuantity: number;
  breakfastAndDinnerProteinQuantity: number;
  yPosition: number;
  showSignupPassword: boolean;
  showSignupPasswordConf: boolean;
  showLoginPassword: boolean;
  errorMessagesSignup: string[];
};

export type MealPlanStateModel = {
  datafood?: DataFoodModel[];
  foodToShow: [];
  proteinebreakfast: ProtEnum;
  proteinelunch: ProtEnum;
  proteinedinner: ProtEnum;
  proteinesnack: ProtEnum;
  lipidebreakfast: FatEnum;
  lipidelunch: FatEnum;
  lipidedinner: FatEnum;
  glucidebreakfast: CarbEnum;
  glucidelunch: CarbEnum;
  glucidedinner: CarbEnum;
  glucidesnack: CarbEnum;
  breakfastcheck: boolean;
  lunchcheck: boolean;
  dinnercheck: boolean;
  snackcheck: boolean;
  data?: any[];
};

export enum WorkoutSubjectEnum {
  course = "course",
  salle = "salle",
  maison = "maison",
  debutant = "debutant",
  intermediaire = "intermediaire",
  confirme = "confirme",
}

export type WorkoutStateModel = {
  workoutList: any[];
  workoutToShow: any[];
  loadingWorkout: boolean;
  activeIndex: number;
  course: boolean | null;
  salle: boolean | null;
  maison: boolean | null;
  debutant: boolean | null;
  intermediaire: boolean | null;
  confirme: boolean | null;
};

export type UserStateModel = {
  logged: boolean;
  username: string;
  password: string;
  passwordConf: string;
  email: string;
  newsletter: number;
  savedPreference: string;
};

export type PostStateModel = {
  activeIndex: number;
  dataposts: PostModel[];
  postsToShow: PostModel[];
  loadingPosts: boolean;
  postspages: number;
  alimentation: boolean | null;
  sante: boolean | null;
  sport: boolean | null;
  recuperation: boolean | null;
  divers: boolean | null;
};

export type ActionModel = {
  type?: string;
  name: keyof AppStateModel &
    keyof PostStateModel &
    keyof UserStateModel &
    keyof WorkoutStateModel &
    "";
  value?: any;
  id?: any;
  objectUser?: ObjecUserModel;
  basalMetabolicRate?: number;
  energyExpenditure?: number;
  props?: ObjecUserModel;
  message?: string;
  index?: number;
  numberpages?: number;
  workoutList?: [];
  subject: WorkoutSubjectEnum;
  bool?: boolean;
  dataposts?: PostModel[];
  vegan: boolean;
  sanslactose: boolean;
  sansgluten: boolean;
  datafood?: DataFoodModel[];
  data?: any[];
};
