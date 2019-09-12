import React from 'react';
import { 
  Header, Segment, Form, Select,
} from 'semantic-ui-react';


import './myfeeling.scss';


const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];
const MyFeeling = ({
}) => (
  <Segment inverted className="dashboard-feeling">
    <Header className="subtitle-feeling" as="h4">Parlons un peu de vous!</Header>
    <Form className="gender">
      <Form.Field
        control={Select}
        label="Gender"
        options={options}
        placeholder="Gender"
      />
    </Form>
  </Segment>
);

export default MyFeeling;
