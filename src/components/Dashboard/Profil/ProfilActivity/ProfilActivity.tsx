// == Import : npm
import React, { FormEvent } from "react";
import { Form, Radio, Popup, Icon, CheckboxProps } from "semantic-ui-react";

// == Import : local
import "./myfeeling.scss";

type ProfilActivityProps = {
  checkedvalue: string;
  onchange: (_event: FormEvent<HTMLInputElement>, data: CheckboxProps) => void;
  text: string;
  value: string;
};
// == Composant
export const ProfilActivity: React.FC<ProfilActivityProps> = ({
  value,
  text,
  onchange,
  checkedvalue,
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
