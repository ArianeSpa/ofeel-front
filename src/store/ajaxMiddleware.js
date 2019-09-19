import axios from 'axios';
import { AUTHENTICATE, saveUser, CREATE_ACCOUNT, saveDataUser } from 'src/store/reducers/userReducer';
import { SET_MY_FEELING_API, ASK_PAGES_POSTS_INFO, savePostsPages, askPosts, ASK_POSTS, savePosts, loadPosts, finishLoadPosts, ASK_USER_DATA, askUserData } from 'src/store/reducers/appReducer';
import { ASK_PAGES_FOOD_INFO, saveFoodPages, askFood, ASK_FOOD, saveFood } from 'src/store/reducers/mealPlanReducer';

const bodyFormData = new FormData();

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    //AUTHENTIFICATION LORS DE LA CONNEXION DE L'UTILISATEUR AVEC RECUPERATION DU TOKEN
    case AUTHENTICATE:
      axios.post('http://92.243.10.50/API/wp-json/jwt-auth/v1/token', {
        username: store.getState().userReducer.username,
        password: store.getState().userReducer.password,
      })
        .then((response) => {
          const saveUserToken = saveUser(response.data.token);
          store.dispatch(saveUserToken);
          store.dispatch(askUserData());          
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    //CREATION DE COMPTE REQUETE POST VERS API WP
    case CREATE_ACCOUNT:
      bodyFormData.append('user_login', store.getState().userReducer.username);
      bodyFormData.append('user_email', store.getState().userReducer.email);
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
          // A FAIRE : INFORMER L'UTILISATEUR QUE L'EMAIL EST EN COURS D'ENVOI, QU'IL DOIT SURVEILLER SA BOITE MAIL
        })
        .catch((error) => {
          console.log('erreur');
          // A FAIRE : INFRORMER L'UTILISATEUR DE L'ECHEC DE LA CREATION DE COMPTE. 
        });
      break;

    // REQUETE RECUPERATION DES DONNES USER VIA API WP GRACE A TOKEN
    case ASK_USER_DATA:
      axios({
        method: 'get',
        url: 'http://92.243.10.50/API/wp-json/wp/v2/users/me',
        headers: { Authorization: 'Bearer' + store.getState().userReducer.token },
      })
        .then((response) => {
          const objectUser = {
            age: response.data.age,
            goal: response.data.objectifs,
            regime: response.data.regime_alimentaire,
            sexe: response.data.sexe,
            taille: response.data.taille,
            poids: response.data.poids
          }
          const saveUserData = saveDataUser(objectUser);
          store.dispatch(saveUserData);

        })
        .catch((error) => {
          console.log(error);
        });

      //ENVOI DES DONNEES ENREGISTREES PAR L'UTILISATEUR VERS L'API
      case SET_MY_FEELING_API:
        const regime = [];
        store.getState().appReducer.vegan && regime.push('vegan');
        store.getState().appReducer.sansgluten && regime.push('sans-gluten');
        store.getState().appReducer.sanslactose && regime.push('sans-lactose');

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
            //A FAIRE : INFORMER L'UTIISATEUR QUE SES DONNEES ONT BIEN ETE ENREGISTREES
          })
          .catch((error) => {
            console.log(error);
          });
        break;

    //REQUETE AUPRES DE L'API WP ALIMENTS POUR CONNAITRE LE NOMBRE DE PAGES DE RESULTATS
    case ASK_PAGES_FOOD_INFO:
      const numberFoodPages = store.getState().appReducer.foodpages;
      let foodpage = 1;

      do{
        axios({
          method: 'get',
          url: 'http://92.243.10.50/API/wp-json/wp/v2/aliment/?page='+foodpage+'&per_page=99',
        })
          .then((response) => {
            const numberPages = (response.headers['x-wp-totalpages']);
            const saveNumberFoodPages = saveFoodPages(numberPages);
            store.dispatch(saveNumberFoodPages);

            const datafood = [];
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
        foodpage ++
      }while(foodpage<numberFoodPages);
      
      break;

    //REQUETE DE BOUCLAGE SUR LES PAGES DE L'API WP ALIMENTS 
    // case ASK_FOOD:
    //   const numberPages = store.getState().mealPlanReducer.foodpages;
    //   let datafood = [];

    //   for(let page=1; page<=numberPages; page++){
    //     axios({
    //       method: 'get',
    //       url: 'http://92.243.10.50/API/wp-json/wp/v2/aliment/?page='+page+'&per_page=99',
    //     })
    //       .then((response) => {
    //         const arrayResponse = response.data;
    //         arrayResponse.map((index) => {
    //           datafood.unshift({
    //             id: index.id,
    //             name: index.title.rendered,
    //             type: index.famille[0].slug,
    //             calories: index.calories,
    //             glucides: index.glucides,
    //             proteines: index.proteines,
    //             lipides: index.lipides,
    //             regime: index.regime,
    //           });
    //         });
    //         const saveResults = saveFood(datafood);
    //         store.dispatch(saveResults);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
    //   break;

    //REQUETE AUPRES DE L'API WP ARTICLES POUR CONNAITRE LE NOMBRE DE PAGES DE RESULTATS
    case ASK_PAGES_POSTS_INFO:
      store.dispatch(loadPosts());
      const numberPostPages = store.getState().appReducer.postspages;
      let postspage = 1;
      
      do{
        axios({
        method: 'get',
        url: 'http://92.243.10.50/API/wp-json/wp/v2/posts/?page='+postspage+'&per_page=99',
        })
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
            
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            store.dispatch(finishLoadPosts());
          }); 
        postspage ++;
      }while(postspage<numberPostPages);
      
      break;

    //REQUETE DE BOUCLAGE SUR LES PAGES DE L'API WP ARTICLES
    // case ASK_POSTS:
    //   const numberPostPages = store.getState().appReducer.postspages;
    //   let dataposts = [];
    
    //   for(let page=1; page<=numberPostPages; page++){
    //     store.dispatch(loadPosts());
    //     axios({
    //       method: 'get',
    //       url: 'http://92.243.10.50/API/wp-json/wp/v2/posts/?page='+page+'&per_page=99',
    //     })
    //       .then((response) => {
    //         const arrayResponse = response.data;
    //         arrayResponse.map((index) => {
    //           dataposts.push({
    //             id: index.id,
    //             name: index.title.rendered,
    //             excerpt: index.excerpt.rendered,
    //             content: index.content.rendered,
    //             tags: index.tags[0].slug,
    //           });
    //         });
    //         const saveResults = savePosts(dataposts);
    //         store.dispatch(saveResults);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    //       .finally(() => {
    //         store.dispatch(finishLoadPosts());
    //       }) 
    //   }
    //   break;
    
    default:
      next(action);
  }
};

export default ajaxMiddleware;
