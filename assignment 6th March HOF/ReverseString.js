const string = "Hello I am Utkarsh and I joined the course of PW"

//function to reverse the String
function reverseString(str){
return str.split("").reverse().join("");
}

// use setTimeout to delay the time 2sec
setTimeout(function(){
 const reversed = reverseString(string)
 console.log(reversed)
},2000);