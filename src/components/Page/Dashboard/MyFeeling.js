import React from 'react';
import {
  Header, Segment, Form, Checkbox, Menu, Dropdown,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './myfeeling.scss';

// datas
import age from 'src/datas/MyFeeling/age';
import poids from 'src/datas/MyFeeling/poids';
import taille from 'src/datas/MyFeeling/taille';

import MyFeelingProfile from 'src/containers/Dashboard/MyFeelingProfile';

const MyFeeling = ({
  gender, changeGender, profiles,
}) => {
  const handleChangeGender = (event) => {
    const { id } = (event.target);
    changeGender(id);
  };
  /* const handleChangeProfil = (event) => {
    console.log(event.target);
  }; */
  return (
    <Segment inverted className="dashboard-feeling">
      <Header className="subtitle-feeling" as="h4">Parlons un peu de vous!</Header>
      <Form className="gender">
        <Form.Field className="label">
          <Checkbox
            radio
            label="Homme"
            name="checkboxRadioGroup"
            id="homme"
            checked={gender === 'homme'}
            onChange={handleChangeGender}
          />
        </Form.Field>
        <Form.Field className="label">
          <Checkbox
            radio
            label="Femme"
            name="checkboxRadioGroup"
            id="femme"
            checked={gender === 'femme'}
            onChange={handleChangeGender}
          />
        </Form.Field>
      </Form>
      <Menu className="listMyFeeling" compact>
        <Dropdown
          placeholder="Age"
          options={age}
          selection
        />
        <Dropdown
          placeholder="Taille"
          options={taille}
          selection
        />
        <Dropdown
          placeholder="Poids"
          options={poids}
          selection
        />
      </Menu>
      <Header className="subtitle-feeling" as="h4"> Votre profil d'activité physique</Header>
      <Form className="choixProfil">
        <Form.Field>
          {profiles.map((currentProfil) => (
            <MyFeelingProfile
              key={currentProfil.id}
              value={currentProfil.value}
              text={currentProfil.text}
            />
          ))}
        </Form.Field>
      </Form>
    </Segment>
  );
};

MyFeeling.propTypes = {
  gender: PropTypes.string.isRequired,
  changeGender: PropTypes.func.isRequired,
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default MyFeeling;
