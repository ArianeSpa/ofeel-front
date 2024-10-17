// == Import : npm
import React from "react";
import { Radio, Popup, Icon, FormField } from "semantic-ui-react";

// == Import : local
import "./profile_activity.scss";
import { ActivityLevelEnum } from "@/models/profil.model";

type ProfileActivityProps = {
  selectedValue?: ActivityLevelEnum;
  onChange: (value: ActivityLevelEnum) => void;
  text: string;
  value: ActivityLevelEnum;
};
// == Composant
export const ProfileActivity: React.FC<ProfileActivityProps> = ({
  value,
  text,
  onChange,
  selectedValue,
}) => {
  const handleChange = () => {
    onChange(value);
  };
  return (
    <FormField className="activityField">
      <Radio
        className="activityRadio"
        label={value}
        value={value}
        checked={selectedValue === value}
        onChange={handleChange}
      />
      <Popup
        className="activityPopup"
        content={text}
        trigger={
          <Icon name="question circle outline" className="information" />
        }
      />
    </FormField>
  );
};
