interface PersonIntf{
    firstName : string;
    lastName : string;

    // methods can be declared but not defined.
    getName() : string;
}

class PersonImpl implements PersonIntf{
    firstName: string;
    lastName: string;

    constructor(first : string, last: string){
        this.firstName = first;
        this.lastName = last;
    }

    getName(): string {
        return this.firstName + " " + this.lastName;
    }
}

//Duck Typing
let aPerson : PersonIntf = new PersonImpl("arun", "verma");

let someObj = {
    firstName : "Test",
    lastName : "test",
    foo : 10,
    getName : () => "Test West"
};

aPerson = someObj;
//aPerson.foo;   // will not be available since not in interface.
console.log(aPerson.getName());
