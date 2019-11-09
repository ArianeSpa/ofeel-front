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
}) => {
  const handleChangeProfil = (event, data) => {
    changeProfil(data.name, data.value);
  };
  const calculAndSend = () => {
    const metabAndCal = setMetabAndCal(gender, weight, height, age, activity);
    saveMetaboCalorie(metabAndCal);
    sendToAPI();
  };

  return (
    <Segment inverted id="myfeelingSegment">
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
  gender: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  savedPreference: PropTypes.string.isRequired,
  saveMetaboCalorie: PropTypes.func.isRequired,
  sendToAPI: PropTypes.func.isRequired,
  weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default MyFeeling;
