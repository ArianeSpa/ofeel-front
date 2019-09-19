import React from 'react';
import { 
  Grid, Header, Segment, Form, Checkbox, Label, Dropdown,
} from 'semantic-ui-react';

import './mealplan.scss';
import MessageCheat from 'src/components/Page/Dashboard/MealPlan/MessageCheat';
import MessageSnack from 'src/components/Page/Dashboard/MealPlan/MessageSnack';
import { setProteinQuantity, setFatQuantity, setSugarQuantity } from 'src/utils/setQuantity';
import { setProteinType, setGlucidType, setLipidType } from 'src/utils/setFoodType';


const MealPlan = ({
  changeFoodValue,
  proteinebreakfast, proteinelunch, proteinedinner, proteinesnack,
  lipidebreakfast, lipidelunch, lipidedinner,
  glucidebreakfast, glucidelunch, glucidedinner, glucidesnack,
  changeCheckValue,
  breakfastcheck, lunchcheck, dinnercheck, snackcheck,
  datafood,
}) => {

  const handleValueFoodtype = (event, data) => {
    changeFoodValue(data.value, data.id);
  }

  const handleCheck = (event, data) => {
    changeCheckValue(data.id);
  }

  const proteinType = setProteinType(datafood);
  const glucideType = setGlucidType(datafood);
  const lipideType = setLipidType(datafood);


  console.log(lipideType);

  // const glucideType = [];
  // const lipideType = [];

  // datafood.map((food)=> {
  //   // if(food.type === 'proteine'){
  //   //   proteinType.push({
  //   //     key: food.id,
  //   //     text: food.name,
  //   //     value: food.name
  //   //   })
  //   //  if(food.type === 'glucide'){
  //   //   glucideType.push({
  //   //     key: food.id,
  //   //     text: food.name,
  //   //     value: food.name
  //   //   })
  //    if(food.type === 'lipide'){
  //     lipideType.push({
  //       key: food.id,
  //       text: food.name,
  //       value: food.name
  //     })
  //   }
  // });

  return(
     <Grid className="mealGrid" columns='equal'>
      <Grid.Row className="bothRow meals">
        
        {/* COLONNE PETIT DEJEUNER */}
        <Grid.Column className="tricol bfst">
          <Segment className="cssSegment">
              <Header as="h4">Petit déjeuner</Header>
              <Checkbox
              className="cheat"
              toggle
              id="breakfastcheck"
              label="Cheat Meal"
              onChange={handleCheck}
              checked={breakfastcheck}
              />
          </Segment>

          {!breakfastcheck && (
           <Form inverted className="bfstForm cssForm">        
            <Form.Group className="prForm cssField">
              <Label className="cssLabel">{setProteinQuantity(proteinebreakfast)}</Label>
              <Dropdown
                fluid                    
                selection
                options={proteinType}
                id="proteinebreakfast"
                onChange={handleValueFoodtype}
                value={proteinebreakfast}

              />
            </Form.Group>
            <Form.Group className="lbForm cssField">
              <Label className="cssLabel">{setFatQuantity(lipidebreakfast)}</Label>
                <Dropdown
                  fluid
                  selection
                  options={lipideType}
                  id="lipidebreakfast"
                  className="bflb"
                  onChange={handleValueFoodtype}
                  value={lipidebreakfast}
                />
            </Form.Group>
            <Form.Group className="glForm cssField">
              <Label className="cssLabel">{setSugarQuantity(glucidebreakfast)}</Label>
              <Dropdown
                fluid
                selection
                options={glucideType}
                className="bfgl"
                id="glucidebreakfast"
                onChange={handleValueFoodtype}
                value={glucidebreakfast}
              />
            </Form.Group>
            <div className="fruit">+ 1 à 2 fruit(s)</div>
          </Form>
          )}
          {breakfastcheck && <MessageCheat/>}
        </Grid.Column>


        {/* COLONNE LUNCH */}
        <Grid.Column className="tricol lch">
          <Segment className="cssSegment">
              <Header as="h4">Déjeuner</Header>
              <Checkbox
              className="cheat"
              toggle
              id="lunchcheck"
              label="Cheat Meal"
              onChange={handleCheck}
              checked={lunchcheck}
              />
          </Segment>
          
          {!lunchcheck && (
          <Form inverted className="lnchForm cssForm">        
            <Form.Group className="prForm cssField">
              <Label className="cssLabel">{setProteinQuantity(proteinelunch)}</Label>
              <Dropdown
                fluid                    
                selection
                options={proteinType}
                className="lnpr"
                id="proteinelunch"
                onChange={handleValueFoodtype}
                value={proteinelunch}
              />
            </Form.Group>
            <Form.Group className="lbForm cssField">
              <Label className="cssLabel">{setFatQuantity(lipidelunch)}</Label>
                <Dropdown
                  fluid
                  selection
                  options={lipideType}
                  className="lnlb"
                  id="lipidelunch"
                  onChange={handleValueFoodtype}
                  value={lipidelunch}
                />
            </Form.Group>
            <Form.Group className="glForm cssField">
              <Label className="cssLabel">{setSugarQuantity(glucidelunch)}</Label>
              <Dropdown
                fluid
                selection
                options={glucideType}
                className="lngl"
                id="glucidelunch"
                onChange={handleValueFoodtype}
                value={glucidelunch}
              />
            </Form.Group>
            <div className="fruit">+ 1 à 2 fruit(s)</div>
          </Form>
          )}
          {lunchcheck && <MessageCheat/>}
        </Grid.Column>
        

        {/* COLONNE DINNER */}
        <Grid.Column className="tricol dnr">
          <Segment className="cssSegment">
              <Header as="h4">Diner</Header>
              <Checkbox
              className="cheat"
              toggle
              id="dinnercheck"
              label="Cheat Meal"
              onChange={handleCheck}
              checked={dinnercheck}
              />
          </Segment>
          
          {!dinnercheck && (
          <Form inverted className="bfstForm cssForm">        
            <Form.Group className="prForm cssField">
              <Label className="cssLabel">{setProteinQuantity(proteinedinner)}</Label>
              <Dropdown
                fluid                    
                selection
                options={proteinType}
                className="dnpr"
                id="proteinedinner"
                onChange={handleValueFoodtype}
                value={proteinedinner}
              />
            </Form.Group>
            <Form.Group className="lbForm cssField">
              <Label className="cssLabel">{setFatQuantity(lipidedinner)}</Label>
                <Dropdown
                  fluid
                  selection
                  options={lipideType}
                  className="dnlb"
                  id="lipidedinner"
                  onChange={handleValueFoodtype}
                  value={lipidedinner}
                />
            </Form.Group>
            <Form.Group className="glForm cssField">
              <Label className="cssLabel">{setSugarQuantity(glucidedinner)}</Label>
              <Dropdown
                fluid
                selection
                options={glucideType}
                className="dngl"
                id="glucidedinner"
                onChange={handleValueFoodtype}
                value={glucidedinner}
              />
            </Form.Group>
            <div className="fruit">+ 1 à 2 fruit(s)</div>
          </Form>
          )}
          {dinnercheck && <MessageCheat/>}
        </Grid.Column>
      </Grid.Row>

      
      {/* LIGNE COLLATION */}

      <Grid.Row className="bothRow snack" >
        <Grid.Column className="leftsnackColumn">
          <Segment className="snackSegment">
            <Header as="h4">Collation</Header>
            <Checkbox
              className="cheat"
              toggle
              id="snackcheck"
              label="Je m'entraine !"
              onChange={handleCheck}
              checked={snackcheck}
              />
          </Segment>
        </Grid.Column>
        <Grid.Column className="snackColumn">

          {snackcheck && (
          <Form inverted className="snackForm cssForm">        
            <Form.Group className="prForm cssField snackField">
              <Label className="snackLabel">{setProteinQuantity(proteinesnack)}</Label>
              <Dropdown
                fluid                    
                selection
                options={proteinType}
                className="snpr"
                id="proteinesnack"
                onChange={handleValueFoodtype}
                value={proteinesnack}
              />
            </Form.Group>
            
            <Form.Group className="glForm cssField snackField">
              <Label className="snackLabel">{setSugarQuantity(glucidesnack)}</Label>
              <Dropdown
                fluid
                selection
                options={glucideType}
                className="sngl"
                id="glucidesnack"
                onChange={handleValueFoodtype}
                value={glucidesnack}
              />
            </Form.Group>
            <div className="fruit">+ 1 fruit</div>
          </Form>
          )}
          {!snackcheck && <MessageSnack />}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default MealPlan;
