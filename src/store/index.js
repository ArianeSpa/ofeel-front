// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/store/reducer';
// import logMiddleware from './logMiddleware';
import ajaxMiddleware from './ajaxMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ajaxMiddleware),
);

/*
// On peut avoir plusieurs middlewares :
// nos actions passeront tour à tout dans chaque middleware dans l'ordre avant d'arriver au reducer
const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    ajaxMiddleware,
  )
);
*/

const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
