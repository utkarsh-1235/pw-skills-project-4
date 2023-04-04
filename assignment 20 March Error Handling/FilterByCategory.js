function filterbyCategory(products){
    return function(category){
        return products.filter(product=>product.category === category);

    }
}

const products = [
    {name : "shirts" , category: "Clothing"}, 
    {name : "pants" , category : "Clothing"},
    {name : "hat", category : "Accessories"},
    {name : "Sunglasses", category : "Accessories"}
]

var clothingProducts = filterbyCategory(products)('Clothing');

console.log(clothingProducts)