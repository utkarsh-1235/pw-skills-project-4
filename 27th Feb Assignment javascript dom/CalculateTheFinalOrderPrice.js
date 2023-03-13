let customer = (customerCart)=> customerCart.reduce((total,item)=>total+item.unitPrice*item.quantity,0)

let customerCart = [ {unitPrice:20,quantity:3},{unitPrice:30,quantity:2},{unitPrice:10,quantity:1}]

const totalCost = customer(customerCart);
console.log(totalCost);






