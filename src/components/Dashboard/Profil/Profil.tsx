// == Import : npm
import React, { FormEvent, SyntheticEvent } from "react";
import {
  Header,
  Segment,
  Form,
  Checkbox,
  Dropdown,
  Button,
  Container,
  CheckboxProps,
  DropdownProps,
} from "semantic-ui-react";

// == Import : local
import "./profil.scss";
import setMetabAndCal from "@/utils/setMetabAndCal";
import {
  ageGenerator,
  heightGenerator,
  weightGenerator,
  activityTable,
} from "@/datas/myfeeling";
import MessageModal from "@/containers/Dashboard/MessageModal";
import { ProfilActivity } from "./ProfilActivity/ProfilActivity";
import { ActivityLevelModel, GenderModel } from "@/models/profil.model";

type MetaboCal = {
  basalMetabolicRate: number;
  energyExpenditure: number;
};
type ProfilProps = {
  activity: ActivityLevelModel;
  age: number;
  changeProfil: (
    name?: string,
    value?: string | number | boolean | (string | number | boolean)[]
  ) => void;
  clearAllAndInform: (value: string) => void;
  errorMessagesSignup: string[];
  gender: GenderModel;
  height: number;
  resetMessage: () => void;
  savedPreference: string;
  saveMetaboCalorie: (object: MetaboCal) => void;
  sendToAPI: () => void;
  weight: number;
};

// == Composant
export const Profil: React.FC<ProfilProps> = ({
  gender,
  weight,
  age,
  height,
  changeProfil,
  activity,
  sendToAPI,
  saveMetaboCalorie,
  savedPreference,
  clearAllAndInform,
  errorMessagesSignup,
  resetMessage,
}) => {
  const handleChangeProfil = (
    _event: FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    changeProfil(data.name, data.value);
  };

  const handleCheckBox = (
    _event: FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    changeProfil(data.name, data.value);
  };

  const handleDropdown = (
    event: SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    changeProfil(data.name, data.value);
  };

  const calculAndSend = () => {
    const messageInfo =
      "Même si les informations que vous avez complétées ont été correctement enregistrées dans notre base de données, les informations manquantes nous empêchent de vous fournir un plan alimentaire adapté à votre profil. Vous devez compléter tous les champs";

    if (
      !gender ||
      Number.isNaN(age) ||
      Number.isNaN(height) ||
      Number.isNaN(weight) ||
      !activity
    ) {
      clearAllAndInform(messageInfo);
    } else {
      resetMessage();
    }

    const metabAndCal: MetaboCal = setMetabAndCal(
      gender,
      weight,
      height,
      age,
      activity
    );
    saveMetaboCalorie(metabAndCal);
    sendToAPI();
  };

  return (
    <Segment inverted id="myfeelingSegment">
      <Container id="myfeelingInformation">
        <p>
          {`Afin de pouvoir générer votre plan alimentaire personnalisé, il est
          nécessaire de remplir chacun des champs ci-dessous.`}
        </p>
        <p>
          {`Les premières informations servent à mesurer votre métabolisme de
          base.`}
        </p>
        <p>
          {`Ensuite, en précisant votre profil d'activité, nous pouvons déterminer
          votre dépense calorique journalière.`}
        </p>
      </Container>
      <Form id="myfeelingForm" onSubmit={calculAndSend}>
        <Header className="myfeelingSubtitle" as="h3">
          Parlons un peu de vous!
        </Header>
        <Form.Group id="genderGroup">
          <Form.Field className="genderField">
            <Checkbox
              checked={gender === "homme"}
              className="genderCheckbox"
              id="homme"
              label="Homme"
              name="gender"
              radio
              onChange={handleCheckBox}
              value="homme"
            />
          </Form.Field>
          <Form.Field className="genderField">
            <Checkbox
              checked={gender === "femme"}
              className="genderCheckbox"
              label="Femme"
              id="femme"
              name="gender"
              radio
              onChange={handleCheckBox}
              value="femme"
            />
          </Form.Field>
        </Form.Group>
        <Form.Group id="ageheightweightGroup">
          <Dropdown
            id="age"
            className="ageheightweightDropdown"
            name="age"
            onChange={handleDropdown}
            options={ageGenerator()}
            selection
            text={`Age : ${age} ans`}
            value={age}
          />
          <Dropdown
            id="height"
            className="ageheightweightDropdown"
            name="height"
            onChange={handleDropdown}
            options={heightGenerator()}
            selection
            text={`Taille : ${height} cm`}
            value={height}
          />
          <Dropdown
            id="weight"
            className="ageheightweightDropdown"
            name="weight"
            onChange={handleDropdown}
            options={weightGenerator()}
            selection
            text={`weight : ${weight} kg`}
            value={weight}
          />
        </Form.Group>
        <Header className="myfeelingSubtitle" as="h3">
          {`Votre profil d'activité physique`}
        </Header>
        <Form.Group id="activityGroup">
          {activityTable.map((currentProfil) => (
            <ProfilActivity
              checkedvalue={activity}
              key={currentProfil.id}
              onchange={handleChangeProfil}
              text={currentProfil.text}
              value={currentProfil.value}
            />
          ))}
        </Form.Group>
        <Button id="myfeelingButton" type="submit">
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
          list={errorMessagesSignup}
          content={false}
          error
          positive={false}
        />
      )}
    </Segment>
  );
};
