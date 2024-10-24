// == Import : npm
import { FaBook, FaCrosshairs, FaRunning, FaUser } from "react-icons/fa";

// == Import : local
import { Flex, TabMenuItem } from "@/components";
import { useWindowSize } from "@/hooks/window.hook";
import { GradientColor } from "@/theme/colors";

export enum DashBoardTabEnum {
  PROFILE = "profile",
  GOAL = "goal",
  FOOD_PLAN = "foodplan",
  WORKOUT = "workout",
}
type TabProps = {
  name: DashBoardTabEnum;
  icon: JSX.Element;
  ariaLabel: string;
  gradientColor: GradientColor;
};
const tabs: TabProps[] = [
  {
    ariaLabel: "PAGES.DASHBOARD.TAG.PROFILE",
    gradientColor: GradientColor.YELLOW,
    icon: <FaUser size="30px" />,
    name: DashBoardTabEnum.PROFILE,
  },
  {
    ariaLabel: "PAGES.DASHBOARD.TAG.GOAL",
    gradientColor: GradientColor.GREEN,
    icon: <FaCrosshairs size="30px" />,
    name: DashBoardTabEnum.GOAL,
  },
  {
    ariaLabel: "PAGES.DASHBOARD.TAG.FOOD_PLAN",
    gradientColor: GradientColor.BLUE,
    icon: <FaBook size="30px" />,
    name: DashBoardTabEnum.FOOD_PLAN,
  },
  {
    ariaLabel: "PAGES.DASHBOARD.TAG.WORKOUT",
    gradientColor: GradientColor.PINK,
    icon: <FaRunning size="30px" />,
    name: DashBoardTabEnum.WORKOUT,
  },
];
export const DashBoardTabs: React.FC = () => {
  const { isDesktop } = useWindowSize();

  return (
    <Flex
      flexDirection={isDesktop ? "column" : "row"}
      width={isDesktop ? "170px" : "100%"}
      style={{
        height: isDesktop ? "100%" : "100px",
      }}
      justifyContent="space-evenly"
    >
      {tabs.map((tab) => (
        <TabMenuItem
          key={tab.name}
          icon={tab.icon}
          ariaLabel={tab.ariaLabel}
          url={`/dashboard/${tab.name}`}
          gradientColor={tab.gradientColor}
        />
      ))}
    </Flex>
  );
};
