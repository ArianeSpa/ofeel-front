import { ActivityLevelModel, GenderModel } from "@/models/profil.model";

const setMetabAndCal = (
  gender: GenderModel,
  weight: number,
  height: number,
  age: number,
  activity: ActivityLevelModel
) => {
  const sexeFactor = gender === "homme" ? 259 : 230;

  /*
      On calcul maintenant le métabolisme de base grâce à
      (nbConstant * weight**0.48 * height**0.5 * age**-0.13) / 10
      */
  const basalMetabolicRate = Math.round(
    (sexeFactor * weight ** 0.4 * height ** 0.5 * age ** -0.13) / 10
  );

  // On détermine la valeur de la constante liée à l'activité
  const setVarActivity = (activitylevel: ActivityLevelModel) => {
    let activityFactor = 0;
    if (activitylevel === "Sédentaire") {
      activityFactor = 1.2;
    }
    if (activitylevel === "Légèrement actif") {
      return 1.375;
    }
    if (activitylevel === "Actif") {
      activityFactor = 1.55;
    }
    if (activitylevel === "Très actif") {
      activityFactor = 1.725;
    }
    if (activitylevel === "Extrêmement actif") {
      activityFactor = 1.9;
    }
    return activityFactor;
  };

  // On détermine la dépense kcalorique journalière (métabolisme de base * constante activité)
  const energyExpenditure = Math.round(
    basalMetabolicRate * setVarActivity(activity)
  );

  return { basalMetabolicRate, energyExpenditure };
};

export default setMetabAndCal;
