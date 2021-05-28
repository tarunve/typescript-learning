export class Person{
    firstName : string;
    lastName : string;

    //  Multiple constructors are not allowed
    // constructor(){
    //     this.firstName = "Tarun";
    //     this.lastName = "Verma";
    // }

    constructor(first : string , last : string){
        this.firstName = first;
        this.lastName = last;
    }

    getName() : any {
        return this.firstName + " " + this.lastName;
    }
}

// Object of Person with firstPerson instance of Parent type.

// No-arg constructor
// var firstPerson : Person = new Person();

// Parameterized constructor
var firstPerson : Person = new Person("Tarun", "verma");
console.log(firstPerson.firstName + " " + firstPerson.lastName);
console.log(firstPerson.getName());