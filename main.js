function fibonacci1(a){
    console.log(a);
    add= a+a;
    console.log(add);
    add2 = add +a;
    console.log(add2);
    add3 = add + add2
    console.log(add3);
    add = add2 + add3;
    console.log(add);
}


console.log("This code works in chrome terminal");
let number1 = prompt("put a number: ");
var number =parseInt(number1);
console.log("the secuence of Fibonacci are:");
fibonacci1(number);