export const setProteinQuantity = (typeProtein) => {
  if (typeProtein === 'fromage blanc 0% MG') {
    return '200 gr';
  } if (typeProtein === 'oeuf') {
    return 'Deux';
  }
  return '100 gr';
};

export const setFatQuantity = (typeFat) => {
  if (typeFat.includes('huile') || typeFat.includes('beurre') || typeFat.includes('purée')) {
    return '1 CàS';
  } if (typeFat === 'avocat') {
    return '1/2';
  }
  return '1 poignée';
};

export const setSugarQuantity = (typeSugar) => {
  if (typeSugar.includes('muesli')) {
    return '50 gr';
  } if (typeSugar.includes('pain')) {
    return '2 tranches';
  }
  return '100 gr';
};
