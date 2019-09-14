import React from 'react';
import { 
  Grid, Header, Segment, Form, Checkbox, Label, Dropdown,
} from 'semantic-ui-react';

import './mealplan.scss';
import { prType, lpType, glType } from 'src/datas/food';



const MealPlan = ({
  changeFoodValue,
  proteinebreakfast, proteinelunch, proteinedinner, proteinesnack,
  lipidebreakfast, lipidelunch, lipidedinner,
  glucidebreakfast, glucidelunch, glucidedinner, glucidesnack,

}) => {

  const handleValueFoodtype = (event) => {
    const {textContent} = event.target;
    let parent=event.target.parentNode;
    while(!parent.className.includes("dropdown")){
      parent = parent.parentNode
    }
    const id = parent.id;
    changeFoodValue(textContent, id);
  }


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
              />
          </Segment>
          
          <Form inverted className="bfstForm cssForm">        
            <Form.Group className="prForm cssField">
              <Label className="cssLabel">30gr
              </Label>
              <Dropdown
                fluid                    
                selection
                options={prType}
                id="proteinebreakfast"
                onChange={handleValueFoodtype}
                value={proteinebreakfast}

              />
            </Form.Group>
            <Form.Group className="lbForm cssField">
              <Label className="cssLabel">30gr</Label>
                <Dropdown
                  fluid
                  selection
                  options={lpType}
                  id="lipidebreakfast"
                  className="bflb"
                  onChange={handleValueFoodtype}
                  value={lipidebreakfast}
                />
            </Form.Group>
            <Form.Group className="glForm cssField">
              <Label className="cssLabel">30gr</Label>
              <Dropdown
                fluid
                selection
                options={glType}
                className="bfgl"
                id="glucidebreakfast"
                onChange={handleValueFoodtype}
                value={glucidebreakfast}
              />
            </Form.Group>
            <div className="fruit">+ 1 à 2 fruit(s)</div>
          </Form>
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
              />
          </Segment>
          
          <Form inverted className="lnchForm cssForm">        
            <Form.Group className="prForm cssField">
              <Label className="cssLabel">30gr
              </Label>
              <Dropdown
                fluid                    
                selection
                options={prType}
                className="lnpr"
                id="proteinelunch"
                onChange={handleValueFoodtype}
                value={proteinelunch}
              />
            </Form.Group>
            <Form.Group className="lbForm cssField">
              <Label className="cssLabel">30gr</Label>
                <Dropdown
                  fluid
                  selection
                  options={lpType}
                  className="lnlb"
                  id="lipidelunch"
                  onChange={handleValueFoodtype}
                  value={lipidelunch}
                />
            </Form.Group>
            <Form.Group className="glForm cssField">
              <Label className="cssLabel">30gr</Label>
              <Dropdown
                fluid
                selection
                options={glType}
                className="lngl"
                id="glucidelunch"
                onChange={handleValueFoodtype}
                value={glucidelunch}
              />
            </Form.Group>
            <div className="fruit">+ 1 à 2 fruit(s)</div>
          </Form>
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
              />
          </Segment>
          
          <Form inverted className="bfstForm cssForm">        
            <Form.Group className="prForm cssField">
              <Label className="cssLabel">30gr
              </Label>
              <Dropdown
                fluid                    
                selection
                options={prType}
                className="dnpr"
                id="proteinedinner"
                onChange={handleValueFoodtype}
                value={proteinedinner}
              />
            </Form.Group>
            <Form.Group className="lbForm cssField">
              <Label className="cssLabel">30gr</Label>
                <Dropdown
                  fluid
                  selection
                  options={lpType}
                  className="dnlb"
                  id="lipidedinner"
                  onChange={handleValueFoodtype}
                  value={lipidedinner}
                />
            </Form.Group>
            <Form.Group className="glForm cssField">
              <Label className="cssLabel">30gr</Label>
              <Dropdown
                fluid
                selection
                options={glType}
                className="dngl"
                id="glucidedinner"
                onChange={handleValueFoodtype}
                value={glucidedinner}
              />
            </Form.Group>
            <div className="fruit">+ 1 à 2 fruit(s)</div>
          </Form>
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
              />
          </Segment>
        </Grid.Column>
        <Grid.Column className="snackColumn">


          <Form inverted className="snackForm cssForm">        
            <Form.Group className="prForm cssField snackField">
              <Label className="snackLabel">30gr
              </Label>
              <Dropdown
                fluid                    
                selection
                options={prType}
                className="snpr"
                id="proteinesnack"
                onChange={handleValueFoodtype}
                value={proteinesnack}
              />
            </Form.Group>
            
            <Form.Group className="glForm cssField snackField">
              <Label className="snackLabel">30gr</Label>
              <Dropdown
                fluid
                selection
                options={glType}
                className="sngl"
                id="glucidesnack"
                onChange={handleValueFoodtype}
                value={glucidesnack}
              />
            </Form.Group>
            <div className="fruit">+ 1 fruit</div>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default MealPlan;
