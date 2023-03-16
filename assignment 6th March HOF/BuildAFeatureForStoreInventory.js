// define the object containing the items and their prices in USD
const priceInUSD = {
    "item1":10.50,
    "item2":20.75,
    "item3":5.25
}

// use the map higher-order function to create a new object with the converted prices in INR
const priceInINR = Object.entries(priceInUSD).map(([item,price])=>{
    return [item,price*80]
})

// convert the array of entries back to an object
const priceInObject = Object.fromEntries(priceInINR)
console.log(priceInObject); // output the object with the converted prices