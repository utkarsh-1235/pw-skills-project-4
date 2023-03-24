let readline = require("readline")
let r1 = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})

r1.question("Enter the number of peoples",(peoples)=>{
    
    function calculateBill(cost,peoples){
        let total = cost.reduce((acc,val)=>acc+val,0)
        const costPerPerson = total/peoples;
        return { totalBill: total, billPerPerson: costPerPerson };
    }
    
    let cost = [10,20,50,100]
    const result = calculateBill(cost,peoples)
    console.log(result)
    r1.close()
})