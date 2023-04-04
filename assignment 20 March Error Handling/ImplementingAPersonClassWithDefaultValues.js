class person{

    constructor(name = "unknown",age = 0){
        this.name = name
        this.age = age
    }

    getDetails(){
        return `"Name: ${this.name}, age: ${this.age}"`
    }
}

const pson = new person("Mithun",20)
console.log(pson.getDetails())