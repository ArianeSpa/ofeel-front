export type ProteinTypeModel = {
  key: any;
  text: string;
  value: string;
};

export type FoodModel = {
  id: any;
  name: string;
  category: "proteine" | "glucide" | "lipide";
  fat: string;
  prot: string;
  carb: string;
};

export type FoodListModel = {
  id: any;
  name: string;
  category: "proteine" | "glucide" | "lipide";
  fat: number;
  protein: number;
  carbs: number;
};

export enum FatEnum {
  AVOCADO = "avocat",
  PEANUT = "beurre de cacahuète",
  OIL = "huile d'olive",
  ALMOND = "amandes",
  CASHEW = "cajou",
  HAZELNUT = "noisettes",
  NUT = "noix",
  COCO_MILK = "lait de coco",
}

export enum CarbEnum {
  MUESLI = "muesli",
  BREAD = "pain",
  PASTA = "pâtes complètes",
  RICE = "riz complet",
  QUINOA = "quinoa",
}

export enum ProtEnum {
  HAM = "jambon",
  WHEY = "whey",
  EGG = "oeuf",
  YOGURT = "fromage blanc 0% MG",
  BEEF = "steak haché 5% MG",
  FISH = "poisson blanc",
}

export type FoodChoiceEnum = FatEnum | CarbEnum | ProtEnum;

export type DataFoodModel = {
  diet: string;
};
