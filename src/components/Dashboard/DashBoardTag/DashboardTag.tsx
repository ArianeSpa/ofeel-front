// == Import : npm
import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

enum DashBoardTagEnum {
  PROFIL = "profil",
  GOAL = "goal",
  FOOD_PLAN = "foodplan",
  WORKOUT = "workout",
}
type DashBoardTagProps = {
  tag: DashBoardTagEnum;
};

// == Composant
export const DashboardTag: React.FC<DashBoardTagProps> = ({ tag }) => {
  const getIconName = () => {
    switch (tag) {
      case DashBoardTagEnum.PROFIL:
        return "user";
      case DashBoardTagEnum.GOAL:
        return "crosshairs";
      case DashBoardTagEnum.FOOD_PLAN:
        return "food";
      case DashBoardTagEnum.WORKOUT:
        return "futbol";
      default:
    }
  };

  return (
    <Segment
      as={NavLink}
      className={`${tag}Segment dashboardTag`}
      id={window.location.href.includes(tag) ? "focus" : ""}
      name={tag}
      to={`/dashboard/${tag}`}
    >
      <div
        className="tagBorder"
        id={window.location.href.includes(tag) ? tag : ""}
      />
      <div className="tagIcon">
        <Icon
          className="icons"
          id={window.location.href.includes(tag) ? `${tag}Icon` : ""}
          name={getIconName()}
        />
      </div>
    </Segment>
  );
};
