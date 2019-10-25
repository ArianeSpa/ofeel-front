// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';


// == Import : local
import './app.scss';
import Header from 'src/containers/Header';
import Main from 'src/containers/Main';
import Footer from 'src/components/Footer';

// == Composant
const App = ({ catchFoodInfo, catchPostsInfo, catchWorkoutInfo }) => {

  catchFoodInfo();
  catchPostsInfo();
  catchWorkoutInfo();

  return (
    <Container id="app" className="globalContainer">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

App.propTypes = {
  catchFoodInfo: PropTypes.func.isRequired,
  catchPostsInfo: PropTypes.func.isRequired,
  catchWorkoutInfo: PropTypes.func.isRequired,
};
// == Export
export default App;
