class Character {
    // les propriétés communes à chaque groupe doivent se retouver ici
    firstname;
    lastname;
    /**
     * @param {string} firstname
     * @param {string} lastname
     */
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

class Chevaliers extends Character {
    constructor(firstname, lastname) {
        super(firstname, lastname);
    }
}

const chevaliers = new Chevaliers('Lord', 'Arthur');
console.log(chevaliers);

class Vampires extends Character {
    constructor(firstname, lastname) {
        super(firstname, lastname);
    }
}

const vampires = new Vampires('Comte', 'Dracula');
console.log(vampires);

class Zombies extends Character {
    constructor(firstname, lastname) {
        super(firstname, lastname);
    }
}

const zombie = new Zombies('Rick', 'Show');
console.log(zombie);
