let readline = require("readline");

let r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter the Name",(name)=>{
    let vowel = ['a','e','i','o','u'];
    const nameLowerCase = name.toLowerCase();
    let temp = 0;
    for(let i=0;i<name.length;i++){
           if( vowel.includes(nameLowerCase[i])){
            temp = temp+1;
           }
    }
    console.log(temp);
    r1.close();
})