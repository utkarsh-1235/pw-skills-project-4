
function BuildingRobust(obj)
{
    try{
           if(typeof(obj) != "object" || !obj.hasOwnProperty("name") || !obj.hasOwnProperty("age")){
              throw new Error("Invalid Parameter Type")
           }

           return `Name : ${obj.name} and  Age : ${obj.age}`
    }
    catch(error){
        return error.message
    }

}

console.log(BuildingRobust({name : "Mithun", age : 20}))
console.log(BuildingRobust({name : "Mithun"}))
console.log(BuildingRobust(["name","Mithun"]))


