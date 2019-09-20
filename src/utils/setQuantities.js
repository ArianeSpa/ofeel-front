/* eslint-disable camelcase */

// FONCTION DE CALCUL DE LA MASSE DE L'ALIMENT LIPIDIQUE CHOISI
// PARAMS :
// tableau des aliments
// l'aliment choisi par l'utilisateur
// la quantité de lipides qu'il doit consommer à ce repas
export const setFatQuantityFood = (datafood, foodChoice, quantityFatForPresentMeal) => {
  // Je cherche dans le tableau d'aliment, celui qui correspond à ce que l'utilisateur a sélectionné
  const findFood = datafood.find((food) => food.name === foodChoice);
  // je récupère la quantité de lipides de l'aliment pour 100gr
  const fatFood = findFood.lipides;

  // je calcule la quantité de l'aliment
  let quantityFood = Math.round((quantityFatForPresentMeal * 100) / fatFood);
  // j'arrondi à 5 près
  // si le reste de la division par 5 est supérieur à 2
  if (quantityFood % 5 > 2) {
    // j'enlève la valeur du reste et j'ajoute 5 pour arrondir au 5 sup
    quantityFood = quantityFood - (quantityFood % 5) + 5;
  }
  else {
    // sinon j'enlève juste la valeur du reste pour arrondir au 5 inf
    quantityFood -= (quantityFood % 5);
  }

  // certains de ces aliments ont une valeur non négligeable en protéine.
  // on calcul donc la quantité apportée pour la récupérer dans le calcul de la "viande"
  const protFood = findFood.proteines;
  const protFromLip = Math.round((protFood * quantityFood) / 100);

  // je reprends les calculs qui concernent nos lipides
  // j'adapte la quantité proposée pour certain cas et l'unité si nécessaire
  if (foodChoice === 'Avocat') {
    if (quantityFood < 150) {
      quantityFood = '1/2';
    }
    else {
      quantityFood = 1;
    }
  }
  if (foodChoice === 'Beurre de cacahuete') {
    const spoon = (quantityFood - (quantityFood % 20)) / 20;
    quantityFood = `${spoon} CàS`;
  }
  if (foodChoice.includes('Huile')) {
    const spoon = quantityFood / 5;
    quantityFood = `${spoon} CàC`;
  }
  if (foodChoice === 'Cajou' || foodChoice === 'Amande' || foodChoice === 'Noisette' || foodChoice === 'Noix') {
    const handful = (quantityFood - (quantityFood % 15)) / 15;
    quantityFood = `${handful} poignée(s)`;
  }
  if (foodChoice === 'Lait coco') {
    quantityFood = `${quantityFood} mL`;
  }

  // je retourne la quantité de lipide qui sera affichée dans le meaplan
  // et la quantité de proteines contenues dans la portion en question
  return { quantityFood, protFromLip };
};

export const setProtQuantityFood = (
  datafood, foodChoice, quantityProtForPresentMeal, protFromLip,
) => {
  // je récup la quantité de protéine que contient l'aliment choisi.
  const findFood = datafood.find((food) => food.name === foodChoice);
  const protFood = findFood.proteines;

  // je calcule le nouveau besoin en prot pour le repas
  // d'après la valeur apportée par les aliments lipidiques
  const need = quantityProtForPresentMeal - protFromLip;

  let quantityFood = Math.round(((need * 100) / protFood));

  // on veut arrondir au 25gr près
  if (quantityFood % 25 > 12) {
    // j'enlève la valeur du reste et j'ajoute 25 pour arrondir au 25 sup
    // quantityFood -= (quantityFood % 25) + 25;
    quantityFood = quantityFood - (quantityFood % 25) + 25;
  }
  else {
    // sinon j'enlève juste la valeur du reste pour arrondir au 25 inf
    quantityFood -= (quantityFood % 25);
  }

  // j'adapte la quantité proposée pour certain cas et l'unité si nécessaire
  if (foodChoice === 'Jambon') {
    const slice = (quantityFood - (quantityFood % 40)) / 40;
    quantityFood = `${slice} tranche(s)`;
  }
  else if (foodChoice === 'Fromage blanc') {
    const pot = (quantityFood - (quantityFood % 100)) / 100;
    quantityFood = `${pot} pot(s)`;
  }
  else if (foodChoice === 'Steack hache') {
    if (quantityFood <= 175) {
      quantityFood = '1';
    }
    else {
      quantityFood = '2';
    }
  }
  else if (foodChoice === 'Whey') {
    const dose = (quantityFood - (quantityFood % 20)) / 20;
    quantityFood = `${dose} dose(s)`;
  }
  else {
    quantityFood = `${quantityFood} gr`;
  }

  return quantityFood;
};
