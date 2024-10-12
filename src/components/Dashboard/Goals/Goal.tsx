// == Import : npm
import React from "react";
import {
  Header,
  Form,
  Radio,
  Checkbox,
  Button,
  Image,
  Segment,
  Container,
  CheckboxProps,
} from "semantic-ui-react";

// == Import : local
import "./goals.scss";
import setProportion from "@/utils/setProportion";
import iconMuscle from "@/assets/icon/biceps3.png";
import iconBalance from "@/assets/icon/balance.png";
import iconSalad from "@/assets/icon/salade.png";
import iconLactose from "@/assets/icon/lactose.png";
import iconGluten from "@/assets/icon/gluten.png";
import iconNutrition from "@/assets/icon/nutrition.png";
import MessageModal from "@/containers/Dashboard/MessageModal";
import { GoalEnum } from "@/models/profil.model";

type GoalProps = {
  energyExpenditure: number;
  changeGoal: (name: any) => {};
  clearAllAndInform: (messageInfo: any) => {};
  errorMessagesSignup: string[];
  goal?: GoalEnum;
  resetMessage: () => {};
  sansgluten: boolean;
  sanslactose: boolean;
  savedPreference: string;
  savePropMeal: (proportion: any) => {};
  selectRegime: (id: any, checked: any) => {};
  sendToAPI: () => {};
  sortFood: (sanslactose: any, sansgluten: any, vegan: any) => {};
  vegan: boolean;
};

// == Composant
export const Goal: React.FC<GoalProps> = ({
  changeGoal,
  goal,
  selectRegime,
  sanslactose,
  sansgluten,
  vegan,
  sendToAPI,
  energyExpenditure,
  savePropMeal,
  sortFood,
  savedPreference,
  clearAllAndInform,
  errorMessagesSignup,
  resetMessage,
}) => {
  const handleChangeGoal = (event: any) => {
    const { name } = event.target;
    changeGoal(name);
  };
  const handleChangeRegime = (
    _event: React.FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    selectRegime(data.id, data.checked);
  };

  const calculAndSend = () => {
    const messageInfo =
      "Même si les informations que vous avez complétées ont été correctement enregistrées dans notre base de données, les informations manquantes nous empêchent de vous fournir un plan alimentaire adapté à votre profil. Vous devez au minimum choisir un objectif";
    if (!goal) {
      clearAllAndInform(messageInfo);
    } else {
      resetMessage();
      const proportion = setProportion(goal, energyExpenditure);
      savePropMeal(proportion);
    }
    sendToAPI();
    sortFood(sanslactose, sansgluten, vegan);
  };

  const desc1 =
    "Afin de pouvoir générer votre plan alimentaire personnalisé, il est nécessaire de sélectionner votre objectif.";

  const desc2 =
    "Cette information permet d'établir vos besoins énergétiques et nutritionnels journaliers.";

  const desc3 =
    "Vous n'êtes pas obligé de spécifier vos préférences alimentaires. Cependant, il vous est conseillé de cocher les cases correspondantes à vos restrictions afin de vous proposer uniquement des aliments que vous pouvez consommer.";

  return (
    <Segment inverted id="goalSegment">
      <Container id="goalInformation">
        <p>{desc1}</p>
        <p>{desc2}</p>
        <p>{desc3}</p>
      </Container>
      <Form id="goalForm" onSubmit={calculAndSend}>
        <Header className="goalSubtitle" as="h3">
          Votre objectif
        </Header>
        <Form.Group id="goalsGroup">
          <Form.Field className="goalField">
            <Radio
              checked={goal === "Perte de poids"}
              className="goalRadio"
              id="perte-de-poids"
              label="Perdre du poids"
              name="Perte de poids"
              onChange={handleChangeGoal}
            />
            <Image className="goalIcon" src={iconBalance} />
          </Form.Field>
          <Form.Field className="goalField">
            <Radio
              checked={goal === "Prise de masse"}
              className="goalRadio"
              id="prise-de-masse"
              label="Prendre de la masse musculaire"
              name="Prise de masse"
              onChange={handleChangeGoal}
            />
            <Image className="goalIcon" src={iconMuscle} />
          </Form.Field>
          <Form.Field className="goalField">
            <Radio
              checked={goal === "Equilibre"}
              className="goalRadio"
              id="remise-en-forme"
              label="Nutrition équilibrée"
              name="Equilibre"
              onChange={handleChangeGoal}
            />
            <Image className="goalIcon" src={iconNutrition} />
          </Form.Field>
        </Form.Group>
        <Header className="goalSubtitle" as="h3">
          Vos préférences alimentaires
        </Header>
        <Form.Group id="foodPrefGroup">
          <Form.Field className="foodPrefField">
            <Checkbox
              checked={sanslactose}
              className="foodPrefCheckbox"
              id="sanslactose"
              label="Sans lactose"
              onChange={handleChangeRegime}
            />
            <Image className="foodPrefIcon" src={iconLactose} />
          </Form.Field>
          <Form.Field className="foodPrefField">
            <Checkbox
              checked={sansgluten}
              className="foodPrefCheckbox"
              id="sansgluten"
              label="Sans gluten"
              onChange={handleChangeRegime}
            />
            <Image className="foodPrefIcon" src={iconGluten} />
          </Form.Field>
          <Form.Field className="foodPrefField">
            <Checkbox
              checked={vegan}
              className="foodPrefCheckbox"
              id="vegan"
              label="Vegan"
              onChange={handleChangeRegime}
            />
            <Image className="foodPrefIcon" src={iconSalad} />
          </Form.Field>
        </Form.Group>
        <Button id="goalButton" type="submit">
          Enregistrer
        </Button>
      </Form>
      {savedPreference === "saved" && (
        <MessageModal
          content="Vos données ont bien été enregistrées"
          error={false}
          list={false}
          positive
        />
      )}
      {savedPreference === "notsaved" && (
        <MessageModal
          content="Une erreur s'est produite, vos données ne seront pas enregistrées après déconnexion"
          error
          list={false}
          positive={false}
        />
      )}
      {errorMessagesSignup.length !== 0 && (
        <MessageModal
          content={false}
          list={errorMessagesSignup}
          error
          positive={false}
        />
      )}
    </Segment>
  );
};
