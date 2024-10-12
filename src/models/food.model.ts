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

export type FoodChoiceFatModel =
  | "avocat"
  | "beurre de cacahuète"
  | "huile d'olive"
  | "amandes"
  | "cajou"
  | "noisettes"
  | "noix"
  | "lait de coco";

export type FoodChoiceCarbModel =
  | "muesli"
  | "pain"
  | "pâtes complètes"
  | "pâtes complètes"
  | "riz complet"
  | "quinoa";

export type FoodChoiceProtModel =
  | "jambon"
  | "whey"
  | "oeuf"
  | "fromage blanc 0% MG"
  | "steak haché 5% MG"
  | "poisson blanc";

export type FoodChoiceModel =
  | FoodChoiceFatModel
  | FoodChoiceCarbModel
  | FoodChoiceProtModel;

export type DataFoodModel = {
  diet: string;
};
