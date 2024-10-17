import { ActivityLevelEnum, GenderEnum } from "@/models/profil.model";

type CalculateBasalMetabolismProps = {
  gender: GenderEnum;
  weight: number;
  height: number;
  age: number;
};
export const calculateBasalMetabolism = ({
  gender,
  weight,
  height,
  age,
}: CalculateBasalMetabolismProps) => {
  const sexeFactor = gender === GenderEnum.MAN ? 259 : 230;
  const weightFactor = weight ** 0.4;
  const heightFactor = height ** 0.5;
  const ageFactor = age ** -0.13;

  return Math.round(
    (sexeFactor * weightFactor * heightFactor * ageFactor) / 10
  );
};

type GetActivityFactorProps = {
  activity: ActivityLevelEnum;
};
export const getActivityFactor = ({ activity }: GetActivityFactorProps) => {
  switch (activity) {
    case ActivityLevelEnum.SEDENTARY:
      return 1.2;
    case ActivityLevelEnum.NOT_VERY_ACTIVE:
      return 1.375;
    case ActivityLevelEnum.ACTIVE:
      return 1.55;
    case ActivityLevelEnum.VERY_ACTIVE:
      return 1.725;
    case ActivityLevelEnum.EXTREMELY_ACTIVE:
      return 1.9;
    default:
  }
};

type GetDailyCalorieCostProps = {
  metab: number;
  activityFactor: number;
};
export const getDailyCalorieCost = ({
  metab,
  activityFactor,
}: GetDailyCalorieCostProps) => metab * activityFactor;
