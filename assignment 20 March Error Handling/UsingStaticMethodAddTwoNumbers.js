class Calculator{

    static add(a,b){
        return a+b;
    }
}

const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter the first value",(a)=>{
    r1.question("Enter the second value",(b)=>{
        obj =  Calculator.add(Number(a), Number(b));
        console.log(obj);
   r1.close();
    })

})