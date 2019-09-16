import React from 'react';
import { Component } from 'react'
import { Accordion, Icon, Container, Label, Button, Segment, Header } from 'semantic-ui-react';

//import local
import './posts.scss';

export default class PostsList extends Component {


  render() {

    return (
      
      <Container className="globalContainer">
        <Segment className="buttonSort">
            <Button icon><Icon name='book' /></Button>
            <Button icon><Icon name='football ball' /></Button>
            <Button icon><Icon name='heartbeat' /></Button>
            <Button icon><Icon name='food' className="foodSort"/></Button>
            <Button icon><Icon name='boxes' /></Button>
            <Button className="cancelButton">Effacer les filtres</Button>
          </Segment>
        <Container className="postsContainer">
          
          <Accordion fluid styled>
            
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              Salade de chou rouge au pamplemousse
              
              <Label icon="book" content="Recette" className="cssLabelPost"/>
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>

            <Accordion.Title
              index={1}
              className="cssTitle"

            >
              <Icon name='dropdown' />
              Banana bread sans lactose
              <Label icon="book" content="Recette" className="cssLabelPost"
  />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                There are many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find to be
                compatible with their own lifestyle and desires from a companion.
              </p>
            </Accordion.Content>

            <Accordion.Title
              index={2}
              className="cssTitle"

            >
              <Icon name='dropdown' />
              Attaque talon ou avant-pied ?
              <Label icon="football ball" content="Sport" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                Three common ways for a prospective owner to acquire a dog is from
                pet shops, private owners, or shelters.
              </p>
              <p>
                A pet shop may be the most convenient way to buy a dog. Buying a dog
                from a private owner allows you to assess the pedigree and
                upbringing of your dog before choosing to take it home. Lastly,
                finding your dog from a shelter, helps give a good home to a dog who
                may not find one so readily.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              Tout savoir sur le sommeil.
              <Label icon="heartbeat" content="Récupération" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>

            <Accordion.Title
              index={1}
              className="cssTitle"

            >
              <Icon name='dropdown' />
              Yoga et mobilité : des bénéfices incroyables !
              <Label icon="heartbeat" content="Récupération" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                There are many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find to be
                compatible with their own lifestyle and desires from a companion.
              </p>
            </Accordion.Content>

            <Accordion.Title
              index={2}
              className="cssTitle"

            >
              <Icon name='dropdown' />
              Quiche aux épinards.
              <Label icon="book" content="Recette" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                Three common ways for a prospective owner to acquire a dog is from
                pet shops, private owners, or shelters.
              </p>
              <p>
                A pet shop may be the most convenient way to buy a dog. Buying a dog
                from a private owner allows you to assess the pedigree and
                upbringing of your dog before choosing to take it home. Lastly,
                finding your dog from a shelter, helps give a good home to a dog who
                may not find one so readily.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              Crossfit, focus sur cette méthode made in USA.
              <Label icon="football ball" content="Sport" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>

            <Accordion.Title
              index={1}
              className="cssTitle"

            >
              <Icon name='dropdown' />
              Curry d'aubergines.
              <Label icon="book" content="Recette" className="cssLabelPost" />

            </Accordion.Title>
            <Accordion.Content >
              <p>
                There are many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find to be
                compatible with their own lifestyle and desires from a companion.
              </p>
            </Accordion.Content>

            <Accordion.Title
              index={2}
              className="cssTitle"

            >
              <Icon name='dropdown' />
              Quelles applications pour des séances maison ?
              <Label icon="football ball" content="Sport" className="cssLabelPost" />

            </Accordion.Title>
            <Accordion.Content >
              <p>
                Three common ways for a prospective owner to acquire a dog is from
                pet shops, private owners, or shelters.
              </p>
              <p>
                A pet shop may be the most convenient way to buy a dog. Buying a dog
                from a private owner allows you to assess the pedigree and
                upbringing of your dog before choosing to take it home. Lastly,
                finding your dog from a shelter, helps give a good home to a dog who
                may not find one so readily.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              Velouté glacé de courgettes à la menthe.
              <Label icon="book" content="Recette" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>

            <Accordion.Title
              index={1}
              className="cssTitle"

            >
              <Icon name='dropdown' />
              Qu'est ce qu'un cheatmeal et comment limiter la casse ?
              <Label icon="food" content="Alimentation" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                There are many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find to be
                compatible with their own lifestyle and desires from a companion.
              </p>
            </Accordion.Content>

            <Accordion.Title
              index={2}
              className="cssTitle"

            >
              <Icon name='dropdown' />
              Macro et micronutriments, quelle est la différence ?
              <Label icon="food" content="Alimentation" className="cssLabelPost" />

            </Accordion.Title>
            <Accordion.Content >
              <p>
                Three common ways for a prospective owner to acquire a dog is from
                pet shops, private owners, or shelters.
              </p>
              <p>
                A pet shop may be the most convenient way to buy a dog. Buying a dog
                from a private owner allows you to assess the pedigree and
                upbringing of your dog before choosing to take it home. Lastly,
                finding your dog from a shelter, helps give a good home to a dog who
                may not find one so readily.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              Salade de crevettes, mangue et noix de cajou.
              <Label icon="book" content="Recette" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>

            <Accordion.Title
              index={1}
              className="cssTitle"

            >
              <Icon name='dropdown' />
              Comment se préparer à courir un semi-marathon?
              <Label icon="football ball" content="Sport" className="cssLabelPost" />

            </Accordion.Title>
            <Accordion.Content >
              <p>
                There are many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find to be
                compatible with their own lifestyle and desires from a companion.
              </p>
            </Accordion.Content>

            <Accordion.Title
              index={2}
              className="cssTitle"

            >
              <Icon name='dropdown' />
              How do you acquire a dog?
              <Label icon="boxes" content="Divers" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                Three common ways for a prospective owner to acquire a dog is from
                pet shops, private owners, or shelters.
              </p>
              <p>
                A pet shop may be the most convenient way to buy a dog. Buying a dog
                from a private owner allows you to assess the pedigree and
                upbringing of your dog before choosing to take it home. Lastly,
                finding your dog from a shelter, helps give a good home to a dog who
                may not find one so readily.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              What is a dog?
              <Label icon="boxes" content="Divers" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              What is a dog?
              <Label icon="boxes" content="Divers" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              What is a dog?
              <Label icon="boxes" content="Divers" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              What is a dog?
              <Label icon="boxes" content="Divers" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              What is a dog?
              <Label icon="boxes" content="Divers" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              What is a dog?
              <Label icon="boxes" content="Divers" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              What is a dog?
              <Label icon="boxes" content="Divers" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              What is a dog?
              <Label icon="boxes" content="Divers" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              What is a dog?
              <Label icon="boxes" content="Divers" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>
            <Accordion.Title
              index={0}
              className="cssTitle"
            >
              <Icon name='dropdown' />
              What is a dog?
              <Label icon="boxes" content="Divers" className="cssLabelPost" />
            </Accordion.Title>
            <Accordion.Content >
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and
                faithfulness, it can be found as a welcome guest in many households
                across the world.
              </p>
            </Accordion.Content>
          </Accordion>
          
        </Container> 

      </Container> 
    )
  }
}
