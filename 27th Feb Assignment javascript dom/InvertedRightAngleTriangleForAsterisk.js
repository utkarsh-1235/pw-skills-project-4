let readline = require('readline')
let r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter the number",(n) =>{
for(let i=1;i<=n;i++){
     let aster = ''
    for(let j=n-i;j>=1;j--)
    {
     aster += "*"
    }
    console.log(aster)
} 
r1.close()
})