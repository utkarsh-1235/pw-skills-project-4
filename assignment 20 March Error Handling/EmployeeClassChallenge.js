class Employee{

    constructor(name,position,salary){
        this.name = name
        this.position = position
        this.salary = salary
    }

    getSalary(){
        return `${this.salary}`
    }
}

const emp = new Employee("Amit","SDE1","10000000")
console.log(emp.salary)