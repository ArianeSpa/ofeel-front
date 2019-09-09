import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


import Signup from 'src/containers/Home/SignUp';
import Login from 'src/containers/Home/Login';
import WelcomeBoard from 'src/components/Page/Dashboard';
import UserModal from 'src/containers/UserModal';

import Postslist from 'src/components/Page/PostView/PostsList';
import Contact from 'src/components/Page/Contact';
import Error from 'src/components/Page/Error';


import './page.scss';


const Page = ({ logged }) => (
  <>
    { logged && (<UserModal />) }
    <Switch>
      {/* Si je ne suis pas connecté, home affiche la page de login /> */}
      {!logged && (
        <Route path="/" exact component={Login} />
      )}
      {!logged && (
        <Route path="/signup" exact component={Signup} />
      )}

      {/* Si je suis connecté, home me redirige automatiquement vers l'accueil du dashboard */}
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
  </>
);

Page.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Page;
