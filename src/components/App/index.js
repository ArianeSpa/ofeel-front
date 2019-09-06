// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Header from 'src/containers/Header';
import Page from 'src/containers/Page';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Page />
  </div>
);

// == Export
export default App;
