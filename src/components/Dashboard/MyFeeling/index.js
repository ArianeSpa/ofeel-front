// == Import : npm
import React from 'react';
import {
  Header, Segment, Form, Checkbox, Dropdown, Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './myfeeling.scss';
import Activity from 'src/components/Dashboard/MyFeeling/Activity';
import setMetabAndCal from 'src/utils/setMetabAndCal';
import {
  ageGenerator, heightGenerator, weightGenerator, activityTable,
} from 'src/datas/myfeeling';
import SavedModal from 'src/containers/Dashboard/SavedModal';


// == Composant
const MyFeeling = ({
  gender, poids, age, taille, changeProfil, activity, sendToAPI, saveMetaboCalorie, savedPreference,
}) => {
  const handleChangeProfil = (event, data) => {
    changeProfil(data.name, data.value);
  };

  const calculAndSend = () => {
    saveMetaboCalorie(
      setMetabAndCal(gender, poids, taille, age, activity),
    );
    sendToAPI();
  };

  return (
    <Segment inverted id="myfeelingSegment">
      <Form id="myfeelingForm">
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
            onChange={handleChangeProfil}
            options={ageGenerator()}
            selection
            text={`Age : ${age} ans`}
            value={age}
          />
          <Dropdown
            id="taille"
            className="ageheightweightDropdown"
            name="taille"
            onChange={handleChangeProfil}
            options={heightGenerator()}
            selection
            text={`Taille : ${taille} cm`}
            value={taille}
          />
          <Dropdown
            id="poids"
            className="ageheightweightDropdown"
            name="poids"
            onChange={handleChangeProfil}
            options={weightGenerator()}
            selection
            text={`Poids : ${poids} kg`}
            value={poids}
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
      </Form>
      {savedPreference === 'saved' && (
        <SavedModal
          content="vos données ont bien été enregistrées"
          error={false}
          positive
        />
      )}
      {savedPreference === 'notsaved' && (
        <SavedModal
          content="une erreur s'est produite, vos données ne seront pas enregistrées après déconnexion"
          error
          positive={false}
        />
      )}
      <Button
        id="myfeelingButton"
        onClick={calculAndSend}
        type="submit"
      >
        Enregistrer
      </Button>
    </Segment>
  );
};

MyFeeling.propTypes = {
  activity: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changeProfil: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
  poids: PropTypes.number.isRequired,
  savedPreference: PropTypes.string.isRequired,
  saveMetaboCalorie: PropTypes.func.isRequired,
  sendToAPI: PropTypes.func.isRequired,
  taille: PropTypes.number.isRequired,
};
export default MyFeeling;
