import { FoodModel, ProteinTypeModel } from "@/models/food.model";

export const setProteinType = (datafood: FoodModel[]) => {
  const proteineType: ProteinTypeModel[] = [];

  datafood.map((food) => {
    if (food.category === "proteine") {
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

export const setGlucidType = (datafood: FoodModel[]) => {
  const glucideType: ProteinTypeModel[] = [];

  // eslint-disable-next-line array-callback-return
  datafood.map((food) => {
    if (food.category === "glucide") {
      glucideType.push({
        key: food.id,
        text: food.name,
        value: food.name,
      });
    }
  });
  return glucideType;
};

export const setLipidType = (datafood: FoodModel[]) => {
  const lipideType: ProteinTypeModel[] = [];

  // eslint-disable-next-line array-callback-return
  datafood.map((food) => {
    if (food.category === "lipide") {
      lipideType.push({
        key: food.id,
        text: food.name,
        value: food.name,
      });
    }
  });
  return lipideType;
};
