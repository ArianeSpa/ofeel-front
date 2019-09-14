import axios from 'axios';

import { AUTHENTICATE, saveUser, CREATE_ACCOUNT } from 'src/store/reducers/userReducer';
import { ASK_FOOD_INFO, saveFood } from 'src/store/reducers/mealPlanReducer';

// import { load, finishLoad } from 'src/store/reducers/appReducer';

const bodyFormData = new FormData();

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case AUTHENTICATE:
      axios.post('http://92.243.10.50/API/wp-json/jwt-auth/v1/token', {
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
      // console.log(bodyFormData.values());
      axios({
        method: 'post',
        url: 'http://92.243.10.50/API/wp/wp-login.php?action=register',
        data: bodyFormData,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      })
        .then((response) => {
          console.log('yeah');
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    
    case ASK_FOOD_INFO:
      axios({
        method: 'get',
        url: 'http://92.243.10.50/API/wp-json/wp/v2/aliment/',
      })
        .then((response) => {
          const numberPages = (response.headers['x-wp-totalpages']);
          let datafood=[];
          let page = 0;
          for(page=1; page<=numberPages; page++){
            axios({
              method: 'get',
              url: 'http://92.243.10.50/API/wp-json/wp/v2/aliment/?page='+page,
            })
              .then((response) => {
                const arrayResponse = response.data;
                arrayResponse.map((index) => {
                  datafood.unshift({
                    "id": index.id,
                    "name": index.title.rendered,
                    "type": index.famille[0].slug,
                    "calories": index.calories,
                    "glucides": index.glucides,
                    "proteines": index.proteines,
                    "lipides": index.lipides,
                    "regime": index.regime,
                  });
                })
                return datafood;
              })
              .catch((error) => {
                console.log(error);
              });
          }
          const saveFoodData = saveFood(datafood);
          store.dispatch(saveFoodData);
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
