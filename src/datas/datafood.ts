import { FoodListModel } from "@/models/food.model";
import { carbList } from "./carbList";
import { fatList } from "./fatList";
import { proteinList } from "./proteinList";

export const datafood: FoodListModel[] = [
  ...proteinList,
  ...carbList,
  ...fatList,
];
