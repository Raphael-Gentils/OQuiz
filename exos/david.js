class Character {
    // les propriétés communes à chaque groupe doivent se retouver ici
    name;
    life;
    weapon;
    attack;
    toujoursEnVie;

    constructor(name, life, weapon, attack, toujoursEnVie) {
        this.name = name;
        this.life = life;
        this.weapon = weapon;
        this.attack = attack;
        this.toujoursEnVie = toujoursEnVie;
    }
}

class Chevalier extends Character {
    armure;
    constructor(name, life, weapon, attack, armure, toujoursEnVie) {
        super(name, life, weapon, attack, toujoursEnVie);
        this.armure = armure;
    }
}

class Zombie extends Character {
    constructor(name, life, weapon, attack, toujoursEnVie) {
        super(name, life, weapon, attack, toujoursEnVie);
        this.toujoursEnVie = toujoursEnVie;
    }
}

class Vampire extends Character {
    aSoif;
    constructor(name, life, weapon, attack, toujoursEnVie, aSoif) {
        super(name, life, weapon, attack, toujoursEnVie);
        this.aSoif = aSoif;
    }
}
