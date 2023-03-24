let readline = require('readline')
let r1 = readline.createInterface({
    input : process.stdin ,
    output : process.stdout
})

r1.question("Enter the Original price",(Original)=>{
    r1.question("Enter the discounted price",(Discount)=>{

        const percentageDiscount = (Original,Discount)=>{
            let percentage = ((Original-Discount)/Original)*100
            console.log(percentage.toFixed(2))
        }
        percentageDiscount(Original,Discount)
        r1.close()
    })
})
