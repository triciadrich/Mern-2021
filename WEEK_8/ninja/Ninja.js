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

class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom =10){
    super(name, health, speed, strength);
    this.wisdom = wisdom;
    }

    speakWisdom() {
        console.log("Speaking wisdom...");
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months")
      }
}