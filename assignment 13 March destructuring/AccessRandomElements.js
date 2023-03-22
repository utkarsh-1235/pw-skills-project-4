

function extractElements(arr){
    const [first,second,...rest] = arr
    const last = rest.pop()
        return [first,second,last]
    }

    const arr = new Array(1,2,3,4,5)
    const print = extractElements(arr)
    console.log(print)