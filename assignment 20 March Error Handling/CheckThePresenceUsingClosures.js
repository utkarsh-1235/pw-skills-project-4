function numberChecker(numbers){
    return function(number){
        return numbers.includes(number);
    }
}

const arr = [1,2,3,4,5]
const num = numberChecker(arr)
console.log(num(3))
console.log(num(6))