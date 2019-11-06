// == Import : npm
import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './modal.scss';

// == Composant
const UserModal = ({ logout }) => (
  <Button
    onClick={logout}
    type="submit"
    id="disconnect"
  >
    Deconnexion
  </Button>
);


UserModal.propTypes = {
  logout: PropTypes.func.isRequired,
};
export default UserModal;
