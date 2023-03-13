let readline = require('readline')

const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter the first number" ,(num1)=>{
    r1.question("Enter the second number",(num2)=>{
        r1.question("Enter the operator which you want to perform on that",(opr)=>{
           switch(opr){
            case "+" : console.log(num1 + num2);
            break;
            case "-" : console.log(num1 - num2);
            break;
            case "*" : console.log(num1 * num2);
            break;
            case "/" : console.log(num1 / num2);
            break;
            case "%" : console.log(num1 % num2);
            break;
            default : console.log("invalid operation");
           }
           r1.close();
        })
    })
})