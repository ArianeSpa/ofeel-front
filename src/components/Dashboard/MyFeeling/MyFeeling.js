// == Import : npm
import React from 'react';
import {
  Header, Segment, Form, Checkbox, Dropdown, Button, Label,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './myfeeling.scss';
import MyFeelingProfile from 'src/components/Dashboard/MyFeeling/MyFeelingProfile';
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
    <Segment inverted className="dashboard-feeling">
      <Header className="subtitle-feeling" as="h4">Parlons un peu de vous!</Header>
      <Form className="gender">
        <Form.Field className="label">
          <Checkbox
            value="homme"
            radio
            label="Homme"
            name="gender"
            id="homme"
            checked={gender === 'homme'}
            onChange={handleChangeProfil}
          />
        </Form.Field>
        <Form.Field className="label">
          <Checkbox
            value="femme"
            radio
            label="Femme"
            name="gender"
            id="femme"
            checked={gender === 'femme'}
            onChange={handleChangeProfil}
          />
        </Form.Field>
      </Form>
      <Form className="listMyFeeling">
        <Form.Group>
          <Label className="cssLabel ageLabel">Âge</Label>
          <Dropdown
            id="age"
            name="age"
            value={age}
            label="age"
            placeholder="Age"
            options={ageGenerator()}
            selection
            onChange={handleChangeProfil}
          />
        </Form.Group>

        <Form.Group>
          <Label className="cssLabel tailleLabel">Taille</Label>
          <Dropdown
            id="taille"
            name="taille"
            value={taille}
            placeholder="Taille"
            options={heightGenerator()}
            selection
            onChange={handleChangeProfil}
          />
        </Form.Group>

        <Form.Group>
          <Label className="cssLabel tailleLabel">Poids</Label>
          <Dropdown
            id="poids"
            name="poids"
            value={poids}
            placeholder="Poids"
            options={weightGenerator()}
            selection
            onChange={handleChangeProfil}
          />
        </Form.Group>
      </Form>
      <Header className="subtitle-feeling" as="h4"> Votre profil d'activité physique</Header>
      <Form className="choixProfil">
        <Form.Field className="field-profil">
          {activityTable.map((currentProfil) => (
            <MyFeelingProfile
              key={currentProfil.id}
              value={currentProfil.value}
              text={currentProfil.text}
              onchange={handleChangeProfil}
              checkedvalue={activity}
            />
          ))}
        </Form.Field>
      </Form>
      {savedPreference === 'saved' && <SavedModal content="vos données ont bien été enregistrées" positive error={false} />}
      {savedPreference === 'notsaved' && <SavedModal content="une erreur s'est produite, vos données ne seront pas enregistrées après déconnexion" positive={false} error />}
      <Button className="save" type="submit" onClick={calculAndSend}>Enregistrer</Button>
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
