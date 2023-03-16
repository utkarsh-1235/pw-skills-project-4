/*function randomNumber(){
    const random = Math.floor(Math.random()*100);
    return random
}
setTimeout(function(){
    const randomNum = randomNumber()
    console.log(randomNum)
},3000)*/


// define the delay in millisecond
let delay = 3000;

// display a message every second indicating the time remaining until the random number is generated
const timer = setInterval(function(){
delay -= 1000;
console.log(`Generating random number in ${delay/1000} seconds...`)
if(delay===0){
    clearInterval(timer)
    const randomNumber = Math.floor(Math.random()*100)
    console.log(randomNumber)
}
},1000)