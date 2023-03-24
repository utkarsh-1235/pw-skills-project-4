/*const Array = [3,4,8,6,9,12,15,14,20]

const newArray = Array.filter(
elements => elements%2!=0 || elements%3==0 )

console.log(newArray)*/

let Array = [3,4,8,6,9,12,15,14,20]

for(let i=0;i<=Array.length;i++){
    let number = Array[i]
    if(number%2==0)
    {
        continue
    }
    if(number%3==0){
        console.log(number)
    }
}