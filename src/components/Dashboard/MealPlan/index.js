// == Import : npm
import React from 'react';
import {
  Grid, Header, Segment, Form, Checkbox, Label, Dropdown,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import MessageSnack from 'src/components/Dashboard/MealPlan/MessageSnack';
import OneMeal from 'src/components/Dashboard/MealPlan/OneMeal';
import { setProteinQuantity, setSugarQuantity } from 'src/utils/setQuantity';
import { setProteinType, setGlucidType, setLipidType } from 'src/utils/setFoodType';
import { setFatQuantityFood, setProtQuantityFood, setCarbQuantityFood } from 'src/utils/setQuantities';
import './mealplan.scss';

// == Composant
const MealPlan = ({
  changeFoodValue,
  proteinebreakfast, proteinelunch, proteinedinner, proteinesnack,
  lipidebreakfast, lipidelunch, lipidedinner,
  glucidebreakfast, glucidelunch, glucidedinner, glucidesnack,
  changeCheckValue,
  breakfastcheck, lunchcheck, dinnercheck, snackcheck,
  datafood, foodToShow,
  loadingfood, state,
}) => {
  const handleValueFoodtype = (event, data) => {
    changeFoodValue(data.value, data.id);
  };

  const handleCheck = (event, data) => {
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
      state.breakfastAndDinnerFatQuantity,
    ).protFromLip;

    protFromLipAtLunch = setFatQuantityFood(
      datafood,
      lipidelunch,
      state.lunchFatQuantity,
    ).protFromLip;

    protFromLipAtDiner = setFatQuantityFood(
      datafood,
      lipidedinner,
      state.breakfastAndDinnerFatQuantity,
    ).protFromLip;

    protFromCarbAtBreakfast = setCarbQuantityFood(
      datafood,
      glucidebreakfast,
      state.breakfastAndDinnerCarbsQuantity,
    ).protFromCarb;

    protFromCarbAtLunch = setCarbQuantityFood(
      datafood,
      glucidelunch,
      state.lunchCarbsQuantity,
    ).protFromCarb;

    protFromCarbAtDiner = setCarbQuantityFood(
      datafood,
      glucidedinner,
      state.breakfastAndDinnerCarbsQuantity,
    ).protFromCarb;
  }

  const proteinType = setProteinType(foodToShow);
  const glucideType = setGlucidType(foodToShow);

  const protForBreakfast = setProtQuantityFood(
    datafood,
    proteinebreakfast,
    state.breakfastAndDinnerProteinQuantity,
    protFromLipAtBreakfast,
    protFromCarbAtBreakfast,
  );

  const fatForBreakfast = setFatQuantityFood(
    datafood,
    lipidebreakfast,
    state.breakfastAndDinnerFatQuantity,
  ).quantityFood;

  const carbForBreakfast = setCarbQuantityFood(
    datafood,
    glucidebreakfast,
    state.breakfastAndDinnerCarbsQuantity,
  ).quantityFood;

  const protForLunch = setProtQuantityFood(
    datafood,
    proteinelunch,
    state.lunchProteinQuantity,
    protFromLipAtLunch,
    protFromCarbAtLunch,
  );

  const fatForLunch = setFatQuantityFood(
    datafood,
    lipidelunch,
    state.lunchFatQuantity,
  ).quantityFood;

  const carbForLunch = setCarbQuantityFood(
    datafood,
    glucidelunch,
    state.lunchCarbsQuantity,
  ).quantityFood;

  const protForDinner = setProtQuantityFood(
    datafood,
    proteinedinner,
    state.breakfastAndDinnerProteinQuantity,
    protFromLipAtDiner,
    protFromCarbAtDiner,
  );

  const fatForDinner = setFatQuantityFood(
    datafood,
    lipidedinner,
    state.breakfastAndDinnerFatQuantity,
  ).quantityFood;

  const carbForDinner = setCarbQuantityFood(
    datafood,
    glucidedinner,
    state.breakfastAndDinnerCarbsQuantity,
  ).quantityFood;


  return (
    <>
      {!loadingfood && (
      <Grid id="mealGrid" columns="equal">
        <Header id="mealplanSubtitle" as="h3">Votre plan alimentaire</Header>
        <Grid.Row id="dailyMealRow">

          {/* COLONNE PETIT DEJEUNER */}
          <OneMeal
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
            foodArray={foodToShow !== null && foodToShow}
          />
          {/* COLONNE LUNCH */}
          <OneMeal
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
            foodArray={foodToShow !== null && foodToShow}
          />
          {/* COLONNE DINNER */}
          <OneMeal
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
            foodArray={foodToShow !== null && foodToShow}
          />
        </Grid.Row>


        {/* LIGNE COLLATION */}
        <Grid.Row id="snackRow">
          <Grid.Column id="snackColumn">
            <Segment id="snackSegment">
              <Header as="h4" id="snackHeader">Collation</Header>
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
                <Label className="mealLabel">{setProteinQuantity(proteinesnack)}</Label>
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
                <Label className="mealLabel">{setSugarQuantity(glucidesnack)}</Label>
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
            {!snackcheck && <MessageSnack />}
          </Grid.Column>
        </Grid.Row>

      </Grid>
      )}
    </>
  );
};

MealPlan.propTypes = {
  changeFoodValue: PropTypes.func.isRequired,
  proteinebreakfast: PropTypes.string.isRequired,
  proteinelunch: PropTypes.string.isRequired,
  proteinedinner: PropTypes.string.isRequired,
  proteinesnack: PropTypes.string.isRequired,
  lipidebreakfast: PropTypes.string.isRequired,
  lipidelunch: PropTypes.string.isRequired,
  lipidedinner: PropTypes.string.isRequired,
  glucidebreakfast: PropTypes.string.isRequired,
  glucidelunch: PropTypes.string.isRequired,
  glucidedinner: PropTypes.string.isRequired,
  glucidesnack: PropTypes.string.isRequired,
  changeCheckValue: PropTypes.func.isRequired,
  breakfastcheck: PropTypes.bool.isRequired,
  lunchcheck: PropTypes.bool.isRequired,
  dinnercheck: PropTypes.bool.isRequired,
  snackcheck: PropTypes.bool.isRequired,
  loadingfood: PropTypes.bool.isRequired,
  datafood: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
  foodToShow: PropTypes.array.isRequired,
};


export default MealPlan;
