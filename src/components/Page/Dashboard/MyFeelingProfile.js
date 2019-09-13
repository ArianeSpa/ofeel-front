import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

import PropTypes from 'prop-types';


const MyFeelingProfile = ({
  value, text,
}) =>
/*  const handleChange = (event) => {
    // console.log(event.target);
  }; */
  (
    <Form.Field>
      <Radio
        className="choice"
        label={value}
        name="radioGroup"
      />
      <p>{text}</p>
    </Form.Field>
  );
MyFeelingProfile.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default MyFeelingProfile;
