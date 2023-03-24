let readline = require("readline")

let r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter Number of days",(days)=>{
   r1.question("Enter the type of car",(type)=>{
    let totalCost
    switch(type){
       case "Economy" : totalCost = days*4000 
       console.log(totalCost)
       break;
       case "MidSize" : totalCost = days*10000 
       console.log(totalCost)
       break;
       case "Luxury" : totalCost = days*20000 
       console.log(totalCost)
       break;
       default :  console.log("Sorry we do not have")
    }
    r1.close();
   })

})