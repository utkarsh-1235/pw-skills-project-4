const readline = require("readline")

function wordCount(string){
 const words = string.toLowerCase().split(" ")

 const count = new Map()
 for(const word of words){
    if(count.has(word)){
        count.set(word,count.get(word)+1)
    }
    else{
        count.set(word,1)
    }
 }
 return count
}



const r1 = readline.createInterface({
    input : process.stdin ,
    output : process.stdout
})

r1.question("Enter the string",(string)=>{
    const count = wordCount(string)
    console.log(count)

    r1.close()
})