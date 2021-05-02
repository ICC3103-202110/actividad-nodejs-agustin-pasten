const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

rl.question(("put a number: "), (number1) => {
    
    var number =parseInt(number1);
    console.log("The secuence of Fibonacci are:");
    fibonacci1(number);
    console.log()
    rl.close();
  });
