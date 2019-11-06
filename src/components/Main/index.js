// == Import : npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import Signup from 'src/containers/Home/SignUp';
import Login from 'src/containers/Home/Login';
import WelcomeBoard from 'src/components/Dashboard';
import Postslist from 'src/containers/PostView/PostsList';
import Contact from 'src/components/Contact';
import Error from 'src/components/Main/Error';
import './main.scss';

// == Composant
const Main = ({ logged }) => (
  <Container id="mainContainer">
    <Switch>
      {!logged && (
        <Route path="/" exact component={Login} />
      )}
      {!logged && (
        <Route path="/signup" exact component={Signup} />
      )}

      {logged && (
        <Redirect exact from="/" to="/dashboard" />
      )}

      {!logged && (
        <Redirect from="/dashboard" to="/" />
      )}

      {logged && (
        <Route path="/dashboard" component={WelcomeBoard} />
      )}

      <Route path="/articles" exact component={Postslist} />
      <Route path="/contact" exact component={Contact} />
      <Route component={Error} />
    </Switch>
  </Container>
);

Main.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Main;
