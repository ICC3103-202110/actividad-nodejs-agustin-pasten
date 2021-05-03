const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibonacci1(a){
    if (a==0){
        console.log(a);
    }
    if (a==1){
        console.log(a);
    }
    if(a>1){
        var x1 = 0
        var x2 = 1
        add = x1 + x2
        var value = 0
        for (let i=0; i < a-1; i++) {
            add2 = x2 + add
            x2 = add
            value =add
            add = add2
        }
        console.log(value)
    }
        
   
}

rl.question(("put a number: "), (number1) => {
    
    var number =parseInt(number1);
    console.log("The secuence of Fibonacci are:");
    fibonacci1(number);

    rl.close();
  });
