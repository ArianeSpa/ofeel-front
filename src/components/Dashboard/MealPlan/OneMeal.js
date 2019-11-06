// == Import : npm
import React from 'react';
import {
  Grid, Header, Segment, Form, Checkbox, Label, Dropdown,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import MessageCheat from 'src/components/Dashboard/MealPlan/MessageCheat';
import { setProteinType, setGlucidType, setLipidType } from 'src/utils/setFoodType';
import './mealplan.scss';

const OneMeal = ({
  meal, header,
  checkAction, checkValue, idCheckbox,
  choiceAction, proteine, fat, carbohydrate,
  protQuantity, fatQuantity, carbQuantity,
  foodArray,
}) => {
  const proteinType = setProteinType(foodArray);
  const glucideType = setGlucidType(foodArray);
  const lipideType = setLipidType(foodArray);

  return (
    <Grid.Column className="oneMealColumn" id={`${meal}Column`}>
      <Segment className="oneMealSegment">
        <Header className="oneMealHeader" as="h4">{header}</Header>
        <Checkbox
          checked={checkValue}
          className="cheatmealCheckbox"
          id={idCheckbox}
          label="Cheat Meal"
          onChange={checkAction}
          toggle
        />
      </Segment>

      {!checkValue && (
      <Form inverted className="oneMealForm">
        <Form.Group className="mealFields">
          <Label className="mealLabel">{protQuantity}</Label>
          <Dropdown
            className="foodDropdown"
            fluid
            id={`proteine${meal}`}
            onChange={choiceAction}
            options={proteinType}
            selection
            value={proteine}
          />
        </Form.Group>
        <Form.Group className="mealFields">
          <Label className="mealLabel">{fatQuantity}</Label>
          <Dropdown
            className="foodDropdown"
            fluid
            id={`lipide${meal}`}
            onChange={choiceAction}
            options={lipideType}
            selection
            value={fat}
          />
        </Form.Group>
        <Form.Group className="mealFields">
          <Label className="mealLabel">{carbQuantity}</Label>
          <Dropdown
            className="foodDropdown"
            fluid
            id={`glucide${meal}`}
            onChange={choiceAction}
            options={glucideType}
            selection
            value={carbohydrate}
          />
        </Form.Group>
        <div className="mealVegAndFruit">Légumes à volonté + 1 à 2 fruit(s)</div>
      </Form>
      )}
      {checkValue && <MessageCheat />}
    </Grid.Column>
  );
};

OneMeal.propTypes = {
  carbohydrate: PropTypes.string.isRequired,
  carbQuantity: PropTypes.string.isRequired,
  checkAction: PropTypes.func.isRequired,
  checkValue: PropTypes.bool.isRequired,
  choiceAction: PropTypes.func.isRequired,
  fat: PropTypes.string.isRequired,
  fatQuantity: PropTypes.number.isRequired,
  foodArray: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  idCheckbox: PropTypes.string.isRequired,
  meal: PropTypes.string.isRequired,
  proteine: PropTypes.string.isRequired,
  protQuantity: PropTypes.string.isRequired,
};

export default OneMeal;
