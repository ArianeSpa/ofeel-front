// == Import : npm
import React, { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import {
  Header,
  Segment,
  Form,
  Dropdown,
  Button,
  Container,
  CheckboxProps,
  DropdownProps,
  FormGroup,
  FormField,
  Radio,
} from "semantic-ui-react";

// == Import : local
import {
  ageGenerator,
  heightGenerator,
  weightGenerator,
  activityList,
} from "@/datas/profile";
import { ActivityLevelEnum, GenderEnum } from "@/models/profil.model";
import {
  calculateBasalMetabolism,
  calculateDailyCalories,
} from "@/utils/setMetabAndCal";
import { ProfileActivity } from "./ProfileActivity/ProfileActivity";
import {
  MessageModal,
  ModalConfigEnum,
  ModalConfigModel,
} from "../MessageModal/MessageModal";
import "./profile.scss";

// == Composant
export const Profile: React.FC = () => {
  const [gender, setGender] = useState<GenderEnum>();
  const [age, setAge] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [activity, setActivity] = useState<ActivityLevelEnum>();
  const [metab, setMetab] = useState<number | undefined>();
  const [dailyNeed, setDailyNeed] = useState<number | undefined>();
  const [modalDisplay, setModalDisplay] = useState<
    ModalConfigEnum | undefined
  >();

  useEffect(() => {
    if (gender && age && height && weight) {
      const newMetab = calculateBasalMetabolism({
        gender,
        weight,
        height,
        age,
      });
      setMetab(newMetab);
    } else {
      setMetab(undefined);
      setDailyNeed(undefined);
    }
  }, [gender, age, height, weight]);

  useEffect(() => {
    if (metab && activity) {
      const newDailyNeed = calculateDailyCalories({ metab, activity });
      setDailyNeed(newDailyNeed);
    } else {
      setDailyNeed(undefined);
    }
  }, [metab, activity]);

  const handleGender = (
    _event: FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    setGender(data.value as GenderEnum);
  };

  const handleAge = (
    _event: SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    setAge(Number(data.value));
  };

  const handleHeight = (
    _event: SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    setHeight(Number(data.value));
  };

  const handleWeight = (
    _event: SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    setWeight(Number(data.value));
  };

  const handleActivity = (value: ActivityLevelEnum) => {
    setActivity(value);
  };

  const handleSubmit = () => {
    // Fake submission and success
    localStorage.setItem("gender", JSON.stringify(gender));
    localStorage.setItem("weight", JSON.stringify(weight));
    localStorage.setItem("height", JSON.stringify(height));
    localStorage.setItem("age", JSON.stringify(age));
    localStorage.setItem("activity", JSON.stringify(activity));
    localStorage.setItem("metab", JSON.stringify(metab));
    localStorage.setItem("dailyNeed", JSON.stringify(dailyNeed));
    setModalDisplay(ModalConfigEnum.DATA_SAVED);
  };

  const isFormValid = Boolean(
    gender && weight && height && age && activity && metab && dailyNeed
  );
  return (
    <Segment inverted id="myfeelingSegment">
      <Container id="myfeelingInformation">
        <p>
          Afin de pouvoir générer votre plan alimentaire personnalisé, il est
          nécessaire de remplir chacun des champs ci-dessous.
        </p>
        <p>
          Les premières informations servent à mesurer votre métabolisme de
          base.
        </p>
        <p>
          Ensuite, en précisant votre profil d'activité, nous pouvons déterminer
          votre dépense calorique journalière.
        </p>
      </Container>
      <Form id="myfeelingForm" onSubmit={handleSubmit}>
        <Header className="myfeelingSubtitle" as="h3">
          Parlons un peu de vous!
        </Header>
        <FormGroup id="genderGroup">
          <FormField className="genderField">
            <Radio
              className="genderCheckbox"
              id={GenderEnum.MAN.toLowerCase()}
              label={GenderEnum.MAN}
              value={GenderEnum.MAN}
              checked={gender === GenderEnum.MAN}
              onChange={handleGender}
            />
          </FormField>
          <FormField className="genderField">
            <Radio
              className="genderCheckbox"
              id={GenderEnum.WOMAN.toLowerCase()}
              label={GenderEnum.WOMAN}
              value={GenderEnum.WOMAN}
              checked={gender === GenderEnum.WOMAN}
              onChange={handleGender}
            />
          </FormField>
        </FormGroup>
        <FormGroup id="ageheightweightGroup">
          <Dropdown
            selection
            id="age"
            className="ageheightweightDropdown"
            text={`Age : ${age || "..."} ans`}
            value={age}
            onChange={handleAge}
            options={ageGenerator()}
          />
          <Dropdown
            selection
            id="height"
            className="ageheightweightDropdown"
            text={`Taille : ${height || "..."} cm`}
            value={height}
            onChange={handleHeight}
            options={heightGenerator()}
          />
          <Dropdown
            selection
            id="weight"
            className="ageheightweightDropdown"
            text={`weight : ${weight || "..."} kg`}
            value={weight}
            onChange={handleWeight}
            options={weightGenerator()}
          />
        </FormGroup>
        <Header className="myfeelingSubtitle" as="h3">
          Votre profil d'activité physique
        </Header>
        <Form.Group id="activityGroup">
          {activityList.map((currentProfil) => (
            <ProfileActivity
              key={currentProfil.value}
              selectedValue={activity}
              value={currentProfil.value}
              text={currentProfil.text}
              onChange={handleActivity}
            />
          ))}
        </Form.Group>
        <Button id="myfeelingButton" type="submit" disabled={!isFormValid}>
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
