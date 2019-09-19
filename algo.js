var app = {
    elements: [],
    baseUrl: "http://localhost/Apotheose/Ofeel/",
    creatUserUrl: "wp/wp-login.php?action=register",
    jsonUrl: "wp-json/wp/v2/",
    jwtUrl: "wp-json/jwt-auth/v1/",
  
    init: function() {
      console.log('init');
  
      //Je cible mon bouton de deconnection
      app.elements.$btn_deco = document.querySelector('.logout');
  
      //J'ajoute un écouteur d'evenement a mon bouton pour la deconnection
      app.elements.$btn_deco.addEventListener('click', app.handleDeconnection);
  
      //Je cible mon bouton de création d'utilisateur
      app.elements.$btn_user = document.querySelector('.create');
  
      //J'ajoute un écouteur d'evenement a mon bouton pour la création
      app.elements.$btn_user.addEventListener('click', app.handleCreateUser);
  
      //Je cible mon bouton de renseignement des customs fields
      app.elements.$btn_fields = document.querySelector('.fields');
  
      //J'ajoute un écouteur d"evenement a mon bouto nde custom fields
      app.elements.$btn_fields.addEventListener('click', app.handleCreateFields);
  
      //Je cible mon bouton pour définir on objectif et mes choix alimentaires
      app.elements.$btn_objectifs = document.querySelector('.objectif');
  
      //J'ajoute un écouteur d'evenement a mon bouton objectifs
      app.elements.$btn_objectifs.addEventListener('click', app.handleCreateObjectifFields);
  
      // Désormais, au lancement de l'appli, on vérifie si l'utilisateur a un token en session
      app.checkToken();
    },
       
  
    /**---------------------------------------------------------
     * ---------------- Premiere requete pr l'onglet my feeling
     //---------------------------------------------------------*/
    handleCreateFields: function(event)
    {
      //var bodyFormData = new FormData();
      //var regime = prompt('Veuillez saisir votre regime alimentaire');
      var poids = prompt('Veuillez saisir votre poids');
      var taille = prompt('Veuillez saisir votre taille');
      var age = prompt('Veuillez saisir votre age');
      var sexe = prompt('homme ou femme');
      //bodyFormData.set('poids', poids);
  
      // if(sexe == "homme") {
      //   nbConstant = 259
      // } else if(sexe == "femme") {
      //   nbConstant = 230
      // } else {
      //   alert('Oh , t\'es con ? Regarde entre tes jambes')
      // }
      //Pour définir nbConstant
      if((sexe == 'homme') ? nbConstant = 259 : nbConstant = 230);
      
      // On ajoute un ou des customn fileds du user
      axios({
        method: "post",
        url: app.baseUrl + app.jsonUrl + "users/me",
        headers: { Authorization: "Bearer" + sessionStorage.getItem("token") },
        data: {
          // regime_alimentaire: [regime, regime],
          poids: poids,
          taille: taille,
          age: age,
          sexe: sexe,
          user_metabo: (nbConstant * poids**0.48 * taille**0.5 * age**-0.13) / 10,
        }
      })
        // En cas de succès
        .then(function(response) {
          //console.log(response);
          // console.log(response.data);
          app.calcJour(response);
          alert("Votre champ a bien été ajouté ! :)");
        })
        // En cas d'echec
        .catch(function(error) {
          console.log(error);
          alert("Impossible de créer ce champ ! :(");
        })
    },
    calcJour: function(response) {
        console.log(response.data['user_metabo']);
    
        //boite de dialogue pour la valeur de son activité
        var userActivity = prompt('votre activité');
    
        var responseMetabo = response.data['user_metabo'];
    
        if(userActivity == 'sedentaire') {
          varActivity = 1.2
        } else if (userActivity == 'legerement actif') {
          varActivity = 1.375 
        } else if (userActivity == 'actif') {
          varActivity = 1.55
        } else if (userActivity == 'tres actif') {
          varActivity = 1.725
        } else if (userActivity == 'extremement actif') {
          varActivity = 1.9
        }
    
        axios({
          method: "post",
          url: app.baseUrl + app.jsonUrl + "users/me",
          headers: { Authorization: "Bearer" + sessionStorage.getItem("token") },
          data: {
            cal_jour: responseMetabo * varActivity
          }
        })
          // En cas de succès
          .then(function(response) {
            //console.log(response);
            // console.log(response.data);
            alert("Votre activité a bien été ajouté ! :)");
          })
          // En cas d'echec
          .catch(function(error) {
            console.log(error);
            alert("Impossible d'ajouter votre activité ! :(");
          })
      },
  
        /**---------------------------------------------------------
     /* ---------------- Requete pour OBJECTIFS
     //---------------------------------------------------------*/
  
    handleCreateObjectifFields: function(event){
  
      var userObjectif = prompt('Veuillez saisir votre objectif');
      
  
      axios({
        method: "post",
        url: app.baseUrl + app.jsonUrl + "users/me",
        headers: { Authorization: "Bearer" + sessionStorage.getItem("token") },
        data: {
          objectifs: userObjectif,
        }
      })
        // En cas de succès
        .then(function(response) {
          //console.log(response);
          console.log(response.data);
          alert("Votre activité a bien été ajouté ! :)");
          app.userCalObj(response);
        })
        // En cas d'echec
        .catch(function(error) {
          console.log(error);
          alert("Impossible d'ajouter votre activité ! :(");
        })
    },
  
    userCalObj: function(response) {
      console.log(response.data)
      var userObjectif = response.data['objectifs'];
      var cal_jour = response.data['cal_jour'];
  
      if(userObjectif == 'perte de poids') {
        varObjectif = 0.75;
        varProportionProt = 0.34;
        varProportionGlu = 0.33;
        varProportionLip = 0.33; 
      } else if (userObjectif == 'prise de masse') {
        varObjectif = 1.2;
        varProportionProt = 0.292;
        varProportionGlu = 0.488;
        varProportionLip = 0.22; 
      } else if (userObjectif == 'remise en forme') {
        varObjectif = 1;
        varProportionProt = 0.222;
        varProportionGlu = 0.488;
        varProportionLip = 0.288; 
      }
  
      axios({
        method: "post",
        url: app.baseUrl + app.jsonUrl + "users/me",
        headers: { Authorization: "Bearer" + sessionStorage.getItem("token") },
        data: {
          cal_obj: cal_jour * varObjectif,
          prop_prot: varProportionProt,
          prop_glu: varProportionGlu,
          prop_lip: varProportionLip,
        }
      })
        // En cas de succès
        .then(function(response) {
          //console.log(response);
          console.log(response.data);
          app.handleCreateCalPerMeal(response);
          alert("Votre activité a bien été ajouté ! :)");
        })
        // En cas d'echec
        .catch(function(error) {
          console.log(error);
          alert("Impossible d'ajouter votre activité ! :(");
        })
    },
    handleCreateCalPerMeal: function(response) {
      var cal_obj = response.data['cal_obj'];
          
      axios({
        method: "post",
        url: app.baseUrl + app.jsonUrl + "users/me",
        headers: { Authorization: "Bearer" + sessionStorage.getItem("token") },
        data: {
          cal_p_dej_din: cal_obj * 0.3,
          cal_dej: cal_obj * 0.4,
        }
      })
        // En cas de succès
        .then(function(response) {
          //console.log(response);
          console.log(response.data);
          alert("Votre activité a bien été ajouté ! :)");
          app.handleQuantityMacroNutrimentAlongDay(response);
        })
        // En cas d'echec
        .catch(function(error) {
          console.log(error);
          alert("Impossible d'ajouter votre activité ! :(");
        })
    },
  
    handleQuantityMacroNutrimentAlongDay: function(response){
      var cal_p_dej_din = response.data['cal_p_dej'];
      var cal_dej = response.data['cal_dej'];
  
      axios({
        method: "post",
        url: app.baseUrl + app.jsonUrl + "users/me",
        headers: { Authorization: "Bearer" + sessionStorage.getItem("token") },
        data: {
          q_prot_p_dej_din: cal_p_dej_din / 4,
          q_glu_p_dej_din: cal_p_dej_din / 4,
          q_lip_p_dej_din: cal_p_dej_din / 9,
          q_prot_dej: cal_dej / 4,
          q_glu_dej: cal_dej / 4,
          q_lip_dej: cal_dej / 9
        }
      })
        // En cas de succès
        .then(function(response) {
          //console.log(response);
          console.log(response.data);
          alert("Votre activité a bien été ajouté ! :)");
        })
        // En cas d'echec
        .catch(function(error) {
          console.log(error);
          alert("Impossible d'ajouter votre activité ! :(");
        })
    },
  
    handleCreateUser: function(event) {
      var bodyFormData = new FormData();
      //console.log(bodyFormData);die;
  
      var username = prompt("Veuillez saisir votre Username");
      var email = prompt("Veuillez saisir votre mail");
  
      bodyFormData.set('user_login', username);
      bodyFormData.set('user_email', email);
  
      axios({
        method: "post",
        url: app.baseUrl + app.creatUserUrl,
        data: bodyFormData,
        config: { headers: {
          'Content-Type': 'multipart/form-data',
       }}
      })
  
        // en cas de succès
        .then(function(response) {
          //app.token = response.data.token;
          console.log("Mon token :");
          console.log(app.token);
          alert('Le compte a bien été créé');
        })
  
        // en cas d'echec
        .catch(function(error) {
          console.log("Impossible de se connecter");
          console.log(error);
          alert('Echec de la création');
        });
    },
    handleDeconnection: function(event) {
      //console.log(event.target);
  
      //Je souhaites détruire le token au click sur le bouton(event.target)
      sessionStorage.removeItem("token");
      console.log(sessionStorage);
  
      //Je peux redemander une connection en cas de deconnection
      //return app.checkToken();
  
    },
    askForAuth: function() {
      var username = prompt("Veuillez saisir votre Username");
      var password = prompt("Veuillez saisir votre mot de passe");
      // on vérifie les identifiants
      app.checkAuth(username, password);
    },
    checkAuth: function(username, password) {
      axios
  
        // pour récupérer mon token (POST)
  
        // construction de la requête
        .post(app.baseUrl + app.jwtUrl + "token", {
          username: username,
          password: password
        })
  
        // en cas de succès
        .then(function(response) {
          //app.token = response.data.token;
          console.log("Mon token :");
          console.log(app.token);
          alert('Vous etes bien connecté');
          // https://developer.mozilla.org/fr/docs/Web/API/Window/sessionStorage
          // Je sock le token en sessionStorage
          sessionStorage.setItem("token", response.data.token);
        })
  
        // en cas d'echec
        .catch(function(error) {
          console.log("Impossible de se connecter");
          console.log(error);
          alert('Echec de la connection');
        });
    },
    checkToken: function() {
      // Si pas de token en sessionStorage, on demande les identifiants
      if (!sessionStorage.getItem("token")) {
        return app.askForAuth();
      }
  
      // Je vérifie la validité de mon token
      axios({
        method: "post",
        url: app.baseUrl + app.jwtUrl + "token/validate",
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") }
      })
        // Si le token n'est pas valide, je demande les identifiants à l'utilisateur
        .catch(function(error) {
          return app.askForAuth();
        });
    },
  };
  
  $(app.init);