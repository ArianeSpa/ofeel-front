/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import PropTypes from 'prop-types';


import { Container, Item, Image } from 'semantic-ui-react';


import './workout.scss';
import setImageWorkout from 'src/utils/setImageWorkout';


const WorkoutList = ({ workoutList }) => (
  <Container className="workoutContainer" stackable="true">
    <Item.Group>
      {workoutList.map((currentWorkout) => (
        <Item key={currentWorkout.id} className="size-item">
          <Item.Header className="header-workout">{currentWorkout.name}
            <Image spaced="left" className="type-img" src={setImageWorkout(currentWorkout.slug)} wrapped ui={false} />
          </Item.Header>
         
          <Item.Description>
            {currentWorkout.content}
          </Item.Description>
        </Item>
      ))}
    </Item.Group>
  </Container>
);


WorkoutList.propTypes = {
  workoutList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default WorkoutList;
