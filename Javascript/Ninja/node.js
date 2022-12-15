// parent Vehicle class
class Ninja {
    constructor(name, health) {
        this.name1= name;
        this.health1 = health;
        this.speed = 3;
        this.strength =3;
    }


    sayName() {
        
        console.log(this.name1);
    }
    
    showStats(){
        console.log(this.name1+" "+ this.strength+" "+ this.speed+" "+this.health1)
    }

    drinkSake(){
        this.health+=10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


