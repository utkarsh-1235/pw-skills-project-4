function ManipulateSTring(string){
    const newString = string.toUpperCase();;

    function toSTring(){
        console.log(`The manipulated string is: ${newString}`);
    }
    //Return to string function
    return toSTring;
}

const mySTring = "HelloWorld";
const toSTring = ManipulateSTring(mySTring);
// Call the logString callback function
toSTring();

