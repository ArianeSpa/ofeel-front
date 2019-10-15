export default (gender, poids, taille, age, activity) => {
  const nbConstantSexe = ((gender === 'homme') ? 259 : 230);

  // On calcul maintenant le métabolisme de base grâce à (nbConstant * poids**0.48 * taille**0.5 * age**-0.13) / 10
  const metaboBase = Math.round((nbConstantSexe * (poids ** 0.4) * (taille ** 0.5) * (age ** -0.13)) / 10);

  // On détermine la valeur de la constante liée à l'activité
  const setVarActivity = (activity) => {
    if (activity === 'Sédentaire') {
      return 1.2;
    } if (activity === 'Légèrement actif') {
      return 1.375;
    } if (activity === 'Actif') {
      return 1.55;
    } if (activity === 'Très actif') {
      return 1.725;
    } if (activity === 'Extrêmement actif') {
      return 1.9;
    }
  };

  // On détermine la dépense kcalorique journalière (métabolisme de base * constante activité)
  const calorieJour = Math.round(metaboBase * setVarActivity(activity));

  return ({ metaboBase, calorieJour });
};
