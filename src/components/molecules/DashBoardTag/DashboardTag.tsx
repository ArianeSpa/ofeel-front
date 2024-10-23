// == Import : npm
import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// == Import : local
import "./dashboard_tag.scss";
import { useTranslation } from "react-i18next";
import { ObjectOf } from "@/utils/common";

export enum DashBoardTagEnum {
  PROFILE = "profile",
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
  const { t } = useTranslation();
  const getIconName = () => {
    switch (tag) {
      case DashBoardTagEnum.PROFILE:
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

  const translationKeys: ObjectOf<string> = {
    [DashBoardTagEnum.PROFILE]: "PAGES.DASHBOARD.TAG.PROFILE",
    [DashBoardTagEnum.GOAL]: "PAGES.DASHBOARD.TAG.GOAL",
    [DashBoardTagEnum.FOOD_PLAN]: "PAGES.DASHBOARD.TAG.FOOD_PLAN",
    [DashBoardTagEnum.WORKOUT]: "PAGES.DASHBOARD.TAG.WORKOUT",
  };
  const translatedLabel = t(translationKeys[tag]);

  return (
    <Segment
      as={NavLink}
      className={`${tag}Segment dashboardTag`}
      id={isSelected ? "focus" : ""}
      name={tag}
      to={`/dashboard/${tag}`}
      aria-label={translatedLabel}
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
