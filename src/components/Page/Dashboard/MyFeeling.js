import React from 'react';
import { Header, Form, Radio } from 'semantic-ui-react';

const MyFeeling = ({
}) => {

  return (
    <div>
      <Header as="h4">Parlons un peu de vous</Header>
      <Form>
        <Form.Field>
          <Radio
            label="Homme"
            name="radioGroup"
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Femme"
            name="radioGroup"
          />
        </Form.Field>
      </Form>
    </div>
  );
};

export default MyFeeling;
