// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Header from 'src/containers/Header';
import Page from 'src/containers/Page';
import Footer from 'src/components/Footer';

// == Composant
const App = ({ catchFoodInfo, catchPostsInfo, catchWorkoutInfo, }) => {

  catchFoodInfo();
  catchPostsInfo();
  catchWorkoutInfo();

  return (
    <div id="app">
      <Header />
      <Page />
      <Footer />
    </div>
  );
};

// == Export
export default App;
