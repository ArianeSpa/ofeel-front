// == Import : npm
import React from "react";
import { Route, Routes } from "react-router-dom";

// == Import : local
import { Flex } from "@/components";
import { useWindowSize } from "@/hooks/window.hook";
import { Welcome } from "./Welcome/Welcome";
import { Profile } from "./Profile/Profile";
import { FoodPlan } from "./FoodPlan/FoodPlan";
import { Goal } from "./Goal/Goal";
import { WorkoutList } from "./WorkoutList/WorkoutList";
import { StyledDashboard } from "./DashBoard.style";
import { DashBoardTabEnum, DashBoardTabs } from "./DashBoardTabs/DashBoardTabs";

// == Composant
export const Dashboard: React.FC = () => {
  const { isDesktop } = useWindowSize();
  return (
    <StyledDashboard flexDirection={isDesktop ? "row" : "column"}>
      <DashBoardTabs />
      <Flex
        padding="20px"
        style={{ overflow: "hidden", height: "100%", width: "100%" }}
      >
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path={`/${DashBoardTabEnum.PROFILE}`} element={<Profile />} />
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
    </StyledDashboard>
  );
};
