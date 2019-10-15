import axios from 'axios';
import {
  AUTHENTICATE, saveUser, CREATE_ACCOUNT, preferenceUserSaved,
} from 'src/store/reducers/userReducer';
import {
  SET_MY_FEELING_API,
  loadFood,
  finishLoadFood,
  ASK_USER_DATA,
  askUserData,
  saveDataUser,
} from 'src/store/reducers/appReducer';
import {
  ASK_PAGES_POSTS_INFO,
  savePostsPages,
  savePosts,
  loadPosts,
  finishLoadPosts,
} from 'src/store/reducers/postReducer';
import {
  ASK_PAGES_FOOD_INFO, saveFoodPages, saveFood, sortFoodChoice,
} from 'src/store/reducers/mealPlanReducer';
import {
  ASK_PAGES_WORKOUT_INFO, saveWorkoutPages, saveWorkout, loadWorkout,
} from 'src/store/reducers/workoutReducer';

const bodyFormData = new FormData();

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // AUTHENTIFICATION LORS DE LA CONNEXION DE L'UTILISATEUR AVEC RECUPERATION DU TOKEN
    case AUTHENTICATE:
      axios.post('http://ofeel.me/API/wp-json/jwt-auth/v1/token', {
        username: store.getState().userReducer.username,
        password: store.getState().userReducer.password,
      })
        .then((response) => {
          const saveUserToken = saveUser(response.data.token);
          store.dispatch(saveUserToken);
          store.dispatch(askUserData());
        })
        .catch((error) => {
          store.dispatch(preferenceUserSaved('notsaved'));
        });
      break;

    // CREATION DE COMPTE REQUETE POST VERS API WP
    case CREATE_ACCOUNT:
      bodyFormData.append('username', store.getState().userReducer.username);
      bodyFormData.append('email', store.getState().userReducer.email);
      bodyFormData.append('password', store.getState().userReducer.password);
      axios({
        method: 'post',
        url: 'http://localhost/OFEEL/ofeel-back/public/user/create',
        data: bodyFormData,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });


      // bodyFormData.append('user_login', store.getState().userReducer.username);
      // bodyFormData.append('user_email', store.getState().userReducer.email);
      // bodyFormData.append('newsletter', store.getState().userReducer.newsletter);
      // axios({
      //   method: 'post',
      //   url: 'http://ofeel.me/API/wp/wp-login.php?action=register',
      //   data: bodyFormData,
      //   config: {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   },
      // })
      //   .then((response) => {
      //     store.dispatch(preferenceUserSaved('saved'));
      //   })
      //   .catch((error) => {
      //     store.dispatch(preferenceUserSaved('notsaved'));
      //   });
      break;

    // REQUETE RECUPERATION DES DONNES USER VIA API WP GRACE A TOKEN
    case ASK_USER_DATA:
      axios({
        method: 'get',
        url: 'http://ofeel.me/API/wp-json/wp/v2/users/me',
        headers: { Authorization: `Bearer${store.getState().userReducer.token}` },
      })
        .then((response) => {
          const objectUser = {
            age: parseInt(response.data.age),
            goal: response.data.objectifs,
            regime: response.data.regime_alimentaire,
            sexe: response.data.sexe,
            taille: parseInt(response.data.taille),
            poids: parseInt(response.data.poids),
            activity: response.data.user_activity,
            user_metabo: parseInt(response.data.user_metabo),
            cal_jour: parseInt(response.data.cal_jour),
            cal_dej: parseInt(response.data.cal_dej),
            cal_obj: parseInt(response.data.cal_obj),
            cal_p_dej_din: parseInt(response.data.cal_p_dej_din),
            prop_glu: parseFloat(response.data.prop_glu),
            prop_lip: parseFloat(response.data.prop_lip),
            prop_prot: parseFloat(response.data.prop_prot),
            q_glu_dej: parseInt(response.data.q_glu_dej),
            q_glu_p_dej_din: parseInt(response.data.q_glu_p_dej_din),
            q_lip_dej: parseInt(response.data.q_lip_dej),
            q_lip_p_dej_din: parseInt(response.data.q_lip_p_dej_din),
            q_prot_dej: parseInt(response.data.q_prot_dej),
            q_prot_p_dej_din: parseInt(response.data.q_prot_p_dej_din),
          };
          const saveUserData = saveDataUser(objectUser);
          store.dispatch(saveUserData);
          store.dispatch(sortFoodChoice(store.getState().appReducer.sanslactose, store.getState().appReducer.sansgluten, store.getState().appReducer.vegan));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

      // ENVOI DES DONNEES ENREGISTREES PAR L'UTILISATEUR VERS L'API
    case SET_MY_FEELING_API:
      const regime = [];
      store.getState().appReducer.vegan && regime.push('vegan');
      store.getState().appReducer.sansgluten && regime.push('sans-gluten');
      store.getState().appReducer.sanslactose && regime.push('sans-lactose');

      axios({
        method: 'post',
        url: 'http://ofeel.me/API/wp-json/wp/v2/users/me',
        headers: { Authorization: `Bearer${store.getState().userReducer.token}` },
        data: {
          poids: store.getState().appReducer.poids,
          taille: store.getState().appReducer.taille,
          age: store.getState().appReducer.age,
          sexe: store.getState().appReducer.gender,
          objectifs: store.getState().appReducer.goal,
          regime_alimentaire: regime,
          user_activity: store.getState().appReducer.activity,
          user_metabo: store.getState().appReducer.user_metabo,
          cal_jour: store.getState().appReducer.cal_jour,
          cal_dej: store.getState().appReducer.cal_dej,
          cal_obj: store.getState().appReducer.cal_obj,
          cal_p_dej_din: store.getState().appReducer.cal_p_dej_din,
          prop_glu: store.getState().appReducer.prop_glu,
          prop_lip: store.getState().appReducer.prop_lip,
          prop_prot: store.getState().appReducer.prop_prot,
          q_glu_dej: store.getState().appReducer.q_glu_dej,
          q_glu_p_dej_din: store.getState().appReducer.q_glu_p_dej_din,
          q_lip_dej: store.getState().appReducer.q_lip_dej,
          q_lip_p_dej_din: store.getState().appReducer.q_lip_p_dej_din,
          q_prot_dej: store.getState().appReducer.q_prot_dej,
          q_prot_p_dej_din: store.getState().appReducer.q_prot_p_dej_din,
        },
      })
        .then((response) => {
          store.dispatch(preferenceUserSaved('saved'));
        })
        .catch((error) => {
          store.dispatch(preferenceUserSaved('notsaved'));
        });
      break;

    // REQUETE AUPRES DE L'API WP ALIMENTS POUR CONNAITRE LE NOMBRE DE PAGES DE RESULTATS
    case ASK_PAGES_FOOD_INFO:
      store.dispatch(loadFood());

      axios({
        method: 'get',
        url: 'http://localhost/OFEEL/ofeel-back/public/food',
      })
        .then((response) => {
          const datafood = response.data;
          const saveResults = saveFood(datafood);
          store.dispatch(saveResults);
          store.dispatch(finishLoadFood());
        })
        .catch((error) => {
          console.log(error);
        });

      // ANCIENNE METHODE : requête sur REST API WP

      // const numberFoodPages = store.getState().appReducer.foodpages;
      // let foodpage = 1;

      // do {
      //   axios({
      //     method: 'get',
      //     url: `http://ofeel.me/API/wp-json/wp/v2/aliment/?page=${foodpage}&per_page=99`,
      //   })
      //     // eslint-disable-next-line no-loop-func
      //     .then((response) => {

      //       const numberPages = (response.headers['x-wp-totalpages']);
      //       const saveNumberFoodPages = saveFoodPages(numberPages);
      //       store.dispatch(saveNumberFoodPages);

      //       const datafood = [];
      //       const arrayResponse = response.data;
      //       console.log(response.data);

      //       arrayResponse.map((index) => {
      //         datafood.unshift({
      //           id: index.id,
      //           name: index.title.rendered,
      //           type: index.famille[0].slug,
      //           calories: index.calories,
      //           glucides: index.glucides,
      //           proteines: index.proteines,
      //           lipides: index.lipides,
      //           regime: index.regime.map((oneregime) => oneregime.slug),
      //         });
      //       });
      //       const saveResults = saveFood(datafood);
      //       store.dispatch(saveResults);
      //       if (foodpage >= numberPages) {
      //         store.dispatch(finishLoadFood());
      //       }
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      //   // eslint-disable-next-line no-plusplus
      //   foodpage++;
      // } while (foodpage < numberFoodPages);
      break;

    // REQUETE AUPRES DE L'API WP ARTICLES POUR CONNAITRE LE NOMBRE DE PAGES DE RESULTATS
    case ASK_PAGES_POSTS_INFO:
      store.dispatch(loadPosts());
      const numberPostPages = store.getState().postReducer.postspages;
      let postspage = 1;

      do {
        axios({
          method: 'get',
          url: `http://ofeel.me/API/wp-json/wp/v2/posts/?page=${postspage}&per_page=99`,
        })
          // eslint-disable-next-line no-loop-func
          .then((response) => {
            const numberPages = (response.headers['x-wp-totalpages']);
            const saveNumberPostsPages = savePostsPages(numberPages);
            store.dispatch(saveNumberPostsPages);

            const dataposts = [];
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
            if (postspage >= numberPages) {
              store.dispatch(finishLoadPosts());
            }
          })
          .catch((error) => {
            console.log('erreur');
          });
        postspage++;
      } while (postspage < numberPostPages);
      break;

    case ASK_PAGES_WORKOUT_INFO:
      store.dispatch(loadWorkout());
      const numberWorkoutPages = store.getState().workoutReducer.workoutpages;
      let workoutpage = 1;

      do {
        axios({
          method: 'get',
          url: `http://ofeel.me/API/wp-json/wp/v2/workout/?page=${workoutpage}&per_page=99`,
        })
          // eslint-disable-next-line no-loop-func
          .then((response) => {
            const numberPages = (response.headers['x-wp-totalpages']);
            const saveNumberWorkoutPages = saveWorkoutPages(numberPages);
            store.dispatch(saveNumberWorkoutPages);

            const workoutList = [];
            const arrayResponse = response.data;
            arrayResponse.map((index) => {
              workoutList.push({
                id: index.id,
                name: index.title.rendered,
                excerpt: index.excerpt.rendered,
                content: index.content.rendered,
                slug: index.slug,
              });
            });
            const saveResults = saveWorkout(workoutList);
            store.dispatch(saveResults);
          })
          .catch((error) => {
            console.log('erreur');
          });
        workoutpage += 1;
      } while (workoutpage < numberWorkoutPages);

      break;

    default:
      next(action);
  }
};

export default ajaxMiddleware;
