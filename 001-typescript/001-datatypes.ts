// Lambda - for anonymous functions
var a = () => 'Tarun';

// declaring a number - postfix declaration in typescript
var b : number;
var b1 : boolean;
var b2 : string;
//b = true; // error since type doesn't match
b = 20.0;
b = 1000;

var b3 = 89;
//b3 = ""; // error because of implicit type assignment. Here b3 is of number type.

var c : undefined; // i.e. c can take only one value undefined . similar for null.
var c1 : null; 

// arrays
var arr1 : number[];
arr1 = [];
arr1 = [1, 2 ,3];
arr1.push(10);
let d = arr1.pop();
//arr1 = ['Tarun']; // error for string

// tuple - if we want to create array with different data types
var t1 : [number, string, boolean];
t1 = [1, "tarun", true];

// any type
var anyType; // variable of any type.
var anyT : any;
anyT = 1;
anyT = true;
anyT = "shjjd";

// or operator / union type
var orOp : number | boolean;
orOp = 1;
orOp = true;