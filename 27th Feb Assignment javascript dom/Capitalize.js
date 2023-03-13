let readline = require('readline');

let r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter your name",(name)=>{
    name.charAt(0).toLowerCase()!==name.charAt(0) ?console.log( name) : 
    console.log( name.charAt(0).toUpperCase() + name.slice(1));

    r1.close();
})