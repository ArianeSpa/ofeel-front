export type GenderModel = "homme" | "femme";
export type ActivityLevelModel =
  | "Sédentaire"
  | "Légèrement actif"
  | "Actif"
  | "Très actif"
  | "Extrêmement actif";
export type GoalModel = "Perte de poids" | "Prise de masse" | "Equilibre";
export type RegimeModel = "Vegan" | "lactose" | "gluten";

export type ObjecUserModel = {
  age: number;
  weight: number;
  height: number;
  sexe: GenderModel;
  goal: GoalModel;
  regime: RegimeModel;
  activity: ActivityLevelModel;
  energyExpenditure: number;
  basalMetabolicRate: number;
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
};
