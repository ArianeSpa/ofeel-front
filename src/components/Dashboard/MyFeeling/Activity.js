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
      className="activityRadio"
      label={value}
      name="activity"
      value={value}
      onChange={onchange}
      checked={checkedvalue === value}
    />
    <Popup
      content={text}
      className="activityPopup"
      trigger={<Icon name="question circle outline" className="information" />}
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
