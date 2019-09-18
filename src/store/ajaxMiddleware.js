/* eslint-disable no-loop-func */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import axios from 'axios';
import { AUTHENTICATE, saveUser, CREATE_ACCOUNT } from 'src/store/reducers/userReducer';
import { SET_MY_FEELING_API, ASK_PAGES_POSTS_INFO, savePostsPages, askPosts, ASK_POSTS, savePosts, loadPosts, finishLoadPosts } from 'src/store/reducers/appReducer';
import { ASK_PAGES_FOOD_INFO, saveFoodPages, askFood, ASK_FOOD, saveFood } from 'src/store/reducers/mealPlanReducer';

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
          let arrayUser={};
          //Si la connexion réussie, je récupère le token et je fais une nouvelle requête pour récupérer les données de l'utilisateur
          axios({
            method: 'get',
            url: 'http://92.243.10.50/API/wp-json/wp/v2/users/me',
            headers: { Authorization: 'Bearer' + store.getState().userReducer.token },
          })
            .then((response) => {
              arrayUser = {
                age: response.data.age,
                goal: response.data.objectifs,
                regime: response.data.regime_alimentaire,
                sexe: response.data.sexe,
                taille: response.data.taille,
                poids: response.data.poids
              }
              // console.log(arrayUser);
              
              return arrayUser;
              
            })
            .catch((error) => {
              console.log(error);
            });

            const saveUserData = saveDataUser(arrayUser);
            store.dispatch(saveUserData);
            

        })
        .catch((error) => {
          console.log(error);
        });
        
        
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
    
    case ASK_PAGES_FOOD_INFO:
      axios({
        method: 'get',
        url: 'http://92.243.10.50/API/wp-json/wp/v2/aliment/',
      })
        .then((response) => {
          const numberPages = (response.headers['x-wp-totalpages']);
          const saveNumberFoodPages = saveFoodPages(numberPages);
          store.dispatch(saveNumberFoodPages);

          store.dispatch(askFood());
        })
        .catch((error) => {
          console.log(error);
        });
      
      break;

    case ASK_FOOD:
      const numberPages = store.getState().mealPlanReducer.foodpages;
      let datafood = [];

      for(let page=1; page<=numberPages; page++){
        axios({
          method: 'get',
          url: 'http://92.243.10.50/API/wp-json/wp/v2/aliment/?page='+page,
        })
          .then((response) => {
            const arrayResponse = response.data;
            arrayResponse.map((index) => {
              datafood.unshift({
                id: index.id,
                name: index.title.rendered,
                type: index.famille[0].slug,
                calories: index.calories,
                glucides: index.glucides,
                proteines: index.proteines,
                lipides: index.lipides,
                regime: index.regime,
              });
            });
            const saveResults = saveFood(datafood);
            store.dispatch(saveResults);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;

    case SET_MY_FEELING_API:
      const regime = [];
      if (store.getState().appReducer.vegan) {
        regime.push('vegan');
      }
      if (store.getState().appReducer.sansgluten) {
        regime.push('sans-gluten');
      }
      if (store.getState().appReducer.sanslactose) {
        regime.push('sans-lactose');
      }
      axios({
        method: 'post',
        url: 'http://92.243.10.50/API/wp-json/wp/v2/users/me',
        headers: { Authorization: 'Bearer' + store.getState().userReducer.token },
        data: {
          poids: store.getState().appReducer.poids,
          taille: store.getState().appReducer.taille,
          age: store.getState().appReducer.age,
          sexe: store.getState().appReducer.gender,
          objectifs: store.getState().appReducer.goal,
          regime_alimentaire: regime,
        },
      })
        .then((response) => {
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case ASK_PAGES_POSTS_INFO:
      store.dispatch(loadPosts());
      axios({
        method: 'get',
        url: 'http://92.243.10.50/API/wp-json/wp/v2/posts/',
      })
        .then((response) => {
          const numberPages = (response.headers['x-wp-totalpages']);
          const saveNumberPostsPages = savePostsPages(numberPages);
          store.dispatch(saveNumberPostsPages);

          store.dispatch(askPosts());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case ASK_POSTS:
      const numberPostPages = store.getState().appReducer.postspages;
      let dataposts = [];
    
      for(let page=1; page<=numberPostPages; page++){
        store.dispatch(loadPosts());
        axios({
          method: 'get',
          url: 'http://92.243.10.50/API/wp-json/wp/v2/posts/?page='+page,
        })
          .then((response) => {
            const arrayResponse = response.data;
            arrayResponse.map((index) => {
              dataposts.push({
                id: index.id,
                name: index.title.rendered,
                excerpt: index.excerpt.rendered,
                content: index.content.rendered,
                tags: index.tags[0].slug,
              });
            });
            const saveResults = savePosts(dataposts);
            store.dispatch(saveResults);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            store.dispatch(finishLoadPosts());
          }) 
      }

      break;
    
    default:
      next(action);
  }
};

export default ajaxMiddleware;
