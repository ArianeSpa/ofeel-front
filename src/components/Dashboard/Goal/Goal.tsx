// == Import : npm
import React, { FormEvent, useState } from "react";
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
  FormGroup,
  FormField,
} from "semantic-ui-react";

// == Import : local
import iconMuscle from "@/assets/icon/biceps3.png";
import iconBalance from "@/assets/icon/balance.png";
import iconSalad from "@/assets/icon/salade.png";
import iconLactose from "@/assets/icon/lactose.png";
import iconGluten from "@/assets/icon/gluten.png";
import iconNutrition from "@/assets/icon/nutrition.png";
import { GoalEnum } from "@/models/profil.model";
import { getProportion } from "@/utils/setProportion";
import {
  MessageModal,
  ModalConfigEnum,
  ModalConfigModel,
} from "../MessageModal/MessageModal";
import "./goal.scss";

// == Composant
export const Goal: React.FC = () => {
  const [goal, setGoal] = useState<GoalEnum>();
  const [glutenFree, setGlutenFree] = useState<boolean>(false);
  const [lactoseFree, setLactoseFree] = useState<boolean>(false);
  const [vegan, setVegan] = useState<boolean>(false);
  const [modalDisplay, setModalDisplay] = useState<
    ModalConfigEnum | undefined
  >();

  const handleGoal = (
    _event: FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    setGoal(data.value as GoalEnum);
  };

  const handleGlutenFree = () => {
    setGlutenFree((state) => !state);
  };

  const handleLactoseFree = () => {
    setLactoseFree((state) => !state);
  };

  const handleVegan = () => {
    setVegan((state) => !state);
  };

  const handleSubmit = () => {
    const dailyCalCost = JSON.parse(
      localStorage.getItem("dailyCalCost") || "0"
    );
    if (dailyCalCost && goal) {
      const proportion = getProportion(goal, dailyCalCost);
      localStorage.setItem("goal", JSON.stringify(goal));
      localStorage.setItem("lactoseFree", JSON.stringify(lactoseFree));
      localStorage.setItem("glutenFree", JSON.stringify(glutenFree));
      localStorage.setItem("vegan", JSON.stringify(vegan));
      localStorage.setItem("proportion", JSON.stringify(proportion));
      return setModalDisplay(ModalConfigEnum.DATA_SAVED);
    }
    setModalDisplay(ModalConfigEnum.DATA_NOT_SAVED);
  };

  return (
    <Segment inverted id="goalSegment">
      <Container id="goalInformation">
        <p>
          "Afin de pouvoir générer votre plan alimentaire personnalisé, il est
          nécessaire de sélectionner votre objectif."
        </p>
        <p>
          "Cette information permet d'établir vos besoins énergétiques et
          nutritionnels journaliers."
        </p>
        <p>
          "Vous n'êtes pas obligé de spécifier vos préférences alimentaires.
          Cependant, il vous est conseillé de cocher les cases correspondantes à
          vos restrictions afin de vous proposer uniquement des aliments que
          vous pouvez consommer."
        </p>
      </Container>
      <Form id="goalForm" onSubmit={handleSubmit}>
        <Header className="goalSubtitle" as="h3">
          Votre objectif
        </Header>
        <FormGroup id="goalsGroup">
          <FormField className="goalField">
            <Radio
              id="perte-de-poids"
              className="goalRadio"
              label={GoalEnum.PP}
              value={GoalEnum.PP}
              checked={goal === GoalEnum.PP}
              onChange={handleGoal}
            />
            <Image className="goalIcon" src={iconBalance} />
          </FormField>
          <Form.Field className="goalField">
            <Radio
              id="prise-de-masse"
              className="goalRadio"
              label={GoalEnum.PM}
              value={GoalEnum.PM}
              checked={goal === GoalEnum.PM}
              onChange={handleGoal}
            />
            <Image className="goalIcon" src={iconMuscle} />
          </Form.Field>
          <Form.Field className="goalField">
            <Radio
              id="remise-en-forme"
              className="goalRadio"
              label={GoalEnum.E}
              value={GoalEnum.E}
              checked={goal === GoalEnum.E}
              onChange={handleGoal}
            />
            <Image className="goalIcon" src={iconNutrition} />
          </Form.Field>
        </FormGroup>
        <Header className="goalSubtitle" as="h3">
          Vos préférences alimentaires
        </Header>
        <Form.Group id="foodPrefGroup">
          <Form.Field className="foodPrefField">
            <Checkbox
              id="sanslactose"
              className="foodPrefCheckbox"
              label="Sans lactose"
              checked={lactoseFree}
              onChange={handleLactoseFree}
            />
            <Image className="foodPrefIcon" src={iconLactose} />
          </Form.Field>
          <Form.Field className="foodPrefField">
            <Checkbox
              id="sansgluten"
              className="foodPrefCheckbox"
              label="Sans gluten"
              checked={glutenFree}
              onChange={handleGlutenFree}
            />
            <Image className="foodPrefIcon" src={iconGluten} />
          </Form.Field>
          <Form.Field className="foodPrefField">
            <Checkbox
              id="vegan"
              className="foodPrefCheckbox"
              label="Vegan"
              checked={vegan}
              onChange={handleVegan}
            />
            <Image className="foodPrefIcon" src={iconSalad} />
          </Form.Field>
        </Form.Group>
        <Button id="goalButton" type="submit" disabled={!goal}>
          Enregistrer
        </Button>
      </Form>
      {modalDisplay && (
        <MessageModal
          content={ModalConfigModel[modalDisplay].message}
          error={ModalConfigModel[modalDisplay].error}
          positive={ModalConfigModel[modalDisplay].positive}
        />
      )}
    </Segment>
  );
};
