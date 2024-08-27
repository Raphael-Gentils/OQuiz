> L'objectif du DWWM est de savoir coder une application CRUD (Create, Read, Update, Delete), en intégrant les recommandations de sécurité (on n'a pas encore abordé la cybersécurité), une application CRUD est une application ou on peut lire, créer, mettre à jour et effacer des données.

- Savoir créér une BDD PostgreSQL (avec l'utilisateur de la BDD)
- Savoir importer un fichier SQL dans la BDD
- Savoir mettre en place un serveur avec express, ejs, sequelize, pg, dotenv (et autres modules selon le besoin)
- Savoir mettre en place les middlewares pour gérer les fichiers statiques et les fichiers de vues (ejs ou autre moteur de template)
- Savoir installer des dépendances de développement (prettier, eslint, nodemon)
- Comprendre comment on travaille en architecture MVC (Model, View, Controller)
- Faire une route : connaitre les routes paramétrées (req.params), ainsi que les routes POST qui permettent de récupérer des données d'un formulaire avec req.body (connaitre le middleware express.urlencoded)
- Faire une méthode de controller qui répond à cette route
- Faire une vue qui est renvoyé par ce controller
- Faire un modèle qui est gérer par ce pipeline
- Connaitre les méthodes principales de Sequelize et à quoi elles correspondent en SQL :
  - findAll (SELECT)
  - findByPk (SELECT WHERE)
  - create (INSERT)
  - update (UPDATE)
  - destroy (DELETE)
