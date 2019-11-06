// == Import : npm
import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import Welcome from 'src/containers/Dashboard/Welcome';
import MyFeeling from 'src/containers/Dashboard/MyFeeling';
import Goals from 'src/containers/Dashboard/Goals';
import MealPlan from 'src/containers/Dashboard/MealPlan';
import Workout from 'src/containers/Dashboard/WorkoutList';
import DashboardTag from 'src/components/Dashboard/DashboardTag';
import './dashboard.scss';

// == Composant
const Dashboard = () => (
  <Segment inverted id="dashboardSegment">
    <Grid columns={2} id="dashboardGrid">
      <Grid.Row stretched id="dashboardRow">
        <Grid.Column id="tagsColumn">
          <DashboardTag tag="myfeeling" />
          <DashboardTag tag="goals" />
          <DashboardTag tag="mealplan" />
          <DashboardTag tag="workout" />
        </Grid.Column>
        <Grid.Column id="contentColumn">
          <Switch>
            <Route path="/dashboard" exact component={Welcome} />
            <Route path="/dashboard/myfeeling" component={MyFeeling} />
            <Route path="/dashboard/goals" component={Goals} />
            <Route path="/dashboard/mealplan" component={MealPlan} />
            <Route path="/dashboard/workout" component={Workout} />
          </Switch>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Dashboard;
