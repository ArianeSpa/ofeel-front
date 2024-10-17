// == Import : npm
import React, { useState } from "react";
import {
  Grid,
  Header,
  Segment,
  Form,
  Checkbox,
  Label,
  Dropdown,
  GridRow,
  FormGroup,
} from "semantic-ui-react";

// == Import : local
import { FoodPlanMeal } from "@/components/organisms/FoodPlanMeal/FoodPlanMeal";
import { setProteinQuantity, setSugarQuantity } from "@/utils/setQuantity";
import { CarbEnum, ProtEnum } from "@/models/food.model";
import { FoodPlanMessageSnack } from "@/components";
import "./foodplan.scss";

// == Composant
export const FoodPlan: React.FC = () => {
  const [training, settraining] = useState(true);

  const proportion = JSON.parse(localStorage.getItem("proportion") || "{}");
  const {
    breakfastAndDinnerFatQuantity,
    breakfastAndDinnerCarbsQuantity,
    lunchFatQuantity,
    lunchCarbsQuantity,
    lunchProteinQuantity,
    breakfastAndDinnerProteinQuantity,
  } = proportion;

  return (
    <Grid id="mealGrid" columns="equal">
      <Header id="mealplanSubtitle" as="h3">
        Votre plan alimentaire
      </Header>
      <>
        <GridRow id="dailyMealRow">
          {/* COLONNE PETIT DEJEUNER */}
          <FoodPlanMeal
            meal="breakfast"
            header="Petit déjeuner"
            protQuantity={breakfastAndDinnerProteinQuantity}
            fatQuantity={breakfastAndDinnerFatQuantity}
            carbQuantity={breakfastAndDinnerCarbsQuantity}
          />
          {/* COLONNE LUNCH */}
          <FoodPlanMeal
            meal="lunch"
            header="Déjeuner"
            protQuantity={lunchProteinQuantity}
            fatQuantity={lunchFatQuantity}
            carbQuantity={lunchCarbsQuantity}
          />
          {/* COLONNE DINNER */}
          <FoodPlanMeal
            meal="dinner"
            header="Dîner"
            protQuantity={breakfastAndDinnerProteinQuantity}
            fatQuantity={breakfastAndDinnerFatQuantity}
            carbQuantity={breakfastAndDinnerCarbsQuantity}
          />
        </GridRow>

        {/* LIGNE COLLATION */}
        <Grid.Row id="snackRow">
          <Grid.Column id="snackColumn">
            <Segment id="snackSegment">
              <Header as="h4" id="snackHeader">
                Collation
              </Header>
              <Checkbox
                toggle
                id="snackcheck"
                className="cheatmealCheckbox"
                label="Je m'entraine !"
                onChange={() => {
                  settraining(!training);
                }}
                checked={training}
              />
            </Segment>

            {training ? (
              <Form inverted id="snackForm">
                <FormGroup className="mealFields">
                  <Label className="mealLabel">
                    {setProteinQuantity(ProtEnum.YOGURT)}
                  </Label>
                  <Dropdown
                    fluid
                    selection
                    options={[{ label: ProtEnum.YOGURT, key: "snackprot" }]}
                    className="foodDropdown"
                    id="proteinesnack"
                    value={ProtEnum.YOGURT}
                  />
                </FormGroup>

                <FormGroup className="mealFields">
                  <Label className="mealLabel">
                    {setSugarQuantity(CarbEnum.BREAD)}
                  </Label>
                  <Dropdown
                    fluid
                    selection
                    options={[{ label: CarbEnum.BREAD, key: "snackcarb" }]}
                    className="foodDropdown"
                    id="glucidesnack"
                    value={CarbEnum.BREAD}
                  />
                </FormGroup>
                <div className="mealVegAndFruit">+ 1 fruit</div>
              </Form>
            ) : (
              <FoodPlanMessageSnack />
            )}
          </Grid.Column>
        </Grid.Row>
      </>
    </Grid>
  );
};
