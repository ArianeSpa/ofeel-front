import { GoalEnum } from "@/models/profil.model";

export const getGoalFactor = (goal: GoalEnum) => {
  switch (goal) {
    case GoalEnum.PP:
      return 0.75;
    case GoalEnum.PM:
      return 1.2;
    case GoalEnum.E:
    default:
      return 1;
  }
};

const getProtFactor = (goal: GoalEnum) => {
  switch (goal) {
    case GoalEnum.PP:
      return 0.34;
    case GoalEnum.PM:
      return 1.292;
    case GoalEnum.E:
    default:
      return 0.222;
  }
};

const getCarbFactor = (goal: GoalEnum) => {
  switch (goal) {
    case GoalEnum.PP:
      return 0.33;
    case GoalEnum.PM:
    case GoalEnum.E:
    default:
      return 0.488;
  }
};

const getFatFactor = (goal: GoalEnum) => {
  switch (goal) {
    case GoalEnum.PP:
      return 0.33;
    case GoalEnum.PM:
      return 0.22;
    case GoalEnum.E:
    default:
      return 0.288;
  }
};

export const getProportion = (goal: GoalEnum, energyExpenditure: number) => {
  const goalFactor = getGoalFactor(goal);

  // ici je calcule la quantité kcalorique journalière nécessaire qui dépend de mon objectif
  const dailyCalories = Math.round(energyExpenditure * goalFactor);
  const dailyProteinProportion = getProtFactor(goal);
  const dailyCarbohydrateProportion = getCarbFactor(goal);
  const dailyFatProportion = getFatFactor(goal);

  // on calcule les valeurs caloriques par repas,
  // sachant que le petit déjeuner et le diner ont la même valeur.
  const breakfastAndDinnerCalories = Math.round(dailyCalories * 0.3);
  const lunchCalories = Math.round(dailyCalories * 0.4);

  // on sait quelle proportion de glucides, protéines et lipides on veut pour chaque repas.
  // Ce qui nous intéresse maintenant c'est l'équivalent en grammes,
  // sachant que 1g de protéine ou de glucides vaut 4kcal
  // et que 1g de lipides vaut 9kcal.
  const breakfastAndDinnerProteinQuantity = Math.round(
    (breakfastAndDinnerCalories * getProtFactor(goal)) / 4
  );
  const breakfastAndDinnerCarbsQuantity = Math.round(
    (breakfastAndDinnerCalories * getCarbFactor(goal)) / 4
  );
  const breakfastAndDinnerFatQuantity = Math.round(
    (breakfastAndDinnerCalories * getFatFactor(goal)) / 9
  );
  const lunchProteinQuantity = Math.round(
    (lunchCalories * getProtFactor(goal)) / 4
  );
  const lunchCarbsQuantity = Math.round(
    (lunchCalories * getCarbFactor(goal)) / 4
  );
  const lunchFatQuantity = Math.round((lunchCalories * getFatFactor(goal)) / 9);

  return {
    dailyCalories,
    lunchCalories,
    breakfastAndDinnerCalories,
    dailyCarbohydrateProportion,
    dailyFatProportion,
    dailyProteinProportion,
    lunchCarbsQuantity,
    breakfastAndDinnerCarbsQuantity,
    lunchFatQuantity,
    breakfastAndDinnerFatQuantity,
    lunchProteinQuantity,
    breakfastAndDinnerProteinQuantity,
  };
};
