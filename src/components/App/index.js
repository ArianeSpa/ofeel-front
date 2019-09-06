// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Header from 'src/components/Header';
import Page from 'src/components/Page';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Page />
  </div>
);

// == Export
export default App;
