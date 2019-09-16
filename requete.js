const handleCreateFields= (event) =>
  {
    //var bodyFormData = new FormData();
    var poids = prompt('Veuillez saisir votre poids');
    //bodyFormData.set('poids', poids);
    // On ajoute un ou des customn fileds du user
    axios({
      method: "post",
      url: app.baseUrl + app.jsonUrl + "users/me",
      headers: { Authorization: "Bearer" + sessionStorage.getItem("token") },
      data: {
        poids: poids,
      },
    })
      // En cas de succès
      .then(function(response) {
        console.log(response);
        alert("Votre champ a bien été ajouté ! :)");
      })
      // En cas d'echec
      .catch(function(error) {
        console.log(error);
        alert("Impossible de créer ce champ ! :(");
      })
  },

const app = {
  elements: [],
  baseUrl: 'http://localhost/Apotheose/Ofeel/',
  creatUserUrl: 'wp/wp-login.php?action=register',
  jsonUrl: 'wp-json/wp/v2/',
  jwtUrl: 'wp-json/jwt-auth/v1/',
  init() {
    console.log('init');
    // Je cible mon bouton de deconnection
    app.elements.$btn_deco = document.querySelector('.logout');
    // J'ajoute un écouteur d'evenement a mon bouton pour la deconnection
    app.elements.$btn_deco.addEventListener('click', app.handleDeconnection);
    // Je cible mon bouton de création d'utilisateur
    app.elements.$btn_user = document.querySelector('.create');
    // J'ajoute un écouteur d'evenement a mon bouton pour la création
    app.elements.$btn_user.addEventListener('click', app.handleCreateUser);
    // Désormais, au lancement de l'appli, on vérifie si l'utilisateur a un token en session
    app.checkToken();
  },
  handleCreateUser(event) {
    const bodyFormData = new FormData();
    console.log(bodyFormData); die;
    const username = prompt('Veuillez saisir votre Username');
    const email = prompt('Veuillez saisir votre mail');
    bodyFormData.set('user_login', username);
    bodyFormData.set('user_email', email);
    axios({
      method: 'post',
      url: app.baseUrl + app.creatUserUrl,
      data: bodyFormData,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    })
      // en cas de succès
      .then((response) => {
        // app.token = response.data.token;
        console.log('Mon token :');
        console.log(app.token);
        alert('Le compte a bien été créé');
      })
      // en cas d'echec
      .catch((error) => {
        console.log('Impossible de se connecter');
        console.log(error);
        alert('Echec de la création');
      });
  },
  handleDeconnection(event) {
    // console.log(event.target);
    // Je souhaites détruire le token au click sur le bouton(event.target)
    sessionStorage.removeItem('token');
    console.log(sessionStorage);
    // Je peux redemander une connection en cas de deconnection
    // return app.checkToken();
  },
  askForAuth() {
    const username = prompt('Veuillez saisir votre Username');
    const password = prompt('Veuillez saisir votre mot de passe');
    // on vérifie les identifiants
    app.checkAuth(username, password);
  },
  checkAuth(username, password) {
    axios
      // pour récupérer mon token (POST)
      // construction de la requête
      .post(`${app.baseUrl + app.jwtUrl }token`, {
        username,
        password,
      })
      // en cas de succès
      .then((response) => {
        // app.token = response.data.token;
        console.log('Mon token :');
        console.log(app.token);
        alert('Vous etes bien connecté');
        // https://developer.mozilla.org/fr/docs/Web/API/Window/sessionStorage
        // Je sock le token en sessionStorage
        sessionStorage.setItem('token', response.data.token);
      })
      // en cas d'echec
      .catch((error) => {
        console.log('Impossible de se connecter');
        console.log(error);
        alert('Echec de la connection');
      });
  },
  checkToken() {
    // Si pas de token en sessionStorage, on demande les identifiants
    if (!sessionStorage.getItem('token')) {
      return app.askForAuth();
    }
    // Je vérifie la validité de mon token
    axios({
      method: 'post',
      url: `${app.baseUrl + app.jwtUrl }token/validate`,
      headers: { Authorization: `Bearer ${  sessionStorage.getItem('token')}` },
    })
      // Si le token n'est pas valide, je demande les identifiants à l'utilisateur
      .catch((error) => app.askForAuth());
  },
};

$(app.init);
