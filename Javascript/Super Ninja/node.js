// parent Vehicle class
class Ninja {
    constructor(name, health, speed =3, strength=3) {
        this.name1= name;
        this.health1 = health;
        this.speed = speed;
        this.strength =strength;
    }

    sayName() {
        console.log(this.name1);
    }
    
    showStats(){
        console.log(this.name1+" "+ this.strength+" "+ this.speed+" "+ this.health1)
    }

    drinkSake(){
        this.health1+=10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10 );
        this.wisdom=10;

    }

    speakWisdom(){
        super.drinkSake();
        console.log("Hi")
    }
}
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"



