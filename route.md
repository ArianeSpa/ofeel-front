#Route

| statut | url | component |
|--|--|--|
|non connecté|/|Login|
|--|--|--|
|connecté|/dashboard|Dashboard/index.js (nommé welcomeboard en import)|
|connecté|/dashboard/myfeeling|Myfeeling|
|connecté|/dashboard/goals|Goals|
|connecté|/dashboard/mealplan|MealPlan|
|connecté|/dashboard/workout|Workout|
|--|--|--|
|tous|/contact|Contact|
|tous|/articles|PostsList|



  baseUrl: "http://remi-gaspart.vpnuser.oclock.io/Apotheose/Ofeel/wp-json/jwt-auth/v1/token",


  axios
      // pour récupérer mon token (POST)
      // construction de la requête
      .post(baseUrl, {
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
