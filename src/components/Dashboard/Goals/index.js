// == Import : npm
import React from 'react';
import {
  Header, Form, Radio, Checkbox, Button, Image, Segment,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './goals.scss';
import setProportion from 'src/utils/setProportion';
import iconMuscle from 'src/assets/icon/biceps3.png';
import iconBalance from 'src/assets/icon/balance.png';
import iconSalad from 'src/assets/icon/salade.png';
import iconLactose from 'src/assets/icon/lactose.png';
import iconGluten from 'src/assets/icon/gluten.png';
import iconNutrition from 'src/assets/icon/nutrition.png';
import SavedModal from 'src/containers/Dashboard/SavedModal';


// == Composant
const Goals = ({
  changeGoal, goal,
  selectRegime, sanslactose, sansgluten, vegan,
  sendToAPI, cal_jour, savePropMeal, sortFood, savedPreference,
}) => {
  const handleChangeGoal = (event) => {
    const { id } = event.target;
    changeGoal(id);
  };
  const handleChangeRegime = (event, data) => {
    selectRegime(data.id, data.checked);
  };

  const calculAndSend = () => {
    savePropMeal(
      setProportion(goal, cal_jour),
    );
    sendToAPI();
    sortFood(sanslactose, sansgluten, vegan);
  };

  return (
    <Segment inverted className="goalSegment">
      <Form className="goalForm">
        <Header className="goalSubtitle" as="h3">Votre objectif</Header>
        <Form.Group className="goalGroup">
          <Form.Field className="weightLostField goalField">
            <Radio
              className="goalRadio"
              id="perte-de-poids"
              label="Perdre du poids"
              name="radioGroup"
              onChange={handleChangeGoal}
              checked={goal === 'perte-de-poids'}
            />
            <Image
              className="icon"
              src={iconBalance}
            />
          </Form.Field>
          <Form.Field className="muscleGainField goalField">
            <Radio
              className="goalRadio"
              id="prise-de-masse"
              label="Prendre de la masse musculaire"
              name="radioGroup"
              onChange={handleChangeGoal}
              checked={goal === 'prise-de-masse'}

            />
            <Image
              className="icon"
              src={iconMuscle}
            />
          </Form.Field>
          <Form.Field className="balanceField goalField">
            <Radio
              className="goalRadio"
              id="remise-en-forme"
              label="Nutrition équilibrée"
              name="radioGroup"
              onChange={handleChangeGoal}
              checked={goal === 'remise-en-forme'}
            />
            <Image
              className="icon"
              src={iconNutrition}
            />
          </Form.Field>
        </Form.Group>
        <Header className="goalSubtitle" as="h3">Vos préférences alimentaires</Header>
        <Form.Group className="foodPrefGroup">
          <Form.Field className="foodPrefField">
            <Checkbox
              id="sanslactose"
              className="foodPrefCheckbox"
              label="Sans lactose"
              onChange={handleChangeRegime}
              checked={sanslactose}
            />
            <Image
              className="icon"
              src={iconLactose}
            />
          </Form.Field>
          <Form.Field className="foodPrefField">
            <Checkbox
              id="sansgluten"
              className="foodPrefCheckbox"
              label="Sans gluten"
              onChange={handleChangeRegime}
              checked={sansgluten}
            />
            <Image
              className="icon"
              src={iconGluten}
            />
          </Form.Field>
          <Form.Field className="foodPrefField">
            <Checkbox
              id="vegan"
              className="foodPrefCheckbox"
              label="Vegan"
              onChange={handleChangeRegime}
              checked={vegan}
            />
            <Image
              className="icon"
              src={iconSalad}
            />
          </Form.Field>
        </Form.Group>
      </Form>
      {savedPreference === 'saved' && <SavedModal content="vos données ont bien été enregistrées" positive error={false} />}
      {savedPreference === 'notsaved' && <SavedModal content="une erreur s'est produite, vos données ne seront pas enregistrées après déconnexion" positive={false} error />}

      <Button className="goalButton" type="submit" onClick={calculAndSend}>Enregistrer</Button>
    </Segment>
  );
};

Goals.propTypes = {
  changeGoal: PropTypes.func.isRequired,
  goal: PropTypes.string.isRequired,
  selectRegime: PropTypes.func.isRequired,
  sanslactose: PropTypes.bool.isRequired,
  sansgluten: PropTypes.bool.isRequired,
  vegan: PropTypes.bool.isRequired,
  sendToAPI: PropTypes.func.isRequired,
  savePropMeal: PropTypes.func.isRequired,
  cal_jour: PropTypes.number.isRequired,
  sortFood: PropTypes.func.isRequired,
  savedPreference: PropTypes.string.isRequired,
};


export default Goals;
