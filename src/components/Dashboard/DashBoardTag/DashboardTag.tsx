// == Import : npm
import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// == Import : local
import "./dashboard_tag.scss";

export enum DashBoardTagEnum {
  PROFIL = "profil",
  GOAL = "goal",
  FOOD_PLAN = "foodplan",
  WORKOUT = "workout",
}
type DashBoardTagProps = {
  tag: DashBoardTagEnum;
  isSelected?: boolean;
  onClick: (tag: DashBoardTagEnum) => void;
};

// == Composant
export const DashboardTag: React.FC<DashBoardTagProps> = ({
  tag,
  isSelected,
  onClick,
}) => {
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

  const handleClick = () => {
    onClick(tag);
  };

  return (
    <Segment
      as={NavLink}
      className={`${tag}Segment dashboardTag`}
      id={isSelected ? "focus" : ""}
      name={tag}
      to={`/dashboard/${tag}`}
      onClick={handleClick}
    >
      <div className="tagBorder" id={isSelected ? tag : ""} />
      <div className="tagIcon">
        <Icon
          className="icons"
          id={isSelected ? `${tag}Icon` : ""}
          name={getIconName()}
        />
      </div>
    </Segment>
  );
};
