import React from 'react';
import {
  Header, Segment, Form,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './goals.scss';
import GoalRadio from './GoalRadio';

const Goals = ({ buttons }) => (
  <Segment inverted className="dashboard-goal">
    <Header className="subtitle-goal" as="h4">Vous souhaitez</Header>
    <Form className="choices">
      {buttons.map((button) => (
        <GoalRadio key={button.value} value={button.value} text={button.text} />
      ))}
    </Form>
  </Segment>
);

Goals.propTypes = {
  buttons: PropTypes.arrayOf().isRequired,
};

export default Goals;
