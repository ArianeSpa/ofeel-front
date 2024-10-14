/* eslint-disable no-unused-expressions */
import axios from "axios";
import {
  AUTHENTICATE,
  // saveUser,
  CREATE_ACCOUNT,
  // preferenceUserSaved,
} from "./reducers/userReducer";
import {
  SET_MY_FEELING_API,
  SET_GOAL_API,
  loadFood,
  finishLoadFood,
  // saveDataUser,
  // informUser,
  // resetMessageModal,
} from "./reducers/appReducer";
import {
  ASK_PAGES_POSTS_INFO,
  savePostsPages,
  savePosts,
  loadPosts,
  finishLoadPosts,
} from "./reducers/postReducer";
import {
  ASK_PAGES_FOOD_INFO,
  saveFood,
  // sortFoodChoice,
} from "./reducers/mealPlanReducer";
import {
  ASK_PAGES_WORKOUT_INFO,
  saveWorkoutPages,
  saveWorkout,
  loadWorkout,
} from "./reducers/workoutReducer";
import { ActionModel } from "../models/reducer.model";

const bodyFormData = new FormData();

const ajaxMiddleware = (store: any) => (next: any) => (action: ActionModel) => {
  switch (action.type) {
    // CREATION DE COMPTE REQUETE POST VERS API PHP
    case CREATE_ACCOUNT:
      bodyFormData.set("username", store.getState().userReducer.username);
      bodyFormData.set("email", store.getState().userReducer.email);
      bodyFormData.set("password", store.getState().userReducer.password);
      /** @todo fix */
      //   axios({
      //     method: 'post',
      //     url: 'http://localhost/OFEEL/ofeel-back/public/user/create',
      //     data: bodyFormData,
      //     config: {
      //       headers: {
      //         'Content-Type': 'multipart/form-data',
      //       },
      //     },
      //   })
      //     .then((response) => {
      //       if (response.data.length === 0) {
      //         store.dispatch(preferenceUserSaved('saved'));
      //         store.dispatch(resetMessageModal());
      //       }
      //       else {
      //         store.dispatch(preferenceUserSaved('notsaved'));
      //       }
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      break;

    // AUTHENTIFICATION LORS DE LA CONNEXION DE L'UTILISATEUR
    // RECUPERATION DES DONNEES SI REUSSITE
    case AUTHENTICATE:
      bodyFormData.set("username", store.getState().userReducer.username);
      bodyFormData.set("password", store.getState().userReducer.password);
      /** @todo fix */

      //   axios({
      //     method: 'post',
      //     url: 'http://localhost/OFEEL/ofeel-back/public/user/authenticate',
      //     data: bodyFormData,
      //     config: {
      //       headers: {
      //         'Content-Type': 'multipart/form-data',
      //       },
      //     },
      //   })
      //     .then((response) => {
      //       const { data, find } = response.data[0];
      //       if (!find) {
      //         store.dispatch(informUser('message', 'Le pseudo avec lequel vous souhaitez vous connecter n\'existe pas.'));
      //       }
      //       else if (data === 'errorpassword') {
      //         store.dispatch(informUser('message', 'Votre mot de passe est incorrect, veuillez réessayer.'));
      //       }
      //       else if (typeof data === 'object') {
      //         const objectUser = {
      //           age: data.age ? parseInt(data.age, 10) : ' - ',
      //           goal: data.goal,
      //           regime: data.diet ? data.diet : '',
      //           sexe: data.gender ? data.gender : '',
      //           height: data.height ? parseInt(data.height, 10) : ' - ',
      //           weight: data.weight ? parseInt(data.weight, 10) : ' - ',
      //           activity: data.activity ? data.activity : '',
      //           factorActivity: data.factor_activity,
      //           basalMetabolicRate: parseInt(data.basal_metabolic_rate, 10),
      //           energyExpenditure: parseInt(data.energy_expenditure, 10),
      //           dailyCalories: parseInt(data.daily_calories, 10),
      //           lunchCalories: parseInt(data.lunch_calories, 10),
      //           breakfastAndDinnerCalories: parseInt(data.breakfast_dinner_calories, 10),
      //           dailyCarbohydrateProportion: parseFloat(data.carb_proportion),
      //           dailyFatProportion: parseFloat(data.fat_proportion),
      //           dailyProteinProportion: parseFloat(data.prot_proportion),
      //           lunchCarbsQuantity: parseInt(data.lunch_carb_quantity, 10),
      //           breakfastAndDinnerCarbsQuantity: parseInt(
      //             data.breakfast_dinner_carb_quantity, 10,
      //           ),
      //           lunchFatQuantity: parseInt(
      //             data.lunch_fat_quantity, 10,
      //           ),
      //           breakfastAndDinnerFatQuantity: parseInt(
      //             data.breakfast_dinner_fat_quantity, 10,
      //           ),
      //           lunchProteinQuantity: parseInt(data.lunch_prot_quantity, 10),
      //           breakfastAndDinnerProteinQuantity: parseInt(
      //             data.breakfast_dinner_prot_quantity, 10,
      //           ),
      //         };

      //         const saveUserData = saveDataUser(objectUser);

      //         store.dispatch(saveUserData);
      //         store.dispatch(saveUser('ok'));
      //         store.dispatch(resetMessageModal());

      //         store.dispatch(sortFoodChoice(
      //           store.getState().appReducer.sanslactose,
      //           store.getState().appReducer.sansgluten,
      //           store.getState().appReducer.vegan,
      //         ));
      //       }
      //     })
      //     .catch((error) => {
      //       store.dispatch(preferenceUserSaved('notsaved'));
      //     });
      break;

    // ENVOI DES DONNEES MYFEELING ENREGISTREES PAR L'UTILISATEUR VERS L'API
    case SET_MY_FEELING_API:
      bodyFormData.set("gender", store.getState().appReducer.gender);
      bodyFormData.set("age", store.getState().appReducer.age);
      bodyFormData.set("height", store.getState().appReducer.height);
      bodyFormData.set("weight", store.getState().appReducer.weight);
      bodyFormData.set("activity", store.getState().appReducer.activity);
      bodyFormData.set(
        "basal_metabolic_rate",
        store.getState().appReducer.basalMetabolicRate
      );
      bodyFormData.set(
        "energy_expenditure",
        store.getState().appReducer.energyExpenditure
      );

      /** @todo fix */
      //   axios({
      //     method: 'post',
      //     url: 'http://localhost/OFEEL/ofeel-back/public/user/updatemyfeeling',
      //     data: bodyFormData,
      //     config: {
      //       headers: {
      //         'Content-Type': 'multipart/form-data',
      //       },
      //     },
      //   })
      //     .then((response) => {
      //       const result = response.data[0].response;
      //       if (result) {
      //         store.dispatch(preferenceUserSaved('saved'));
      //       }
      //       !result && store.dispatch(preferenceUserSaved('notsaved'));
      //     })
      //     .catch((error) => {
      //       store.dispatch(preferenceUserSaved('notsaved'));
      //     });
      break;

    // ENVOI DES DONNEES GOAL ENREGISTREES PAR L'UTILISATEUR VERS L'API
    case SET_GOAL_API:
      bodyFormData.set("goal", store.getState().appReducer.goal);
      bodyFormData.set(
        "daily_calories",
        store.getState().appReducer.dailyCalories
      );
      bodyFormData.set(
        "breakfast_dinner_calories",
        store.getState().appReducer.breakfastAndDinnerCalories
      );
      bodyFormData.set(
        "lunch_calories",
        store.getState().appReducer.lunchCalories
      );
      bodyFormData.set(
        "breakfast_dinner_carb_quantity",
        store.getState().appReducer.breakfastAndDinnerCarbsQuantity
      );
      bodyFormData.set(
        "lunch_carb_quantity",
        store.getState().appReducer.lunchCarbsQuantity
      );
      bodyFormData.set(
        "breakfast_dinner_prot_quantity",
        store.getState().appReducer.breakfastAndDinnerProteinQuantity
      );
      bodyFormData.set(
        "lunch_prot_quantity",
        store.getState().appReducer.lunchProteinQuantity
      );
      bodyFormData.set(
        "breakfast_dinner_fat_quantity",
        store.getState().appReducer.breakfastAndDinnerFatQuantity
      );
      bodyFormData.set(
        "lunch_fat_quantity",
        store.getState().appReducer.lunchFatQuantity
      );
      //   store.getState().appReducer.vegan
      //     ? bodyFormData.set('vegan', 'Vegan')
      //     : bodyFormData.set('vegan', 0);
      //   store.getState().appReducer.sansgluten
      //     ? bodyFormData.set('gluten_free', 'Sans gluten')
      //     : bodyFormData.set('gluten_free', 0);
      //   store.getState().appReducer.sanslactose
      //     ? bodyFormData.set('lactose_free', 'Sans lactose')
      //     : bodyFormData.set('lactose_free', 0);

      /** @todo fix */

      //   axios({
      //     method: 'post',
      //     url: 'http://localhost/OFEEL/ofeel-back/public/user/updategoal',
      //     data: bodyFormData,
      //     config: {
      //       headers: {
      //         'Content-Type': 'multipart/form-data',
      //       },
      //     },
      //   })
      //     .then((response) => {
      //       store.dispatch(preferenceUserSaved('saved'));
      //     })
      //     .catch((error) => {
      //       store.dispatch(preferenceUserSaved('notsaved'));
      //     });
      break;

    // REQUETE AUPRES DE L'API PHP
    case ASK_PAGES_FOOD_INFO:
      store.dispatch(loadFood());
      axios({
        method: "get",
        url: "http://localhost/OFEEL/ofeel-back/public/food",
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
      break;

    // REQUETE AUPRES DE L'API WP ARTICLES POUR CONNAITRE LE NOMBRE DE PAGES DE RESULTATS
    case ASK_PAGES_POSTS_INFO:
      store.dispatch(loadPosts());
      // eslint-disable-next-line no-case-declarations
      const numberPostPages = store.getState().postReducer.postspages;
      // eslint-disable-next-line no-case-declarations
      let postspage = 1;

      do {
        axios({
          method: "get",
          url: `http://ofeel.me/API/wp-json/wp/v2/posts/?page=${postspage}&per_page=99`,
        })
          // eslint-disable-next-line no-loop-func, @typescript-eslint/no-loop-func
          .then((response) => {
            const numberPages = response.headers["x-wp-totalpages"];
            const saveNumberPostsPages = savePostsPages(numberPages);
            store.dispatch(saveNumberPostsPages);

            const dataposts: any[] = [];
            const arrayResponse = response.data;
            // eslint-disable-next-line array-callback-return
            arrayResponse.map((index: any) => {
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
            console.log("erreur");
          });
        // eslint-disable-next-line no-plusplus
        postspage++;
      } while (postspage < numberPostPages);
      break;

    case ASK_PAGES_WORKOUT_INFO:
      store.dispatch(loadWorkout());
      // eslint-disable-next-line no-case-declarations
      const numberWorkoutPages = store.getState().workoutReducer.workoutpages;
      // eslint-disable-next-line no-case-declarations
      let workoutpage = 1;

      do {
        axios({
          method: "get",
          url: `http://ofeel.me/API/wp-json/wp/v2/workout/?page=${workoutpage}&per_page=99`,
        })
          // eslint-disable-next-line no-loop-func
          .then((response) => {
            const numberPages = response.headers["x-wp-totalpages"];
            const saveNumberWorkoutPages = saveWorkoutPages(numberPages);
            store.dispatch(saveNumberWorkoutPages);

            const workoutList: any[] = [];
            const arrayResponse = response.data;
            // eslint-disable-next-line array-callback-return
            arrayResponse.map((index: any) => {
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
            console.log("erreur");
          });
        workoutpage += 1;
      } while (workoutpage < numberWorkoutPages);

      break;

    default:
      next(action);
  }
};

export default ajaxMiddleware;
