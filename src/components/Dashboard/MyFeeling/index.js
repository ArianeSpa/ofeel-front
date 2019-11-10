// == Import : npm
import React from 'react';
import {
  Header, Segment, Form, Checkbox, Dropdown, Button, Container,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './myfeeling.scss';
import Activity from 'src/components/Dashboard/MyFeeling/Activity';
import setMetabAndCal from 'src/utils/setMetabAndCal';
import {
  ageGenerator, heightGenerator, weightGenerator, activityTable,
} from 'src/datas/myfeeling';
import MessageModal from 'src/containers/Dashboard/MessageModal';


// == Composant
const MyFeeling = ({
  gender,
  weight,
  age,
  height,
  changeProfil,
  activity,
  sendToAPI,
  saveMetaboCalorie,
  savedPreference,
  changeMessageList,
  clearMessageList,
  clearAllAndInform,
  errorMessagesSignup,
}) => {
  const handleChangeProfil = (event, data) => {
    changeProfil(data.name, data.value);
  };

  console.log(errorMessagesSignup);

  const checkAge = () => {
    const messageAge = 'Vous n\'avez pas précisé votre age.';
    if (isNaN(age)) {
      changeMessageList(messageAge);
    }
    else {
      clearMessageList(messageAge);
    }
  };

  const checkHeight = () => {
    const messageHeight = 'Vous n\'avez pas précisé votre taille.';
    if (isNaN(height)) {
      changeMessageList(messageHeight);
    }
    else {
      clearMessageList(messageHeight);
    }
  };

  const checkWeight = () => {
    const messageWeight = 'Vous n\'avez pas précisé votre poids.';
    if (isNaN(weight)) {
      changeMessageList(messageWeight);
    }
    else {
      clearMessageList(messageWeight);
    }
  };

  const calculAndSend = () => {
    const messageGender = 'Vous n\'avez pas précisé votre sexe.';
    if (gender === '') {
      changeMessageList(messageGender);
    }
    else {
      clearMessageList(messageGender);
    }

    const messageActivity = 'Vous n\'avez pas précisé votre profil d\'activité.';
    if (activity === '') {
      changeMessageList(messageActivity);
      console.log(activity);
    }
    else {
      clearMessageList(messageActivity);
    }

    const messageInfo = 'Même si les informations que vous avez complétées ont été correctement enregistrées dans notre base de données, les informations manquantes nous empêchent de vous fournir un plan alimentaire adapté à votre profil.';

    if (errorMessagesSignup.length === 1 && errorMessagesSignup.includes(messageInfo)) {
      clearMessageList(messageInfo);
    }
    else if (errorMessagesSignup.length > 0) {
      changeMessageList(messageInfo);
    }

    const metabAndCal = setMetabAndCal(gender, weight, height, age, activity);
    saveMetaboCalorie(metabAndCal);
    sendToAPI();
  };

  return (
    <Segment inverted id="myfeelingSegment">
      <Container id="myfeelingInformation">
        <p>Afin de pouvoir générer votre plan alimentaire personnalisé, il est nécessaire de remplir chacun des champs ci-dessous.</p>
        <p>Les premières informations servent à mesurer votre métabolisme de base.</p>
        <p>Ensuite, en précisant votre profil d'activité, nous pouvons déterminéer votre dépense calorique journalière.</p>
      </Container>
      <Form id="myfeelingForm" onSubmit={calculAndSend}>
        <Header className="myfeelingSubtitle" as="h3">Parlons un peu de vous!</Header>
        <Form.Group id="genderGroup">
          <Form.Field className="genderField">
            <Checkbox
              checked={gender === 'homme'}
              className="genderCheckbox"
              id="homme"
              label="Homme"
              name="gender"
              radio
              onChange={handleChangeProfil}
              value="homme"
            />
          </Form.Field>
          <Form.Field className="genderField">
            <Checkbox
              checked={gender === 'femme'}
              className="genderCheckbox"
              label="Femme"
              id="femme"
              name="gender"
              radio
              onChange={handleChangeProfil}
              value="femme"
            />
          </Form.Field>
        </Form.Group>
        <Form.Group id="ageheightweightGroup">
          <Dropdown
            id="age"
            className="ageheightweightDropdown"
            name="age"
            onBlur={checkAge}
            onChange={handleChangeProfil}
            options={ageGenerator()}
            selection
            text={`Age : ${age} ans`}
            value={age}
          />
          <Dropdown
            id="height"
            className="ageheightweightDropdown"
            name="height"
            onBlur={checkHeight}
            onChange={handleChangeProfil}
            options={heightGenerator()}
            selection
            text={`Taille : ${height} cm`}
            value={height}
          />
          <Dropdown
            id="weight"
            className="ageheightweightDropdown"
            name="weight"
            onBlur={checkWeight}
            onChange={handleChangeProfil}
            options={weightGenerator()}
            selection
            text={`weight : ${weight} kg`}
            value={weight}
          />
        </Form.Group>
        <Header className="myfeelingSubtitle" as="h3"> Votre profil d'activité physique</Header>
        <Form.Group id="activityGroup">
          {activityTable.map((currentProfil) => (
            <Activity
              checkedvalue={activity}
              key={currentProfil.id}
              onchange={handleChangeProfil}
              text={currentProfil.text}
              value={currentProfil.value}
            />
          ))}
        </Form.Group>
        <Button
          id="myfeelingButton"
          type="submit"
        >
          Enregistrer
        </Button>
      </Form>
      {savedPreference === 'saved' && (
        <MessageModal
          content="vos données ont bien été enregistrées"
          error={false}
          positive
        />
      )}
      {savedPreference === 'notsaved' && (
        <MessageModal
          content="une erreur s'est produite, vos données ne seront pas enregistrées après déconnexion"
          error
          positive={false}
        />
      )}
      {errorMessagesSignup.length !== 0 && (
        <MessageModal
          list={errorMessagesSignup}
          error
          positive={false}
        />
      )}
    </Segment>
  );
};

MyFeeling.defaultProps = {
  age: ' - ',
  gender: '',
  height: ' - ',
  weight: ' - ',
};

MyFeeling.propTypes = {
  activity: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  changeProfil: PropTypes.func.isRequired,
  clearMessageList: PropTypes.func.isRequired,
  changeMessageList: PropTypes.func.isRequired,
  clearAllAndInform: PropTypes.func.isRequired,
  errorMessagesSignup: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  gender: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  savedPreference: PropTypes.string.isRequired,
  saveMetaboCalorie: PropTypes.func.isRequired,
  sendToAPI: PropTypes.func.isRequired,
  weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default MyFeeling;
