const readline = require('readline')

const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter the string",(str)=>{
    function convertToNumber(str){
              try{
                console.log((str))
              }
              catch(error){
                 console.log("Invalid Number")
              }
    }

    convertToNumber(str)                    

    r1.close()
})