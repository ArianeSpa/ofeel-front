import React from 'react';
import {
  Header, Form, Radio, Checkbox, Button, Image, Container,
} from 'semantic-ui-react';

import './goals.scss';
import iconMuscle from 'src/assets/icon/biceps3.png';
import iconBalance from 'src/assets/icon/balance.png';
import iconSalad from 'src/assets/icon/salade.png';
import iconLactose from 'src/assets/icon/lactose.png';
import iconGluten from 'src/assets/icon/gluten.png';
import iconNutrition from 'src/assets/icon/nutrition.png';

const Goals = ({

}) => (
  <Container>
    <Header className="subtitle" as="h4">Vous souhaitez</Header>
    <Form className="choices">
      <Form.Field>
        <Radio
          className="choice"
          label="Perdre du poids"
          name="radioGroup"
        />
        <Image
          className="icon"
          src={iconBalance}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          className="choice"
          label="Prendre de la masse musculaire"
          name="radioGroup"
        />
        <Image
          className="icon"
          src={iconMuscle}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          className="choice"
          label="Nutrition équilibrée"
          name="radioGroup"
        />
        <Image
          className="icon"
          src={iconNutrition}
        />
      </Form.Field>
    </Form>
    <Header className="subtitle" as="h4">Vos préférences alimentaires</Header>
    <Form className="choices">
      <Form.Field>
        <Checkbox className="choice" label="Sans lactose" />
        <Image
          className="icon"
          src={iconLactose}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox className="choice" label="Sans gluten" />
        <Image
          className="icon"
          src={iconGluten}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox className="choice" label="Végétarien" />
        <Image
          className="icon"
          src={iconSalad}
        />
      </Form.Field>
    </Form>
    <Button className="save" type="submit">Submit</Button>
  </Container>
);


export default Goals;
