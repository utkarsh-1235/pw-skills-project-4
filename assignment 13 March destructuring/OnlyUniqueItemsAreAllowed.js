const readline = require("readline")

const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter the array Separated by comma",(input)=>{
    const arr = input.split(",").map(num => Number(...num))

    function removeDuplicates(arr){
        return new Set(arr)
    }
const uniqueArr = Array.from(removeDuplicates(arr));
console.log(uniqueArr)

r1.close()
})


