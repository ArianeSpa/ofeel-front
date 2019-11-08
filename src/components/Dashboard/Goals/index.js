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
import MessageModal from 'src/containers/Dashboard/MessageModal';


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
    <Segment inverted id="goalSegment">
      <Form id="goalForm">
        <Header className="goalSubtitle" as="h3">Votre objectif</Header>
        <Form.Group id="goalsGroup">
          <Form.Field className="goalField">
            <Radio
              checked={goal === 'perte-de-poids'}
              className="goalRadio"
              id="perte-de-poids"
              label="Perdre du poids"
              name="radioGroup"
              onChange={handleChangeGoal}
            />
            <Image
              className="goalIcon"
              src={iconBalance}
            />
          </Form.Field>
          <Form.Field className="goalField">
            <Radio
              checked={goal === 'prise-de-masse'}
              className="goalRadio"
              id="prise-de-masse"
              label="Prendre de la masse musculaire"
              name="radioGroup"
              onChange={handleChangeGoal}
            />
            <Image
              className="goalIcon"
              src={iconMuscle}
            />
          </Form.Field>
          <Form.Field className="goalField">
            <Radio
              checked={goal === 'remise-en-forme'}
              className="goalRadio"
              id="remise-en-forme"
              label="Nutrition équilibrée"
              name="radioGroup"
              onChange={handleChangeGoal}
            />
            <Image
              className="goalIcon"
              src={iconNutrition}
            />
          </Form.Field>
        </Form.Group>
        <Header className="goalSubtitle" as="h3">Vos préférences alimentaires</Header>
        <Form.Group id="foodPrefGroup">
          <Form.Field className="foodPrefField">
            <Checkbox
              checked={sanslactose}
              className="foodPrefCheckbox"
              id="sanslactose"
              label="Sans lactose"
              onChange={handleChangeRegime}
            />
            <Image
              className="foodPrefIcon"
              src={iconLactose}
            />
          </Form.Field>
          <Form.Field className="foodPrefField">
            <Checkbox
              checked={sansgluten}
              className="foodPrefCheckbox"
              id="sansgluten"
              label="Sans gluten"
              onChange={handleChangeRegime}
            />
            <Image
              className="foodPrefIcon"
              src={iconGluten}
            />
          </Form.Field>
          <Form.Field className="foodPrefField">
            <Checkbox
              checked={vegan}
              className="foodPrefCheckbox"
              id="vegan"
              label="Vegan"
              onChange={handleChangeRegime}
            />
            <Image
              className="foodPrefIcon"
              src={iconSalad}
            />
          </Form.Field>
        </Form.Group>
      </Form>
      {savedPreference === 'saved' && (
        <MessageModal
          content="vos données ont bien été enregistrées"
          error={false}
          positive
        />
      )}
      {savedPreference === 'notsaved' && (
        <MessageModal
          content="une erreur s'est produite, vos données ne seront pas enregistrées après déconnexion"
          error
          positive={false}
        />
      )}
      <Button
        className="goalButton"
        onClick={calculAndSend}
        type="submit"
      >
        Enregistrer
      </Button>
    </Segment>
  );
};

Goals.propTypes = {
  cal_jour: PropTypes.number.isRequired,
  changeGoal: PropTypes.func.isRequired,
  goal: PropTypes.string.isRequired,
  sansgluten: PropTypes.bool.isRequired,
  sanslactose: PropTypes.bool.isRequired,
  savedPreference: PropTypes.string.isRequired,
  savePropMeal: PropTypes.func.isRequired,
  selectRegime: PropTypes.func.isRequired,
  sendToAPI: PropTypes.func.isRequired,
  sortFood: PropTypes.func.isRequired,
  vegan: PropTypes.bool.isRequired,
};

export default Goals;
