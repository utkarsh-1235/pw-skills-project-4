const shoppingCart = new Map([["Apple","Banana"],["Orange","Pear"],["Mango","Apple"],["Pear","Mango",]["Orange","Banana"]])
function removeDuplicates(Cart){
    const uniqueItems = new Set(Cart)
    const ArrayFromUniqueItems = Array.from(uniqueItems)
    console.log("Shopping Cart without duplicate Items",ArrayFromUniqueItems)
    console.log("Shopping Cart with duplicate Items",Cart)
}

removeDuplicates(shoppingCart)

// converting this cart in to object form

//const ObjectShoppingCart = Object.fromEntries(shoppingCart)
//console.log(ObjectShoppingCart)
