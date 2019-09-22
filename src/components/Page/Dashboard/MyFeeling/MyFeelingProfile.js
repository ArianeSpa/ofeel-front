// == Import : npm
import React from 'react';
import {
  Form, Radio, Popup, Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './myfeeling.scss';

// == Composant
const MyFeelingProfile = ({
  value, text, onchange, checkedvalue,
}) => (
  <Form.Field className="field-profil-oneType">
    <Radio
      className="choice-profil"
      label={value}
      name="activity"
      value={value}
      onChange={onchange}
      checked={checkedvalue === value}
    />
    <Popup
      content={text}
      trigger={<Icon color="yellow" name="question circle outline" />}
    />
  </Form.Field>
);

MyFeelingProfile.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  checkedvalue: PropTypes.string.isRequired,
};
export default MyFeelingProfile;
