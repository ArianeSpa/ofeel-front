// == Import : npm
import React from "react";
import { useTranslation } from "react-i18next";

// == Composant
export const FoodPlanMessageCheat: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="message messagecheat">
      {t("PAGES.DASHBOARD.MEAL.CHEAT_MEAL_MESSAGE")}
    </div>
  );
};
