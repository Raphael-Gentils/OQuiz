const user = {
    nom: 'Laurent',
    prenom: 'oclock',
    age: 25,
};

const user2 = {
    nom: 'cyrille',
    penderom: 'DROP TABLE ID EXISTS',
    age: 54,
};

// /**
//  *
//  * @param {string} nom
//  * @param {string} prenom
//  * @param {number} age
//  * @returns {object}
//  */
// function User(nom, prenom, age) {
//     return {
//         nom: nom,
//         prenom: prenom,
//         age: age,
//     };
// }

// * Une classe sert à définir un objet
class User {
    // * des variables membre | des attributs | propriétés (nos propriétés sont publiques)
    firstname;
    lastname;
    // * propriété avec valeur par défaut
    isAuthor = false;
    // * pour faire une propriété privée, on la préfixe avec un octothorpe
    #password;

    /**
     *
     * @param {string} firstname
     * @param {string} lastname
     * @param {boolean} isAuthor
     */
    constructor(firstname, lastname, isAuthor, password) {
        // * on assigne les valeurs qui arrivent dans le constructeur aux propriétés de la classe
        this.firstname = firstname;
        this.lastname = lastname;
        if (isAuthor) {
            this.isAuthor = isAuthor;
        }

        this.#password = password;
    }

    // * cet accesseur sert à lire une props privée
    get password() {
        return this.#password;
    }

    // * mutateur | setter
    set password(password) {
        this.#password = password;
    }

    set number(number) {
        if (number < 100) {
            this.number = number;
        }
    }

    // * accesseur / getter
    // * On sert d'un accesseur comme d'une propriété d'un objet
    // * Les getters sont souvent utilisés pour lire des valeurs qui ne sont pas accessibles facilement
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }

    // ! Une fonction dans une classe s'appelle une méthode
    getFullname() {
        return `${this.firstname} ${this.lastname}`;
    }

    presentation() {
        return `Bonjour, je suis ${this.fullname}`;
    }
}

// const user3 = new User('Laurent', 'Oclock');
// // * Créer un objet à partir d'une classe : instancier une classe, l'objet est une instance de la classe
// console.log(user3 instanceof User);
// console.log(author instanceof User);
// console.log(user3.presentation());

const author = new User('Cyrille', 'oclock', true, 'secret password');
console.log(author.password);

author.password = 'un autre truc';

console.log(author.password);

// ! penser à retenir instanceof et typeof
