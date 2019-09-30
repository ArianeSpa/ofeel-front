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
    <Segment inverted className="dashboard-goal">
      <Header className="subtitle-goal" as="h4">Vous souhaitez</Header>
      <Form className="choices">
        <Form.Field>
          <Radio
            className="choice"
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
        <Form.Field>
          <Radio
            className="choice"
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
        <Form.Field>
          <Radio
            className="choice"
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
      </Form>
      <Header className="subtitle-goal" as="h4">Vos préférences alimentaires</Header>
      <Form className="choices">
        <Form.Field>
          <Checkbox
            id="sanslactose"
            className="preference-alim"
            label="Sans lactose"
            onChange={handleChangeRegime}
            checked={sanslactose}
          />
          <Image
            className="icon"
            src={iconLactose}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            id="sansgluten"
            className="preference-alim"
            label="Sans gluten"
            onChange={handleChangeRegime}
            checked={sansgluten}
          />
          <Image
            className="icon"
            src={iconGluten}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            id="vegan"
            className="preference-alim"
            label="Vegan"
            onChange={handleChangeRegime}
            checked={vegan}
          />
          <Image
            className="icon"
            src={iconSalad}
          />
        </Form.Field>
      </Form>
      {savedPreference === 'saved' && <SavedModal content="vos données ont bien été enregistrées" positive error={false} />}
      {savedPreference === 'notsaved' && <SavedModal content="une erreur s'est produite, vos données ne seront pas enregistrées après déconnexion" positive={false} error />}

      <Button className="save" type="submit" onClick={calculAndSend}>Enregistrer</Button>
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
