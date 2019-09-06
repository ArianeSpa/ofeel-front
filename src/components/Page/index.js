import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


import SignUp from 'src/components/Page/Home/SignUp';
import Login from 'src/containers/Home/Login';
import WelcomeBoard from 'src/components/Page/Dashboard';
import MyFeeling from 'src/components/Page/Dashboard/MyFeeling';
import Goals from 'src/components/Page/Dashboard/Goals';
import MealPlan from 'src/components/Page/Dashboard/MealPlan';
import Workout from 'src/components/Page/Dashboard/Workout';


import Postslist from 'src/components/Page/PostView/PostsList';
import Contact from 'src/components/Page/Contact';
import Error from 'src/components/Page/Error';


import './page.scss';

// const view = 'contact';
// const logged = false;


const Page = ({ logged }) => (
  <Switch>
    {/* Si je ne suis pas connecté, home affiche la page de login /> */}
    {!logged && (
      <Route path="/" exact component={Login} />
    )}
    {!logged && (
      <Route path="/signup" exact component={SignUp} />
    )}

    {/* Si je suis connecté, home me redirige automatiquement vers l'accueil du dashboard */}
    {logged && (
      <Redirect exact from="/" to="/dashboard" />
    )}
    {logged && (
      <Route path="/dashboard" exact component={WelcomeBoard} />
    )}
    {logged && (
      <Route path="/dashboard/myfeeling" exact component={MyFeeling} />
    )}
    {logged && (
      <Route path="/dashboard/goals" exact component={Goals} />
    )}
    {logged && (
      <Route path="/dashboard/mealplan" exact component={MealPlan} />
    )}
    {logged && (
      <Route path="/dashboard/workout" exact component={Workout} />
    )}


    <Route path="/articles" exact component={Postslist} />
    <Route path="/contact" exact component={Contact} />
    <Route component={Error} />
  </Switch>

  // return (
  //   <div className="page">
  //     {view === 'signup' && <SignUp />}
  //     {view === 'login' && <Login />}
  //     {view === 'contact' && <Contact />}

  //   </div>

  // );
);

Page.propTypes = {
  logged: PropTypes.bool/*.isRequired*/,
};

export default Page;
