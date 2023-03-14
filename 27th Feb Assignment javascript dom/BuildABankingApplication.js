const deposit = (customer,amount)=>{
   customer.balance += amount;
   console.log(`Deposited ${amount} into ${customer.name}'s account. New balance is ${customer.balance}.`)
}

const withdrawl = (customer,amount)=>{
    if(customer.balance < amount){
        console.log(`Withdrawal failed. Insufficient balance in ${customer.name}'s account.`)
    }
    else{
        customer.balance -= amount
        console.log(`Withdrew ${amount} from ${customer.name}'s account. New balance is ${customer.balance}.`)
    }
}

const customer = {
    name : "Utkarsh",
    balance : 1000
}

deposit(customer,500)
deposit(customer,2000)
withdrawl(customer,3000)

