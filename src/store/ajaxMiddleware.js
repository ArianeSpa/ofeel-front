import axios from 'axios';

import { AUTHENTICATE, saveUser } from 'src/store/reducers/userReducer';
// import { load, finishLoad } from 'src/store/reducers/appReducer';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case AUTHENTICATE:
      axios.post('http://remi-gaspart.vpnuser.oclock.io/Apotheose/Ofeel/wp-json/jwt-auth/v1/token', {
        username: store.getState().userReducer.username,
        password: store.getState().userReducer.password,
      })
        .then((response) => {
          const saveUserToken = saveUser(response.data.token);
          store.dispatch(saveUserToken);
        })
        .catch((error) => {
          console.log(error);
        });
      // .finally(() => {
      //   store.dispatch(finishLoad());
      // });
      break;
    default:
      next(action);
  }
};

export default ajaxMiddleware;
