const User = require('./User');

// * comment créer un author à partir de la classe user sans modifier cette dernière
// ! Sloan :
// * créer une classe author qui herite de user
class Author extends User {
    password;

    constructor(firstname, lastname, password) {
        // * super est le mot clé qui permet d'appeler le constructeur de la classe parente
        // * Clara super doit contenir TOUS les paramètres de la classe initiale
        super(firstname, lastname);
        // Quand on hérite, on ne peut pas accéder au mot clé this avant d'aavoir appeler le constructeur de la classe parente
        console.log(this);
        this.password = password;
    }
}

const author = new Author('Mickey', 'Mouse', 'PASSWORD');

console.log(author);
