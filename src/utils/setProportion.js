/* eslint-disable camelcase */
export default (goal, cal_jour) => {
  // On va calculer en fonction de l'objectif
  // l'apport calorique journalier et les proportion en
  // glucides, lipides et protéines.

  const setVarObjectif = (goal) => {
    if (goal == 'perte-de-poids') {
      return 0.75;
    } if (goal == 'prise-de-masse') {
      return 1.2;
    } if (goal == 'remise-en-forme') {
      return 1;
    }
  };

  // ici je calcule la quantité kcalorique journalière nécessaire qui dépend de mon objectif
  const cal_obj = Math.round(cal_jour * setVarObjectif(goal));
  console.log(setVarObjectif(goal));

  // je calcule dans les 3 fonctions suivantes
  // les proportions de glucides, protéines et lipides
  // qu'il me faut répartir dans ma journée

  // pour les protéines
  const setPropProt = (goal) => {
    if (goal === 'perte-de-poids') {
      return 0.34;
    } if (goal === 'prise-de-masse') {
      return 0.292;
    } if (goal === 'remise-en-forme') {
      return 0.222;
    }
  };
  const prop_prot = setPropProt(goal);

  // pour les glucides
  const setPropGlu = (goal) => {
    if (goal == 'perte-de-poids') {
      return 0.33;
    } if (goal == 'prise-de-masse' || goal == 'remise-en-forme') {
      return 0.488;
    }
  };
  const prop_glu = setPropGlu(goal);

  // pour les lipides
  const setPropLip = (goal) => {
    if (goal == 'perte-de-poids') {
      return 0.33;
    } if (goal == 'prise-de-masse') {
      return 0.22;
    } if (goal == 'remise-en-forme') {
      return 0.288;
    }
  };
  const prop_lip = setPropLip(goal);

  // on calcule les valeurs caloriques par repas,
  // sachant que le petit déjeuner et le diner ont la même valeur.
  const cal_p_dej_din = Math.round(cal_obj * 0.3);
  const cal_dej = Math.round(cal_obj * 0.4);

  // on sait quelle proportion de glucides, protéines et lipides on veut pour chaque repas.
  // Ce qui nous intéresse maintenant c'est l'équivalent en grammes, 
  // sachant que 1g de protéine ou de glucides vaut 4kcal
  // et que 1g de lipides vaut 9kcal.
  const q_prot_p_dej_din = Math.round((cal_p_dej_din * setPropProt(goal)) / 4);
  const q_glu_p_dej_din = Math.round((cal_p_dej_din * setPropGlu(goal)) / 4);
  const q_lip_p_dej_din = Math.round((cal_p_dej_din * setPropLip(goal)) / 9);
  const q_prot_dej = Math.round((cal_dej * setPropProt(goal)) / 4);
  const q_glu_dej = Math.round((cal_dej * setPropGlu(goal)) / 4);
  const q_lip_dej = Math.round((cal_dej * setPropLip(goal)) / 9);

  const propObject = {
    cal_dej,
    cal_obj,
    cal_p_dej_din,
    prop_glu,
    prop_lip,
    prop_prot,
    q_glu_dej,
    q_glu_p_dej_din,
    q_lip_dej,
    q_lip_p_dej_din,
    q_prot_dej,
    q_prot_p_dej_din,
  };
  console.log(propObject);
  return (propObject);
};
