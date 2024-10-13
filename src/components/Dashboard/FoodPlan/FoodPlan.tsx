// == Import : npm
import React, { FormEvent, SyntheticEvent } from "react";
import {
  Grid,
  Header,
  Segment,
  Form,
  Checkbox,
  Label,
  Dropdown,
  CheckboxProps,
  DropdownProps,
  Loader,
} from "semantic-ui-react";

// == Import : local
import { FoodPlanMessageSnack } from "@/components/Dashboard/FoodPlan/FoodPlanMessage/FoodPlanMessageSnack";
import { FoodPlanMeal } from "@/components/Dashboard/FoodPlan/FoodPlanMeal/FoodPlanMeal";
import { setProteinQuantity, setSugarQuantity } from "@/utils/setQuantity";
import { setProteinType, setGlucidType } from "@/utils/setFoodType";
import {
  setFatQuantityFood,
  setProtQuantityFood,
  setCarbQuantityFood,
} from "@/utils/setQuantities";
import "./foodplan.scss";
import { CarbEnum, FatEnum, ProtEnum } from "@/models/food.model";

type FoodPlanProps = {
  changeFoodValue: (value: any, id: any) => void;
  changeCheckValue: (value: any) => void;
  datafood: any[];
  foodToShow: any[];
  proteinebreakfast: ProtEnum;
  proteinelunch: ProtEnum;
  proteinedinner: ProtEnum;
  proteinesnack: ProtEnum;
  lipidebreakfast: FatEnum;
  lipidelunch: FatEnum;
  lipidedinner: FatEnum;
  glucidebreakfast: CarbEnum;
  glucidelunch: CarbEnum;
  glucidedinner: CarbEnum;
  glucidesnack: CarbEnum;
  breakfastcheck: boolean;
  lunchcheck: boolean;
  dinnercheck: boolean;
  snackcheck: boolean;
  loadingfood: boolean;
  state: {
    breakfastAndDinnerFatQuantity: any;
    lunchFatQuantity: any;
    breakfastAndDinnerCarbsQuantity: any;
    lunchCarbsQuantity: any;
    breakfastAndDinnerProteinQuantity: any;
    lunchProteinQuantity: any;
  };
};

// == Composant
export const FoodPlan: React.FC<FoodPlanProps> = ({
  changeFoodValue,
  proteinebreakfast,
  proteinelunch,
  proteinedinner,
  proteinesnack,
  lipidebreakfast,
  lipidelunch,
  lipidedinner,
  glucidebreakfast,
  glucidelunch,
  glucidedinner,
  glucidesnack,
  changeCheckValue,
  breakfastcheck,
  lunchcheck,
  dinnercheck,
  snackcheck,
  datafood,
  foodToShow,
  loadingfood,
  state,
}) => {
  const handleValueFoodtype = (
    _event: SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    changeFoodValue(data.value, data.id);
  };

  const handleCheck = (
    _event: FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    changeCheckValue(data.id);
  };

  let protFromLipAtBreakfast;
  let protFromLipAtLunch;
  let protFromLipAtDiner;
  let protFromCarbAtBreakfast;
  let protFromCarbAtLunch;
  let protFromCarbAtDiner;

  if (datafood) {
    protFromLipAtBreakfast = setFatQuantityFood(
      datafood,
      lipidebreakfast,
      state.breakfastAndDinnerFatQuantity
    ).protFromLip;

    protFromLipAtLunch = setFatQuantityFood(
      datafood,
      lipidelunch,
      state.lunchFatQuantity
    ).protFromLip;

    protFromLipAtDiner = setFatQuantityFood(
      datafood,
      lipidedinner,
      state.breakfastAndDinnerFatQuantity
    ).protFromLip;

    protFromCarbAtBreakfast = setCarbQuantityFood(
      datafood,
      glucidebreakfast,
      state.breakfastAndDinnerCarbsQuantity
    ).protFromCarb;

    protFromCarbAtLunch = setCarbQuantityFood(
      datafood,
      glucidelunch,
      state.lunchCarbsQuantity
    ).protFromCarb;

    protFromCarbAtDiner = setCarbQuantityFood(
      datafood,
      glucidedinner,
      state.breakfastAndDinnerCarbsQuantity
    ).protFromCarb;
  }

  const proteinType = setProteinType(foodToShow);
  const glucideType = setGlucidType(foodToShow);

  const protForBreakfast: string =
    protFromLipAtBreakfast && protFromCarbAtBreakfast
      ? setProtQuantityFood(
          datafood,
          proteinebreakfast,
          state.breakfastAndDinnerProteinQuantity,
          protFromLipAtBreakfast,
          protFromCarbAtBreakfast
        )
      : "";

  const fatForBreakfast = setFatQuantityFood(
    datafood,
    lipidebreakfast,
    state.breakfastAndDinnerFatQuantity
  ).quantityFood;

  const carbForBreakfast = setCarbQuantityFood(
    datafood,
    glucidebreakfast,
    state.breakfastAndDinnerCarbsQuantity
  ).quantityFood;

  const protForLunch =
    protFromLipAtLunch && protFromCarbAtLunch
      ? setProtQuantityFood(
          datafood,
          proteinelunch,
          state.lunchProteinQuantity,
          protFromLipAtLunch,
          protFromCarbAtLunch
        )
      : "";

  const fatForLunch = setFatQuantityFood(
    datafood,
    lipidelunch,
    state.lunchFatQuantity
  ).quantityFood;

  const carbForLunch = setCarbQuantityFood(
    datafood,
    glucidelunch,
    state.lunchCarbsQuantity
  ).quantityFood;

  const protForDinner =
    protFromLipAtDiner && protFromCarbAtDiner
      ? setProtQuantityFood(
          datafood,
          proteinedinner,
          state.breakfastAndDinnerProteinQuantity,
          protFromLipAtDiner,
          protFromCarbAtDiner
        )
      : "";

  const fatForDinner = setFatQuantityFood(
    datafood,
    lipidedinner,
    state.breakfastAndDinnerFatQuantity
  ).quantityFood;

  const carbForDinner = setCarbQuantityFood(
    datafood,
    glucidedinner,
    state.breakfastAndDinnerCarbsQuantity
  ).quantityFood;

  return (
    <Grid id="mealGrid" columns="equal">
      <Header id="mealplanSubtitle" as="h3">
        Votre plan alimentaire
      </Header>
      {!loadingfood ? (
        <>
          <Grid.Row id="dailyMealRow">
            {/* COLONNE PETIT DEJEUNER */}
            <FoodPlanMeal
              meal="breakfast"
              header="Petit déjeuner"
              checkAction={handleCheck}
              checkValue={breakfastcheck}
              idCheckbox="breakfastcheck"
              choiceAction={handleValueFoodtype}
              proteine={proteinebreakfast}
              fat={lipidebreakfast}
              carbohydrate={glucidebreakfast}
              protQuantity={protForBreakfast}
              fatQuantity={fatForBreakfast}
              carbQuantity={carbForBreakfast}
              foodArray={foodToShow || []}
            />
            {/* COLONNE LUNCH */}
            <FoodPlanMeal
              meal="lunch"
              header="Déjeuner"
              checkAction={handleCheck}
              checkValue={lunchcheck}
              idCheckbox="lunchcheck"
              choiceAction={handleValueFoodtype}
              proteine={proteinelunch}
              fat={lipidelunch}
              carbohydrate={glucidelunch}
              protQuantity={protForLunch}
              fatQuantity={fatForLunch}
              carbQuantity={carbForLunch}
              foodArray={foodToShow || []}
            />
            {/* COLONNE DINNER */}
            <FoodPlanMeal
              meal="dinner"
              header="Dîner"
              checkAction={handleCheck}
              checkValue={dinnercheck}
              idCheckbox="dinnercheck"
              choiceAction={handleValueFoodtype}
              proteine={proteinedinner}
              fat={lipidedinner}
              carbohydrate={glucidedinner}
              protQuantity={protForDinner}
              fatQuantity={fatForDinner}
              carbQuantity={carbForDinner}
              foodArray={foodToShow || []}
            />
          </Grid.Row>

          {/* LIGNE COLLATION */}
          <Grid.Row id="snackRow">
            <Grid.Column id="snackColumn">
              <Segment id="snackSegment">
                <Header as="h4" id="snackHeader">
                  Collation
                </Header>
                <Checkbox
                  className="cheatmealCheckbox"
                  toggle
                  id="snackcheck"
                  label="Je m'entraine !"
                  onChange={handleCheck}
                  checked={snackcheck}
                />
              </Segment>

              {snackcheck && (
                <Form inverted id="snackForm">
                  <Form.Group className="mealFields">
                    <Label className="mealLabel">
                      {setProteinQuantity(proteinesnack)}
                    </Label>
                    <Dropdown
                      fluid
                      selection
                      options={proteinType}
                      className="foodDropdown"
                      id="proteinesnack"
                      onChange={handleValueFoodtype}
                      value={proteinesnack}
                    />
                  </Form.Group>

                  <Form.Group className="mealFields">
                    <Label className="mealLabel">
                      {setSugarQuantity(glucidesnack)}
                    </Label>
                    <Dropdown
                      fluid
                      selection
                      options={glucideType}
                      className="foodDropdown"
                      id="glucidesnack"
                      onChange={handleValueFoodtype}
                      value={glucidesnack}
                    />
                  </Form.Group>
                  <div className="mealVegAndFruit">+ 1 fruit</div>
                </Form>
              )}
              {!snackcheck && <FoodPlanMessageSnack />}
            </Grid.Column>
          </Grid.Row>
        </>
      ) : (
        <Loader />
      )}
    </Grid>
  );
};
