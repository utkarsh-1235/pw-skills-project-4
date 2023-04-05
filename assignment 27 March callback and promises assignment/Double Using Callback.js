function doubleArray(arr,callback){
    const doubledArr = [];
    for(let i=0;i<arr.length;i++){
        doubledArr.push(callback(arr[i]));
    }
    return doubledArr;
}

// Define a callback function that doubles the input number
function doubleNumber(num){
    return num*2;
}

// Call the doubleArray function with an array and the doubleNumber callback
const arr = [1,2,3,4,5];
const doubledArr = doubleArray(arr,doubleNumber);
console.log(doubledArr);