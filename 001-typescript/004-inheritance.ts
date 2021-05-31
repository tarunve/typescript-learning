class Person{
    firstName : string;
    lastName : string ;

    constructor(first : string, last: string){
        this.firstName = first;
        this.lastName = last;
    }

    greet(){
        console.log("Hey There !!!");
    }
}

class Programmer extends Person{

    greet(){
        console.log("Hello World !!!");
    }

    greetLikeNormalPeople(){
        super.greet();  // to call super class method.
        // this.greet();
    }

}

var programmer = new Programmer("Tarun", "Verma");
programmer.greet();
programmer.greetLikeNormalPeople();

// Polymorphism
var programmer2 : Person = new Programmer("Deepak", "Kumar");
programmer2.greet();
//programmer2.greetLikeNormalPeople(); // method not available since reference is from parent class