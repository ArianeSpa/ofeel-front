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
} from "semantic-ui-react";

// == Import : local
import { FoodPlanMessageCheat } from "@/components/Dashboard/FoodPlan/FoodPlanMessage/FoodPlanMessageCheat";
import {
  setProteinType,
  setGlucidType,
  setLipidType,
} from "@/utils/setFoodType";
import "../foodplan.scss";

type FoodPlanMealProps = {
  carbohydrate: string;
  carbQuantity: string;
  fat: string;
  fatQuantity: string;
  foodArray: any[];
  header: string;
  idCheckbox: string;
  meal: string;
  proteine: string;
  protQuantity: string;
  checkValue: boolean;
  checkAction: (
    _event: FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => void;
  choiceAction: (
    _event: SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => void;
};

export const FoodPlanMeal: React.FC<FoodPlanMealProps> = ({
  meal,
  header,
  checkAction,
  checkValue,
  idCheckbox,
  choiceAction,
  proteine,
  fat,
  carbohydrate,
  protQuantity,
  fatQuantity,
  carbQuantity,
  foodArray,
}) => {
  const proteinType = setProteinType(foodArray);
  const glucideType = setGlucidType(foodArray);
  const lipideType = setLipidType(foodArray);

  return (
    <Grid.Column className="oneMealColumn" id={`${meal}Column`}>
      <Segment className="oneMealSegment">
        <Header className="oneMealHeader" as="h4">
          {header}
        </Header>
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
          <div className="mealVegAndFruit">
            Légumes à volonté + 1 à 2 fruit(s)
          </div>
        </Form>
      )}
      {checkValue && <FoodPlanMessageCheat />}
    </Grid.Column>
  );
};
