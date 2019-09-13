import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

import PropTypes from 'prop-types';

const GoalRadio = ({
  value, text, checked,
}) => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <Form.Field>
      <Radio
        label={text}
        className="choice"
        value={value}
        name="groupe1"
        checked={checked}
        onChange={handleChange}
      />
    </Form.Field>
  );
};
GoalRadio.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default GoalRadio;
