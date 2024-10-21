// == Import: npm
import { IconType } from "react-icons";
import {
  FaBed,
  FaBoxOpen,
  FaFootballBall,
  FaHeartbeat,
  FaUtensils,
} from "react-icons/fa";

// == Import: lcoal
import { useTheme } from "@/theme/theme";
import { ObjectOf } from "@/utils/common";
import { StyledFeedFilterButton } from "./FeedFilterButton.style";

export enum FeedFiltersEnum {
  FOOD = "food",
  HEALTH = "health",
  SPORT = "sport",
  REST = "rest",
  VARIOUS = "various",
}

type FeedFilterButtonProps = {
  selectedFilters: ObjectOf<boolean>;
  value: FeedFiltersEnum;
  onClick: (value: FeedFiltersEnum) => void;
};
export const FeedFilterButton: React.FC<FeedFilterButtonProps> = ({
  selectedFilters,
  value,
  onClick,
}) => {
  const { color } = useTheme();
  const icons: ObjectOf<IconType> = {
    [FeedFiltersEnum.HEALTH]: FaHeartbeat,
    [FeedFiltersEnum.SPORT]: FaFootballBall,
    [FeedFiltersEnum.REST]: FaBed,
    [FeedFiltersEnum.FOOD]: FaUtensils,
    [FeedFiltersEnum.VARIOUS]: FaBoxOpen,
  };
  const Icon = icons[value];

  const colors: ObjectOf<string> = {
    [FeedFiltersEnum.HEALTH]: color.pink.p4,
    [FeedFiltersEnum.SPORT]: color.pink.p1,
    [FeedFiltersEnum.REST]: color.blue.b3,
    [FeedFiltersEnum.FOOD]: color.green.g3,
    [FeedFiltersEnum.VARIOUS]: color.yellow.y1,
  };
  const iconColor = colors[value];

  const isSelected = selectedFilters[value];
  return (
    <StyledFeedFilterButton
      id={`${value}-filter-button`}
      background={color.grey.g5}
      borderColor={isSelected ? color.yellow.y4 : "transparent"}
      isSelected={isSelected}
      icon={<Icon color={isSelected ? iconColor : color.grey.g2} />}
      onClick={() => onClick(value)}
    />
  );
};
