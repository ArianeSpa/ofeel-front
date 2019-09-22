export const setProteinType = (datafood) => {
  const proteineType = [];

  datafood.map((food) => {
    if (food.type === 'proteine') {
      proteineType.push({
        key: food.id,
        text: food.name,
        value: food.name,
      });
    }
    return proteineType;
  });
  return proteineType;
};

export const setGlucidType = (datafood) => {
  const glucideType = [];

  datafood.map((food) => {
    if (food.type === 'glucide') {
      glucideType.push({
        key: food.id,
        text: food.name,
        value: food.name,
      });
    }
  });
  return (glucideType);
};

export const setLipidType = (datafood) => {
  const lipideType = [];

  datafood.map((food) => {
    if (food.type === 'lipide') {
      lipideType.push({
        key: food.id,
        text: food.name,
        value: food.name,
      });
    }
  });
  return (lipideType);
};
