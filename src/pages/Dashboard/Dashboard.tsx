// == Import : npm
import React, { useState } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";

// == Import : local
import { DashboardTag, DashBoardTagEnum } from "@/components";
import { Welcome } from "./Welcome/Welcome";
import { Profile } from "./Profile/Profile";
import { Goal } from "./Goal/Goal";
// import { FoodPlan } from "./FoodPlan/FoodPlan";
import { WorkoutList } from "./WorkoutList/WorkoutList";
import "./dashboard.scss";
import { FoodPlan } from "./FoodPlan/FoodPlan";

// == Composant
export const Dashboard: React.FC = () => {
  const [currentTag, setCurrentTag] = useState<DashBoardTagEnum>();

  const handleTagSelection = (tag: DashBoardTagEnum) => {
    setCurrentTag(tag);
  };
  return (
    <Segment inverted id="dashboardSegment">
      <Grid columns={2} id="dashboardGrid">
        <Grid.Row stretched id="dashboardRow">
          <Grid.Column id="tagsColumn">
            <DashboardTag
              tag={DashBoardTagEnum.PROFILE}
              isSelected={currentTag === DashBoardTagEnum.PROFILE}
              onClick={handleTagSelection}
            />
            <DashboardTag
              tag={DashBoardTagEnum.GOAL}
              isSelected={currentTag === DashBoardTagEnum.GOAL}
              onClick={handleTagSelection}
            />
            <DashboardTag
              tag={DashBoardTagEnum.FOOD_PLAN}
              isSelected={currentTag === DashBoardTagEnum.FOOD_PLAN}
              onClick={handleTagSelection}
            />
            <DashboardTag
              tag={DashBoardTagEnum.WORKOUT}
              isSelected={currentTag === DashBoardTagEnum.WORKOUT}
              onClick={handleTagSelection}
            />
          </Grid.Column>
          <Grid.Column id="contentColumn">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route
                path={`/${DashBoardTagEnum.PROFILE}`}
                element={<Profile />}
              />
              <Route path={`/${DashBoardTagEnum.GOAL}`} element={<Goal />} />
              <Route
                path={`/${DashBoardTagEnum.FOOD_PLAN}`}
                element={<FoodPlan />}
              />
              <Route
                path={`/${DashBoardTagEnum.WORKOUT}`}
                element={<WorkoutList />}
              />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
