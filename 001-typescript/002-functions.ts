// Function declaration with types, it would be valid without types as well for JS.
function add(a : number , b: number){
    return a + b;
}
var sum = add(2827, 993893);
console.log(sum);

//sum = add(1); // This would have worked in JS but not in TS

// default value
function method1(a : number = 0){
    return a ;
}

// optional argument & without types - it should be in the end argument
function method2(a: any , b: any, c = 0, d? : any){
    return a + b;
}
var sum1 = method2(2827, "as", 890, 3998);
console.log(sum1);
sum1 = method2(12, "eu");
console.log(sum1);
sum1 = method2(12, "eu", 77);
console.log(sum1);

// adding return type
function method3(a : number = 0) : number{
    return a;
}

// implicit typing automatically by typescript
function method4() : string{
    return "Hello Tarun";
}
var greeting = method4();
// greeting = 12; // error since greeting is not a number.

