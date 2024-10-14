// == Import : npm
import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";

// == Import : local
import "./dashboard.scss";
import WelcomeContainer from "./Welcome/WelcomeContainer";
import ProfilContainer from "./Profil/ProfilContainer";
import GoalsContainer from "./Goal/GoalContainer";
import FoodPlanContainer from "./FoodPlan/FoodPlanContainer";
import WorkoutListContainer from "./WorkoutList/WorkoutListContainer";
import { DashboardTag, DashBoardTagEnum } from "./DashBoardTag/DashboardTag";

// == Composant
export const Dashboard: React.FC = () => (
  <Segment inverted id="dashboardSegment">
    <Grid columns={2} id="dashboardGrid">
      <Grid.Row stretched id="dashboardRow">
        <Grid.Column id="tagsColumn">
          <DashboardTag tag={DashBoardTagEnum.PROFIL} />
          <DashboardTag tag={DashBoardTagEnum.GOAL} />
          <DashboardTag tag={DashBoardTagEnum.FOOD_PLAN} />
          <DashboardTag tag={DashBoardTagEnum.WORKOUT} />
        </Grid.Column>
        <Grid.Column id="contentColumn">
          <Routes>
            <Route path="/dashboard/welcome" element={<WelcomeContainer />} />
            <Route path="/dashboard/myfeeling" element={<ProfilContainer />} />
            <Route path="/dashboard/goals" element={<GoalsContainer />} />
            <Route path="/dashboard/mealplan" element={<FoodPlanContainer />} />
            <Route
              path="/dashboard/workout"
              element={<WorkoutListContainer />}
            />
          </Routes>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);
