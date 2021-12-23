class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("name" + this.name)
        return this;
    }

    showStats(){
        console.log("name: " + this.name + " health: " + this.health + " speed: " + this.speed + " strength: " + this.strength);
        return this;
    }

    drinkSake(){
        this.health += 10;
        console.log("Health: " + this.health);
        return this;
    }
}