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
      const authForm = new FormData ();
      authForm.append('username', store.getState().userReducer.username);
      authForm.append('password', store.getState().userReducer.password);

      axios({
        method: 'post',
        url: 'http://localhost/OFEEL/ofeel-back/public/user/authenticate',
        data: authForm,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      })
        .then((response) => {
          const user = response.data.data;
          const test = response.data.find;

         
          !test && store.dispatch(preferenceUserSaved('notsaved')); 

          if (test) {
            const objectUser = {
              age: parseInt(user.age),
              goal: user.goal,
              regime: user.diet ? user.diet : '',
              sexe: user.gender,
              taille: parseInt(user.height),
              poids: parseInt(user.weight),
              activity: user.activity,
              factorActivity: user.factor_activity,
              user_metabo: parseInt(user.basal_metabolic_rate),
              cal_jour: parseInt(user.energy_expenditure),
              cal_dej: parseInt(user.lunch_calories),
              cal_obj: parseInt(user.daily_calories),
              cal_p_dej_din: parseInt(user.breakfast_dinner_calories),
              prop_glu: parseFloat(user.carb_proportion),
              prop_lip: parseFloat(user.fat_proportion),
              prop_prot: parseFloat(user.prot_proportion),
              q_glu_dej: parseInt(user.lunch_carb_quantity),
              q_glu_p_dej_din: parseInt(user.breakfast_dinner_carb_quantity),
              q_lip_dej: parseInt(user.lunch_fat_quantity),
              q_lip_p_dej_din: parseInt(user.breakfast_dinner_fat_quantity),
              q_prot_dej: parseInt(user.lunch_prot_quantity),
              q_prot_p_dej_din: parseInt(user.breakfast_dinner_prot_quantity),
            };

            const saveUserData = saveDataUser(objectUser);
            console.log('je suis après const saveUSerData');

            store.dispatch(saveUserData);
            console.log('je suis après dispatch de saveUSerData');


            store.dispatch(saveUser('ok'));
            console.log('je suis après disptach pour changer logged');

            store.dispatch(sortFoodChoice(
              store.getState().appReducer.sanslactose,
              store.getState().appReducer.sansgluten,
              store.getState().appReducer.vegan)
            );
          };
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
          response.data.response
           ? store.dispatch(preferenceUserSaved('saved'))
           : store.dispatch(preferenceUserSaved('notsaved'));
        })
        .catch((error) => {
          console.log(error);
        });
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
            goal: response.data.goal,
            regime: response.data.diet,
            sexe: response.data.gender,
            taille: parseInt(response.data.height),
            poids: parseInt(response.data.weight),
            activity: response.data.activity,
            user_metabo: parseInt(response.data.basal_metabolic_rate),
            cal_jour: parseInt(response.data.energy_expenditure),
            cal_dej: parseInt(response.data.lunch_calories),
            cal_obj: parseInt(response.data.daily_calories),
            cal_p_dej_din: parseInt(response.data.breakfast_dinner_calories),
            prop_glu: parseFloat(response.data.carb_proportion),
            prop_lip: parseFloat(response.data.fat_proportion),
            prop_prot: parseFloat(response.data.prot_proportion),
            q_glu_dej: parseInt(response.data.lunch_carb_quantity),
            q_glu_p_dej_din: parseInt(response.data.breakfast_dinner_carb_quantity),
            q_lip_dej: parseInt(response.data.lunch_fat_quantity),
            q_lip_p_dej_din: parseInt(response.data.breakfast_dinner_fat_quantity),
            q_prot_dej: parseInt(response.data.lunch_prot_quantity),
            q_prot_p_dej_din: parseInt(response.data.breakfast_dinner_prot_quantity),
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
        url: 'http://localhost/OFEEL/ofeel-back/public/user/create',
        config: {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
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
