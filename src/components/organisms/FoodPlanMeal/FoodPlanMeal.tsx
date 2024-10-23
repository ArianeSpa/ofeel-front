// == Import : npm
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Grid,
  Header,
  Segment,
  Form,
  Checkbox,
  Label,
  Dropdown,
  DropdownProps,
} from "semantic-ui-react";

// == Import : local
import { FoodPlanMessageCheat } from "@/components/organisms/FoodPlanMessage/FoodPlanMessageCheat";
import { glType, lpType, prType } from "@/datas/food";
import { datafood } from "@/datas/datafood";
import {
  CarbEnum,
  FatEnum,
  FoodChoiceEnum,
  ProtEnum,
} from "@/models/food.model";
import {
  setCarbQuantityFood,
  setFatQuantityFood,
  setProtQuantityFood,
} from "@/utils/setQuantities";
import "./foodplan.scss";

type FoodPlanMealProps = {
  carbQuantity: number;
  fatQuantity: number;
  protQuantity: number;
  header: string;
  meal: string;
};

export const FoodPlanMeal: React.FC<FoodPlanMealProps> = ({
  meal,
  header,
  protQuantity,
  fatQuantity,
  carbQuantity,
}) => {
  const [cheat, setCheat] = useState(false);
  const [proteine, setProteine] = useState<FoodChoiceEnum>(ProtEnum.EGG);
  const [carbohydrate, setCarbohydrate] = useState<FoodChoiceEnum>(
    CarbEnum.BREAD
  );
  const [fat, setFat] = useState<FoodChoiceEnum>(FatEnum.ALMOND);

  const [carbDisplay, setCarbDisplay] = useState<string>();
  const [proteinFromCarb, setProteinFromCarb] = useState<number>();

  const [fatDisplay, setFatDisplay] = useState<string>();
  const [proteinFromLip, setProteinFromLip] = useState<number>();

  const [protDisplay, setProtDisplay] = useState<string>();

  const { t } = useTranslation();

  useEffect(() => {
    const { quantityFood, protFromCarb } = setCarbQuantityFood(
      datafood,
      carbohydrate,
      carbQuantity
    );
    setCarbDisplay(quantityFood);
    setProteinFromCarb(protFromCarb);
  }, [carbohydrate]);

  useEffect(() => {
    const { quantityFood, protFromLip } = setFatQuantityFood(
      datafood,
      fat,
      fatQuantity
    );
    setFatDisplay(quantityFood);
    setProteinFromLip(protFromLip);
  }, [fat]);

  useEffect(() => {
    if (proteinFromCarb && proteinFromLip) {
      const prot = setProtQuantityFood(
        datafood,
        proteine,
        protQuantity,
        proteinFromLip,
        proteinFromCarb
      );
      setProtDisplay(prot);
    }
  }, [proteine, proteinFromLip, proteinFromCarb]);

  const handleProtein = (
    _event: SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    setProteine(data.value as ProtEnum);
  };

  const handleCarb = (
    _event: SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    setCarbohydrate(data.value as CarbEnum);
  };

  const handleFat = (
    _event: SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    setFat(data.value as FatEnum);
  };

  return (
    <Grid.Column className="oneMealColumn" id={`${meal}Column`}>
      <Segment className="oneMealSegment">
        <Header className="oneMealHeader" as="h4">
          {header}
        </Header>
        <Checkbox
          checked={cheat}
          className="cheatmealCheckbox"
          label="Cheat Meal"
          onChange={() => setCheat(!cheat)}
          toggle
        />
      </Segment>

      {!cheat && (
        <Form inverted className="oneMealForm">
          <Form.Group className="mealFields">
            <Label className="mealLabel">{proteine}</Label>
            <Dropdown
              fluid
              selection
              className="foodDropdown"
              id={`proteine${meal}`}
              text={protDisplay}
              value={proteine}
              options={prType}
              disabled={!carbohydrate || !fat}
              onChange={handleProtein}
            />
          </Form.Group>
          <Form.Group className="mealFields">
            <Label className="mealLabel">{fat}</Label>
            <Dropdown
              fluid
              selection
              className="foodDropdown"
              id={`lipide${meal}`}
              text={fatDisplay}
              value={fat}
              options={lpType}
              onChange={handleFat}
            />
          </Form.Group>
          <Form.Group className="mealFields">
            <Label className="mealLabel">{carbohydrate}</Label>
            <Dropdown
              fluid
              selection
              className="foodDropdown"
              id={`glucide${meal}`}
              text={carbDisplay}
              value={carbohydrate}
              options={glType}
              onChange={handleCarb}
            />
          </Form.Group>
          <div className="mealVegAndFruit">
            {t("PAGES.DASHBOARD.MEAL.VEGETABLES_PLUS_FRUITS")}
          </div>
        </Form>
      )}
      {cheat && <FoodPlanMessageCheat />}
    </Grid.Column>
  );
};
