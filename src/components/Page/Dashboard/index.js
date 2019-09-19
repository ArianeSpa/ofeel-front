import React from 'react';
import { Grid, Segment, Icon } from 'semantic-ui-react';
import { Route, Switch, NavLink } from 'react-router-dom';


import Welcome from 'src/containers/Dashboard/Welcome';
import MyFeeling from 'src/containers/Dashboard/MyFeeling';
import Goals from 'src/containers/Dashboard/Goals';
import MealPlan from 'src/containers/Dashboard/MealPlan';
import Workout from 'src/components/Page/Dashboard/Workout';
import './dashboard.scss';


const Dashboard = () => {
  // création des onglets
  const createSegment = (tag) => {
    const link = `/dashboard/${tag}`;
    return (
      <Segment as={NavLink} to={link} className={`${tag}Segment dashboardItem`} id={window.location.href.includes(tag) ? 'focus' : ''} name={tag}>
        <div className="border" id={window.location.href.includes(tag) ? tag : ''} />
        <div className="iconTag">
          <Icon id={window.location.href.includes(tag) ? `${tag}Icon` : ''} name={tag === 'myfeeling' ? 'user' : tag === 'goals' ? 'crosshairs' : tag === 'mealplan' ? 'food' : 'futbol'} />
        </div>
      </Segment>
    );
  };


  return (
    <Segment inverted className="dashboard">
      <Grid columns={2}>
        <Grid.Row stretched className="pers">
          <Grid.Column className="left">
            {createSegment('myfeeling')}
            {createSegment('goals')}
            {createSegment('mealplan')}
            {createSegment('workout')}
          </Grid.Column>
          <Grid.Column className="right">
            <Switch>
              <Route path="/dashboard" exact component={Welcome} />
              <Route path="/dashboard/myfeeling" exact component={MyFeeling} />
              <Route path="/dashboard/goals" exact component={Goals} />
              <Route path="/dashboard/mealplan" exact component={MealPlan} />
              <Route path="/dashboard/workout" exact component={Workout} />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};


export default Dashboard;
