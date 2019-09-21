// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './app.scss';
import Header from 'src/containers/Header';
import Page from 'src/containers/Page';
import Footer from 'src/components/Footer';

// == Composant
const App = ({ catchFoodInfo, catchPostsInfo }) => {
  catchFoodInfo();
  catchPostsInfo();

  return (
    <div id="app">
      <Header />
      <Page />
      <Footer />
    </div>
  );
};

App.propTypes = {
  catchFoodInfo: PropTypes.func.isRequired,
  catchPostsInfo: PropTypes.func.isRequired,
};
// == Export
export default App;
