import React from 'react';
import {
  Header, Form, Radio, Checkbox,
} from 'semantic-ui-react';

import './goals.scss';

const Goals = ({

}) => (
  <div className="content">
    <Header as="h4">Vous souhaitez</Header>
    <Form>
      <Form.Field>
        <Radio
          label="Perdre du poids"
          name="radioGroup"
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label="Prendre de la masse musculaire"
          name="radioGroup"
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label="Hygiene de vie saine"
          name="radioGroup"
        />
      </Form.Field>
      <Header as="h4" textAlign="center">Vos préférences alimentaires</Header>
      <Form.Field>
        <Checkbox radio label="Sans lactose" />
      </Form.Field>
      <Form.Field>
        <Checkbox radio label="Sans gluten" />
      </Form.Field>
      <Form.Field>
        <Checkbox radio label="Végétarien" />
      </Form.Field>
    </Form>
  </div>
);


export default Goals;
