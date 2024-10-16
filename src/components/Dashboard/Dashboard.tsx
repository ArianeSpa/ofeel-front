// == Import : npm
import React, { useState } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";

// == Import : local
import "./dashboard.scss";
import ProfilContainer from "./Profil/ProfileContainer";
import GoalsContainer from "./Goal/GoalContainer";
import FoodPlanContainer from "./FoodPlan/FoodPlanContainer";
import WorkoutListContainer from "./WorkoutList/WorkoutListContainer";
import { DashboardTag, DashBoardTagEnum } from "./DashBoardTag/DashboardTag";
import { Welcome } from "./Welcome/Welcome";

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
              tag={DashBoardTagEnum.PROFIL}
              isSelected={currentTag === DashBoardTagEnum.PROFIL}
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
              {/* <Route path="/profil" element={<ProfilContainer />} />
              <Route path="/goal" element={<GoalsContainer />} />
              <Route path="/foodplan" element={<FoodPlanContainer />} />
              <Route path="/workout" element={<WorkoutListContainer />} /> */}
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
