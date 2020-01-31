class Cat {
    constructor(name, health=2, power=3) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    receiveHealth(healthPoints) {
        this.health += healthPoints;
        console.log(`${this.name} gained ${healthPoints} health points. Current health: ${this.health}`);
    }

    attack(target) {
        target.health -= this.power;
        console.log(`${this.name} attacked ${target.name} for ${this.power} points! ${target.name} has ${target.health} life.`)
    }

}

class Student {
    constructor(name, codeSkill=3, sleep=3) {
        this.name = name;
        this.codeSkill = codeSkill;
        this.sleep = sleep;
    }

    hug(target) {
        console.log(`${this.name} hugged ${target.name}`)
        target.receiveHealth(this.power);
        // console.log(`target has ${target.health} health`);
    }

    goToSleep() {
        this.sleep += 1;
        console.log(`${this.name} took a nap`);
    }

    code() {
        this.codeSkill += 1;
        this.sleep -= 1;
        console.log(`${this.name} did some coding. Code skill = ${this.codeSkill}`);
        if (this.sleep === 0) {
            console.log(`${this.name} died of sleep deprivation`);
        }
    }

}

class Hero {
    // properties/attributes
    // "variables that belong to each object"
    constructor(name, health=18, power=5) {
        this.name = name;
        this.health = health;
        this.power = power;
    }


    // behaviors/methods
    // "functions that belong to each object"
    hug(target) {
        console.log(`${this.name} hugged ${target.name}`)
        target.receiveHealth(this.power);
        // console.log(`target has ${target.health} health`);
    }

    receiveHealth(healthPoints) {
        this.health += healthPoints;
        console.log(`${this.name} gained ${healthPoints} health points. Current health: ${this.health}`);
    }

    attack(target) {
        target.health -= this.power;
        console.log(`${this.name} attacked ${target.name} for ${this.power} points! ${target.name} has ${target.health} life.`)
    }
}

const cosmo = new Cat('Cosmo');
const bob = new Hero('Bob');
const alex = new Hero('Alex');
bob.hug(alex);
alex.hug(bob);
bob.attack(alex);
bob.attack(cosmo);
const wes = new Student('Wes');
wes.code();
wes.code();
wes.goToSleep();
wes.code();
// wes.code();
wes.hug(cosmo);



