// * character, on ne l'instancie jamais : c'est une classe abstraite
class Character {
    // les propriétés communes à chaque groupe doivent se retouver ici
    name;
    healthPoint;
    defense;
    damage;

    constructor(name, healthPoint, defense, damage) {
        this.name = name;
        this.healthPoint = healthPoint;
        this.defense = defense;
        this.damage = damage;
    }
}

class Knight extends Character {
    defenseBonus;
    sacredDamage = true;

    constructor(name, healthPoint, defense, damage, defenseBonus) {
        super(name, healthPoint, defense, damage);

        this.defenseBonus = defenseBonus;
        this.defense = defense + defenseBonus;
    }
}

class Vampire extends Character {
    healthRegen;
    damageToSacred = true;

    constructor(name, healthPoint, defense, damage, healthRegen) {
        super(name, healthPoint, defense, damage);

        this.healthRegen = healthRegen;
    }
}

class Zombie extends Character {
    damageBonus;
    damageToSacred = true;

    constructor(name, healthPoint, defense, damage, damageBonus) {
        super(name, healthPoint, defense, damage);

        this.damageBonus = damageBonus;
        this.damage = damage + damageBonus;
    }
}
