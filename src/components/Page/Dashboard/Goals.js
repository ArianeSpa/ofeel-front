import React from 'react';
import {
  Header, Form, Radio, Checkbox, Button, Image, Segment,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';


import './goals.scss';

import iconMuscle from 'src/assets/icon/biceps3.png';
import iconBalance from 'src/assets/icon/balance.png';
import iconSalad from 'src/assets/icon/salade.png';
import iconLactose from 'src/assets/icon/lactose.png';
import iconGluten from 'src/assets/icon/gluten.png';
import iconNutrition from 'src/assets/icon/nutrition.png';

const Goals = ({
  changeGoal, goal, isChecked, changeCheckboxValue,
}) => {
  const handleChangeGoal = (event) => {
    const { id } = event.target;
    changeGoal(id);
  };
  const handleClickPref = (event) => {
    console.log(event.target);
    const { id } = event.target;
    changeCheckboxValue(id);
  };
  return (
    <Segment inverted className="dashboard-goal">
      <Header className="subtitle-goal" as="h4">Vous souhaitez</Header>
      <Form className="choices">
        <Form.Field>
          <Radio
            className="choice"
            id="perte-de-poids"
            label="Perdre du poids"
            // value={choice}
            name="radioGroup"
            onChange={handleChangeGoal}
            checked={goal === 'perte-de-poids'}
          />
          <Image
            className="icon"
            src={iconBalance}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            className="choice"
            id="prise-de-masse"
            label="Prendre de la masse musculaire"
            name="radioGroup"
            onChange={handleChangeGoal}
            checked={goal === 'prise-de-masse'}

          />
          <Image
            className="icon"
            src={iconMuscle}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            className="choice"
            id="remise-en-forme"
            label="Nutrition équilibrée"
            name="radioGroup"
            onChange={handleChangeGoal}
            checked={goal === 'remise-en-forme'}
          />
          <Image
            className="icon"
            src={iconNutrition}
          />
        </Form.Field>
      </Form>
      <Header className="subtitle-goal" as="h4">Vos préférences alimentaires</Header>
      <Form className="choices">
        <Form.Field>
          <Checkbox
            id="sans-lactose"
            className="choice"
            label="Sans lactose"
            onChange={handleClickPref}
            checked={isChecked}
          />
          <Image
            className="icon"
            src={iconLactose}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            id="sans-gluten"
            className="choice"
            label="Sans gluten"
            onChange={handleClickPref}
            checked={isChecked}
          />
          <Image
            className="icon"
            src={iconGluten}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            id="vegan"
            className="choice"
            label="Vegan"
            onChange={handleClickPref}
            checked={isChecked}
          />
          <Image
            className="icon"
            src={iconSalad}
          />
        </Form.Field>
      </Form>
      <Button className="save" type="submit">Enregistrer</Button>
    </Segment>
  );
};

Goals.propTypes = {
  changeGoal: PropTypes.func.isRequired,
  goal: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  changeCheckboxValue: PropTypes.func.isRequired,
};


export default Goals;
