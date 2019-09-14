import React from 'react';
import { 
  Grid, Header, Segment, Form, Checkbox, Label, Dropdown,
} from 'semantic-ui-react';

import './mealplan.scss'


const MealPlan = () => (
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
                id="proteinebreakfast"
              />
            </Form.Group>
            <Form.Group className="lbForm cssField">
              <Label className="cssLabel">30gr</Label>
                <Dropdown
                  fluid
                  selection
                  id="lipidebreakfast"
                  className="bflb"
                />
            </Form.Group>
            <Form.Group className="glForm cssField">
              <Label className="cssLabel">30gr</Label>
              <Dropdown
                fluid
                selection
                className="bfgl"
                id="glucidebreakfast"
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
                className="lnpr"
                id="proteinelunch"
              />
            </Form.Group>
            <Form.Group className="lbForm cssField">
              <Label className="cssLabel">30gr</Label>
                <Dropdown
                  fluid
                  selection
                  className="lnlb"
                  id="lipidelunch"
                />
            </Form.Group>
            <Form.Group className="glForm cssField">
              <Label className="cssLabel">30gr</Label>
              <Dropdown
                fluid
                selection
                className="lngl"
                id="glucidelunch"
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
                className="dnpr"
                id="proteinedinner"
              />
            </Form.Group>
            <Form.Group className="lbForm cssField">
              <Label className="cssLabel">30gr</Label>
                <Dropdown
                  fluid
                  selection
                  className="dnlb"
                  id="lipidedinner"
                />
            </Form.Group>
            <Form.Group className="glForm cssField">
              <Label className="cssLabel">30gr</Label>
              <Dropdown
                fluid
                selection
                className="dngl"
                id="glucidedinner"
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
                className="snpr"
                id="proteinesnack"
              />
            </Form.Group>
            
            <Form.Group className="glForm cssField snackField">
              <Label className="snackLabel">30gr</Label>
              <Dropdown
                fluid
                selection
                className="sngl"
                id="glucidesnack"
              />
            </Form.Group>
            <div className="fruit">+ 1 fruit</div>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);

export default MealPlan;
