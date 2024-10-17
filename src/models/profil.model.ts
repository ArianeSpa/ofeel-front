export enum GenderEnum {
  MAN = "Homme",
  WOMAN = "Femme",
}

export enum ActivityLevelEnum {
  SEDENTARY = "Sédentaire",
  NOT_VERY_ACTIVE = "Peu actif",
  ACTIVE = "Actif",
  VERY_ACTIVE = "Très actif",
  EXTREMELY_ACTIVE = "Extrêmement actif",
}

export enum GoalEnum {
  PP = "Perte de poids",
  PM = "Prise de masse",
  E = "Equilibre",
}
export type RegimeModel = "Vegan" | "lactose" | "gluten";

export type ObjecUserModel = {
  age: number;
  weight: number;
  height: number;
  sexe: GenderEnum;
  goal?: GoalEnum;
  regime: RegimeModel;
  activity: ActivityLevelEnum;
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
