// == Import : npm
import React from 'react';
import {
  Grid, Header, Segment, Form, Checkbox, Label, Dropdown,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import MessageCheat from 'src/components/Dashboard/MealPlan/MessageCheat';
import MessageSnack from 'src/components/Dashboard/MealPlan/MessageSnack';
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


  const protFromLipAtBreakfast = setFatQuantityFood(
    datafood,
    lipidebreakfast,
    state.q_lip_p_dej_din,
  ).protFromLip;
  const protFromLipAtLunch = setFatQuantityFood(
    datafood,
    lipidelunch,
    state.q_lip_dej,
  ).protFromLip;
  const protFromLipAtDiner = setFatQuantityFood(
    datafood,
    lipidedinner,
    state.q_lip_p_dej_din,
  ).protFromLip;
  const protFromCarbAtBreakfast = setCarbQuantityFood(
    datafood,
    glucidebreakfast,
    state.q_glu_p_dej_din,
  ).protFromCarb;
  const protFromCarbAtLunch = setCarbQuantityFood(
    datafood,
    glucidelunch,
    state.q_glu_dej,
  ).protFromCarb;
  const protFromCarbAtDiner = setCarbQuantityFood(
    datafood,
    glucidedinner,
    state.q_glu_p_dej_din,
  ).protFromCarb;


  const proteinType = setProteinType(foodToShow);
  const glucideType = setGlucidType(foodToShow);
  const lipideType = setLipidType(foodToShow);

  return (
    <>
      {!loadingfood && (
      <Grid className="mealGrid" columns="equal">
        <Grid.Row className="bothRow rowMeals">

          {/* COLONNE PETIT DEJEUNER */}
          <Grid.Column className="tricol bfst">
            <Segment className="cssSegment">
              <Header as="h4">Petit déjeuner</Header>
              <Checkbox
                className="cheat"
                toggle
                id="breakfastcheck"
                label="Cheat Meal"
                onChange={handleCheck}
                checked={breakfastcheck}
              />
            </Segment>

            {!breakfastcheck && (
            <Form inverted className="bfstForm cssForm">
              <Form.Group className="cssField">
                <Label className="cssLabel">{setProtQuantityFood(datafood, proteinebreakfast, state.q_prot_p_dej_din, protFromLipAtBreakfast, protFromCarbAtBreakfast)}</Label>
                <Dropdown
                  fluid
                  selection
                  options={proteinType}
                  id="proteinebreakfast"
                  onChange={handleValueFoodtype}
                  value={proteinebreakfast}

                />
              </Form.Group>
              <Form.Group className="lbForm cssField">
                <Label className="cssLabel">{setFatQuantityFood(datafood, lipidebreakfast, state.q_lip_p_dej_din).quantityFood}</Label>
                <Dropdown
                  fluid
                  selection
                  options={lipideType}
                  id="lipidebreakfast"
                  className="bflb"
                  onChange={handleValueFoodtype}
                  value={lipidebreakfast}
                />
              </Form.Group>
              <Form.Group className="glForm cssField">
                <Label className="cssLabel">{setCarbQuantityFood(datafood, glucidebreakfast, state.q_glu_p_dej_din).quantityFood}</Label>
                <Dropdown
                  fluid
                  selection
                  options={glucideType}
                  className="bfgl"
                  id="glucidebreakfast"
                  onChange={handleValueFoodtype}
                  value={glucidebreakfast}
                />
              </Form.Group>
              <div className="fruit">Légumes à volonté + 1 à 2 fruit(s)</div>
            </Form>
            )}
            {breakfastcheck && <MessageCheat />}
          </Grid.Column>


          {/* COLONNE LUNCH */}
          <Grid.Column className="tricol lch">
            <Segment className="cssSegment">
              <Header as="h4">Déjeuner</Header>
              <Checkbox
                className="cheat"
                toggle
                id="lunchcheck"
                label="Cheat Meal"
                onChange={handleCheck}
                checked={lunchcheck}
              />
            </Segment>

            {!lunchcheck && (
            <Form inverted className="lnchForm cssForm">
              <Form.Group className="prForm cssField">
                <Label className="cssLabel">{setProtQuantityFood(datafood, proteinelunch, state.q_prot_dej, protFromLipAtLunch, protFromCarbAtLunch)}</Label>
                <Dropdown
                  fluid
                  selection
                  options={proteinType}
                  className="lnpr"
                  id="proteinelunch"
                  onChange={handleValueFoodtype}
                  value={proteinelunch}
                />
              </Form.Group>
              <Form.Group className="lbForm cssField">
                <Label className="cssLabel">{setFatQuantityFood(datafood, lipidelunch, state.q_lip_dej).quantityFood}</Label>
                <Dropdown
                  fluid
                  selection
                  options={lipideType}
                  className="lnlb"
                  id="lipidelunch"
                  onChange={handleValueFoodtype}
                  value={lipidelunch}
                />
              </Form.Group>
              <Form.Group className="glForm cssField">
                <Label className="cssLabel">{setCarbQuantityFood(datafood, glucidelunch, state.q_glu_dej).quantityFood}</Label>
                <Dropdown
                  fluid
                  selection
                  options={glucideType}
                  className="lngl"
                  id="glucidelunch"
                  onChange={handleValueFoodtype}
                  value={glucidelunch}
                />
              </Form.Group>
              <div className="fruit">Légumes à volonté + 1 à 2 fruit(s)</div>
            </Form>
            )}
            {lunchcheck && <MessageCheat />}
          </Grid.Column>

          {/* COLONNE DINNER */}
          <Grid.Column className="tricol dnr">
            <Segment className="cssSegment">
              <Header as="h4">Diner</Header>
              <Checkbox
                className="cheat"
                toggle
                id="dinnercheck"
                label="Cheat Meal"
                onChange={handleCheck}
                checked={dinnercheck}
              />
            </Segment>

            {!dinnercheck && (
            <Form inverted className="bfstForm cssForm">
              <Form.Group className="prForm cssField">
                <Label className="cssLabel">{setProtQuantityFood(datafood, proteinedinner, state.q_prot_p_dej_din, protFromLipAtDiner, protFromCarbAtDiner)}</Label>
                <Dropdown
                  fluid
                  selection
                  options={proteinType}
                  className="dnpr"
                  id="proteinedinner"
                  onChange={handleValueFoodtype}
                  value={proteinedinner}
                />
              </Form.Group>
              <Form.Group className="lbForm cssField">
                <Label className="cssLabel">{setFatQuantityFood(datafood, lipidedinner, state.q_lip_p_dej_din).quantityFood}</Label>
                <Dropdown
                  fluid
                  selection
                  options={lipideType}
                  className="dnlb"
                  id="lipidedinner"
                  onChange={handleValueFoodtype}
                  value={lipidedinner}
                />
              </Form.Group>
              <Form.Group className="glForm cssField">
                <Label className="cssLabel">{setCarbQuantityFood(datafood, glucidedinner, state.q_glu_p_dej_din).quantityFood}</Label>
                <Dropdown
                  fluid
                  selection
                  options={glucideType}
                  className="dngl"
                  id="glucidedinner"
                  onChange={handleValueFoodtype}
                  value={glucidedinner}
                />
              </Form.Group>
              <div className="fruit">Légumes à volonté + 1 à 2 fruit(s)</div>
            </Form>
            )}
            {dinnercheck && <MessageCheat />}
          </Grid.Column>
        </Grid.Row>


        {/* LIGNE COLLATION */}

        <Grid.Row className="bothRow rowSnack">
          <Grid.Column className="leftsnackColumn">
            <Segment className="snackSegment">
              <Header as="h4">Collation</Header>
              <Checkbox
                className="cheat"
                toggle
                id="snackcheck"
                label="Je m'entraine !"
                onChange={handleCheck}
                checked={snackcheck}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column className="snackColumn">

            {snackcheck && (
            <Form inverted className="snackForm cssForm">
              <Form.Group className="prForm cssField snackField">
                <Label className="snackLabel">{setProteinQuantity(proteinesnack)}</Label>
                <Dropdown
                  fluid
                  selection
                  options={proteinType}
                  className="snpr"
                  id="proteinesnack"
                  onChange={handleValueFoodtype}
                  value={proteinesnack}
                />
              </Form.Group>

              <Form.Group className="glForm cssField snackField">
                <Label className="snackLabel">{setSugarQuantity(glucidesnack)}</Label>
                <Dropdown
                  fluid
                  selection
                  options={glucideType}
                  className="sngl"
                  id="glucidesnack"
                  onChange={handleValueFoodtype}
                  value={glucidesnack}
                />
              </Form.Group>
              <div className="fruit">+ 1 fruit</div>
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
