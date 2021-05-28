function echo<T>(arg : T) : T{
    return arg;
}

var myStr = echo(1);


// Generics with classes
class Employee{
    private name : string;

    constructor(name : string){
        this.name = name;
    }

    getName() : string {
        return this.name;
    }
}
class Admin extends Employee{

}
class Manager extends Employee{

}

let employee = new Employee("ABC");
let admin  = new Admin('Tarun');
let manager = new Manager('Deepak');

function employeeEcho<T extends Employee>(employee : T){
    return employee;
}

var adm = employeeEcho(admin);      // We get Admin type because of generics
var man = employeeEcho(manager);    // We get Manager type
var emp = employeeEcho(employee);   // We get Employee type