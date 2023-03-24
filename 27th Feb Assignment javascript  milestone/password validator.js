//Question 1  Write a JavaScript program that checks if the entered password matches the confirmed password. If the passwords match, the program should log "Password Matched. Password validation Successful." to the console.Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console

const readline = require("readline")

const r1 = readline.createInterface({
 input : process.stdin,
 output: process.stdout
})
r1.question("Enter the password",(password)=>{
    r1.question("Confirm password",(Confirm)=>{
        if(password==Confirm){
            console.log("Password Matched.")
        }
        else{
            console.log("Password didn't match.")
        }
        r1.close()
    })
})