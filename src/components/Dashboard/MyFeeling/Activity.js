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
  <Form.Field className="activityField">
    <Radio
      checked={checkedvalue === value}
      className="activityRadio"
      label={value}
      name="activity"
      onChange={onchange}
      value={value}
    />
    <Popup
      className="activityPopup"
      content={text}
      trigger={<Icon name="question circle outline" className="information" />}
    />
  </Form.Field>
);

MyFeelingProfile.propTypes = {
  checkedvalue: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default MyFeelingProfile;
