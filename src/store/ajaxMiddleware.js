import axios from 'axios';

import { AUTHENTICATE, saveUser, CREATE_ACCOUNT } from 'src/store/reducers/userReducer';
// import { load, finishLoad } from 'src/store/reducers/appReducer';

const bodyFormData = new FormData();

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
    case CREATE_ACCOUNT:
      bodyFormData.append('user_login', store.getState().userReducer.username);
      bodyFormData.append('user_email', store.getState().userReducer.email);
      console.log(bodyFormData.values());
      axios({
        method: 'post',
        url: 'http://remi-gaspart.vpnuser.oclock.io/Apotheose/Ofeel/wp/wp-login.php?action=register',
        data: bodyFormData,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      })
        .then((response) => {
          console.log('yeah');
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default ajaxMiddleware;
