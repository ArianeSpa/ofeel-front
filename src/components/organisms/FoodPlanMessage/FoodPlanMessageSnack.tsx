// == Import : npm
import React from "react";
import { useTranslation } from "react-i18next";

// == Composant
export const FoodPlanMessageSnack: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="message snackmessage">
      {t("PAGES.DASHBOARD.MEAL.SNACK_MESSAGE")}
    </div>
  );
};
