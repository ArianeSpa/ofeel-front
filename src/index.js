// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


// == Import : local
import App from 'src/containers/App';
import store from 'src/store';


import 'semantic-ui-css/semantic.min.css';

// == Render
const rootComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById('root');

render(rootComponent, target);
