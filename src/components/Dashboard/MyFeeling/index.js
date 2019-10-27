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
    <Segment inverted className="myfeelingSegment">
      <Form className="myfeelingForm">
        <Header className="myfeelingSubtitle" as="h3">Parlons un peu de vous!</Header>

        <Form.Group className="genderGroup">
          <Form.Field className="genderField">
            <Checkbox
              value="homme"
              radio
              label="Homme"
              name="gender"
              id="homme"
              className="genderCheckbox"
              checked={gender === 'homme'}
              onChange={handleChangeProfil}
            />
          </Form.Field>
          <Form.Field className="genderField">
            <Checkbox
              value="femme"
              radio
              label="Femme"
              name="gender"
              id="femme"
              className="genderCheckbox"
              checked={gender === 'femme'}
              onChange={handleChangeProfil}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group className="ageheightweightGroup">
          <Dropdown
            text={`Age : ${age} ans`}
            id="age"
            className="ageheightweightDropdown"
            name="age"
            value={age}
            options={ageGenerator()}
            selection
            onChange={handleChangeProfil}
          />

          <Dropdown
            text={`Taille : ${taille} cm`}
            id="taille"
            className="ageheightweightDropdown"
            name="taille"
            value={taille}
            options={heightGenerator()}
            selection
            onChange={handleChangeProfil}
          />

          <Dropdown
            text={`Poids : ${poids} kg`}
            id="poids"
            className="ageheightweightDropdown"
            name="poids"
            value={poids}
            options={weightGenerator()}
            selection
            onChange={handleChangeProfil}
          />
        </Form.Group>

        <Header className="myfeelingSubtitle" as="h3"> Votre profil d'activité physique</Header>
        <Form.Group className="activityGroup">
          {/* <Form.Field className="activityFields"> */}
          {activityTable.map((currentProfil) => (
            <Activity
              key={currentProfil.id}
              value={currentProfil.value}
              text={currentProfil.text}
              onchange={handleChangeProfil}
              checkedvalue={activity}
            />
          ))}
          {/* </Form.Field> */}
        </Form.Group>
      </Form>

      {savedPreference === 'saved' && <SavedModal content="vos données ont bien été enregistrées" positive error={false} />}
      {savedPreference === 'notsaved' && <SavedModal content="une erreur s'est produite, vos données ne seront pas enregistrées après déconnexion" positive={false} error />}
      <Button className="save myfeelingButton" type="submit" onClick={calculAndSend}>Enregistrer</Button>
    </Segment>
  );
};

MyFeeling.propTypes = {
  gender: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  taille: PropTypes.number.isRequired,
  poids: PropTypes.number.isRequired,
  changeProfil: PropTypes.func.isRequired,
  activity: PropTypes.string.isRequired,
  sendToAPI: PropTypes.func.isRequired,
  saveMetaboCalorie: PropTypes.func.isRequired,
  savedPreference: PropTypes.string.isRequired,
};
export default MyFeeling;
