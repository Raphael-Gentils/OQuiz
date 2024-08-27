class User {
    static toto = 'truc';
    // * des variables membre | des attributs | propriétés (nos propriétés sont publiques)
    firstname;
    lastname;
    /**
     *
     * @param {string} firstname
     * @param {string} lastname
     */
    constructor(firstname, lastname) {
        // * on assigne les valeurs qui arrivent dans le constructeur aux propriétés de la classe
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

module.exports = User;
