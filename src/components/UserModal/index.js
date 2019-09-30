// == Import : npm
import React from 'react';
import { Button, Segment, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import profil from 'src/assets/images/profil.png';

// == Import : local
import './modal.scss';

// == Composant
const UserModal = ({
  logout, username,
}) => (
  <Segment className="usermodal">
    <h3>Hello {username} !</h3>
    <img src={profil} alt="" />
    <Form inverted onSubmit={logout}>
      <Button type="submit" className="submit">Deconnexion</Button>
    </Form>
  </Segment>
);


UserModal.propTypes = {
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};
export default UserModal;
