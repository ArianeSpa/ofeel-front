import { ActivityLevelEnum } from "@/models/profil.model";

export const ageGenerator = () => {
  const ageTable = [];
  let ageUser = 0;
  ageTable.push({
    key: "-",
    text: "-",
    value: "-",
  });
  for (ageUser = 18; ageUser < 100; ageUser += 1) {
    ageTable.push({
      key: ageUser,
      text: ageUser,
      value: ageUser,
    });
  }
  return ageTable;
};

export const heightGenerator = () => {
  const heigthTable = [];
  let heigthUser = 0;
  heigthTable.push({
    key: "-",
    text: "-",
    value: "-",
  });
  for (heigthUser = 140; heigthUser < 190; heigthUser += 1) {
    heigthTable.push({
      key: heigthUser,
      text: heigthUser,
      value: heigthUser,
    });
  }
  return heigthTable;
};

export const weightGenerator = () => {
  const weightTable = [];
  let weightUser = 0;
  weightTable.push({
    key: "-",
    text: "-",
    value: "-",
  });
  for (weightUser = 45; weightUser < 140; weightUser += 1) {
    weightTable.push({
      key: weightUser,
      text: weightUser,
      value: weightUser,
    });
  }
  return weightTable;
};

export const activityList = [
  {
    value: ActivityLevelEnum.SEDENTARY,
    text: "Aucun exercice quotidien ou presque",
  },
  {
    value: ActivityLevelEnum.NOT_VERY_ACTIVE,
    text: "Vous faites parfois des exercices physiques (1 à 3 fois par semaine)",
  },
  {
    value: ActivityLevelEnum.ACTIVE,
    text: "Vous faites régulièrement des exercices physiques (3 à 5 fois par semaine)",
  },
  {
    value: ActivityLevelEnum.VERY_ACTIVE,
    text: "Vous faites quotidiennement du sport ou des exercices physiques soutenus",
  },
  {
    value: ActivityLevelEnum.EXTREMELY_ACTIVE,
    text: "Votre travail est extrêmement physique ou bien vous vous considérez comme un grand sportif",
  },
];
