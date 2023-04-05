function greetWithname(name){
    return new Promise((resolve)=>{
         const greeting = `Hello,${name}`;
         resolve(greeting);
    })
}

const name = "Mithun";
greetWithname(name)
.then((greeting)=>{
   console.log(greeting)
})
.catch(error=>{
    console.error(error)
})