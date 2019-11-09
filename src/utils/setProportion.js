/* eslint-disable camelcase */
export default (goal, energyExpenditure) => {
  // On va calculer en fonction de l'objectif
  // l'apport calorique journalier et les proportion en
  // glucides, lipides et protéines.

  const setVarObjectif = (goalType) => {
    let factor = 0;
    if (goalType === 'Perte de poids') {
      factor = 0.75;
    } if (goalType === 'Prise de masse') {
      factor = 1.2;
    } if (goalType === 'Equilibre') {
      factor = 1;
    }
    return factor;
  };

  // ici je calcule la quantité kcalorique journalière nécessaire qui dépend de mon objectif
  const dailyCalories = Math.round(energyExpenditure * setVarObjectif(goal));

  // je calcule dans les 3 fonctions suivantes
  // les proportions de glucides, protéines et lipides
  // qu'il me faut répartir dans ma journée

  // pour les protéines
  const setPropProt = (goalType) => {
    let factor = 0;
    if (goalType === 'Perte de poids') {
      factor = 0.34;
    } if (goalType === 'Prise de masse') {
      factor = 0.292;
    } if (goalType === 'Equilibre') {
      factor = 0.222;
    }
    return factor;
  };
  const dailyProteinProportion = setPropProt(goal);

  // pour les glucides
  const setPropCarb = (goalType) => {
    let factor = 0;
    if (goalType === 'Perte de poids') {
      factor = 0.33;
    } if (goalType === 'Prise de masse' || goalType === 'Equilibre') {
      factor = 0.488;
    }
    return factor;
  };
  const dailyCarbohydrateProportion = setPropCarb(goal);

  // pour les lipides
  const setPropFat = (goalType) => {
    let factor = 0;
    if (goalType === 'Perte de poids') {
      factor = 0.33;
    } if (goalType === 'Prise de masse') {
      factor = 0.22;
    } if (goalType === 'Equilibre') {
      factor = 0.288;
    }
    return factor;
  };
  const dailyFatProportion = setPropFat(goal);

  // on calcule les valeurs caloriques par repas,
  // sachant que le petit déjeuner et le diner ont la même valeur.
  const breakfastAndDinnerCalories = Math.round(dailyCalories * 0.3);
  const lunchCalories = Math.round(dailyCalories * 0.4);

  // on sait quelle proportion de glucides, protéines et lipides on veut pour chaque repas.
  // Ce qui nous intéresse maintenant c'est l'équivalent en grammes,
  // sachant que 1g de protéine ou de glucides vaut 4kcal
  // et que 1g de lipides vaut 9kcal.
  const breakfastAndDinnerProteinQuantity = Math.round(
    (breakfastAndDinnerCalories * setPropProt(goal)) / 4,
  );
  const breakfastAndDinnerCarbsQuantity = Math.round(
    (breakfastAndDinnerCalories * setPropCarb(goal)) / 4,
  );
  const breakfastAndDinnerFatQuantity = Math.round(
    (breakfastAndDinnerCalories * setPropFat(goal)) / 9,
  );
  const lunchProteinQuantity = Math.round(
    (lunchCalories * setPropProt(goal)) / 4,
  );
  const lunchCarbsQuantity = Math.round(
    (lunchCalories * setPropCarb(goal)) / 4,
  );
  const lunchFatQuantity = Math.round(
    (lunchCalories * setPropFat(goal)) / 9,
  );

  const propObject = {
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
  return (propObject);
};
