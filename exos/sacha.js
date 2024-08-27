/**
 * @param {number} lifePoints;
 * @param {number} manaPointsPoints;
 * @param {number} endurancePointPoints;
 */

class Charater {
    lifePoints;
    manaPoints;
    staminaPoint;

    constructor(lifePoints, manaPoints, staminaPoint) {
        this.lifePoints = lifePoints;
        this.manaPoints = manaPoints;
        this.staminaPoint = staminaPoint;
    }
}

class Knight extends Charater {
    armor;
    constructor(lifePoints, manaPoints, staminaPoint) {
        super(lifePoints, manaPoints, staminaPoint);
    }
}

class Vampire extends Charater {
    fangs;
    constructor(lifePoints, manaPoints, staminaPoint) {
        super(lifePoints, manaPoints, staminaPoint);
    }
}

class Zombie extends Charater {
    infection;
    constructor(lifePoints, manaPoints, staminaPoint) {
        super(lifePoints, manaPoints, staminaPoint);
    }
}

const knight = new Knight(100, 40, 50);
console.log(knight);

const vampire = new Vampire(60, 0, 70);
console.log(vampire);

const zombie = new Zombie(50, 0, 100);
console.log(zombie);
