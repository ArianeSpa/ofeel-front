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
  const fatFood = parseFloat(findFood.fat);

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
  const protFood = parseFloat(findFood.prot);
  const protFromLip = Math.round((protFood * quantityFood) / 100);

  // je reprends les calculs qui concernent nos lipides
  // j'adapte la quantité proposée pour certain cas et l'unité si nécessaire
  if (foodChoice === 'avocat') {
    if (quantityFood < 150) {
      quantityFood = '1/2';
    }
    else {
      quantityFood = 1;
    }
  }
  if (foodChoice === 'beurre de cacahuète') {
    const spoon = (quantityFood - (quantityFood % 20)) / 20;
    quantityFood = `${spoon} CàS`;
  }
  if (foodChoice.includes('huile')) {
    const spoon = quantityFood / 5;
    quantityFood = `${spoon} CàC`;
  }
  if (foodChoice === 'cajou' || foodChoice === 'amandes' || foodChoice === 'noisettes' || foodChoice === 'noix') {
    const handful = (quantityFood - (quantityFood % 15)) / 15;
    quantityFood = `${handful} poignée(s)`;
  }
  if (foodChoice === 'lait de coco') {
    quantityFood = `${quantityFood} mL`;
  }

  // je retourne la quantité de lipide qui sera affichée dans le meaplan
  // et la quantité de proteines contenues dans la portion en question
  return { quantityFood, protFromLip };
};

export const setCarbQuantityFood = (
  datafood, foodChoice, quantityCarbForPresentMeal,
) => {
  // je récup la quantité de glucides que contient l'aliment choisi.
  const findFood = datafood.find((food) => food.name === foodChoice);
  const carbFood = parseFloat(findFood.carb);

  let quantityFood = Math.round(((quantityCarbForPresentMeal * 100) / carbFood));

  // Comme pour les lipides, certains glucides contiennent une quantité intéressante de prot
  // donc on calcule la quantité de prot apportée par le choix alimentaire
  const protFood = parseFloat(findFood.prot);
  const protFromCarb = Math.round((protFood * quantityFood) / 100);

  // on veut arrondir au 10gr près
  if (quantityFood % 10 > 4) {
    // j'enlève la valeur du reste et j'ajoute 10 pour arrondir au 10 sup
    quantityFood = quantityFood - (quantityFood % 10) + 10;
  }
  else {
    // sinon j'enlève juste la valeur du reste pour arrondir au 10 inf
    quantityFood -= (quantityFood % 10);
  }
  quantityFood = `${quantityFood} gr`;

  return { quantityFood, protFromCarb };
};

export const setProtQuantityFood = (
  datafood, foodChoice, quantityProtForPresentMeal, protFromLip, protFromCarb,
) => {
  // je récup la quantité de protéine que contient l'aliment choisi.
  const findFood = datafood.find((food) => food.name === foodChoice);
  const protFood = parseFloat(findFood.prot);

  // je calcule le nouveau besoin en prot pour le repas
  // d'après la valeur apportée par les aliments lipidiques
  const need = quantityProtForPresentMeal - protFromLip - protFromCarb;
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
  if (foodChoice.includes('jambon')) {
    const slice = (quantityFood - (quantityFood % 40)) / 40;
    quantityFood = `${slice} tranche(s)`;
  }
  else if (foodChoice.includes('fromage blanc')) {
    const pot = (quantityFood - (quantityFood % 100)) / 100;
    quantityFood = `${pot} pot(s)`;
  }
  else if (foodChoice.includes('steak')) {
    if (quantityFood <= 175) {
      quantityFood = '1';
    }
    else {
      quantityFood = '2';
    }
  }
  else if (foodChoice === 'whey') {
    const dose = (quantityFood - (quantityFood % 20)) / 20;
    quantityFood = `${dose} dose(s)`;
  }
  else if (foodChoice === 'oeuf') {
    // quantityFood vaut probablement 123 gr
    // je calcule le reste de la division par 60 (le poids d'un ooeuf). Ici =3
    // je retire le reste à la valeur quantityfood calculée plus haut =120
    // je divise par le poids d'un oeuf pour connaitre le nombre dont j'ai besoin
    const number = (quantityFood - (quantityFood % 60)) / 60;
    quantityFood = `${number}`;
  }

  else {
    quantityFood = `${quantityFood} gr`;
  }

  return quantityFood;
};
