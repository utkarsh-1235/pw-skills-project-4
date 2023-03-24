let readline = require("readline")
let r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter the temperature in degree",(celcius)=>{
    let farenheit = (celcius*9/5)+32
    console.log(farenheit)

    r1.close()
})