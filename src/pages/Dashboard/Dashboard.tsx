// == Import : npm
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Flex, Paper } from "react-rocket-ui";

// == Import : local
import { useWindowSize } from "@/hooks";
import { Welcome } from "./Welcome/Welcome";
import { Profile } from "./Profile/Profile";
import { FoodPlan } from "./FoodPlan/FoodPlan";
import { Goal } from "./Goal/Goal";
import { WorkoutList } from "./WorkoutList/WorkoutList";
import { DashBoardTabEnum, DashBoardTabs } from "./DashBoardTabs/DashBoardTabs";

// == Composant
export const Dashboard: React.FC = () => {
  const { isDesktop } = useWindowSize();
  return (
    <Paper
      fullHeight
      fullWidth
      backgroundImage="dashboard"
      boxShadow="5px 5px 10px 5px rgba(0, 110, 178, 0.3)"
      my={5}
    >
      <Flex
        fullHeight
        fullWidth
        flexDirection={isDesktop ? "row" : "column"}
        style={{ overflow: "hidden" }}
      >
        <DashBoardTabs />
        <Flex fullHeight fullWidth p={2.5} style={{ overflow: "hidden" }}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route
              path={`/${DashBoardTabEnum.PROFILE}`}
              element={<Profile />}
            />
            <Route path={`/${DashBoardTabEnum.GOAL}`} element={<Goal />} />
            <Route
              path={`/${DashBoardTabEnum.FOOD_PLAN}`}
              element={<FoodPlan />}
            />
            <Route
              path={`/${DashBoardTabEnum.WORKOUT}`}
              element={<WorkoutList />}
            />
          </Routes>
        </Flex>
      </Flex>
    </Paper>
  );
};
