/*class Student{

    constructor(username){
        this.username = username;
      
    }

    getPrintDetails(){
        return `"Hello, the student is ${this.username}"`;
    }
}

const student = new Student("Mithun")
console.log(student.getPrintDetails());*/


// Create a prototype object
const Student = {
    name : "",
    printDetails : function(){
        console.log(`"Hello , the student name is ${this.name}"`);
    }
};

// Instantiate a student object
const student1 = Object.create(Student);

//Set the name property
student1.name = "Mithun"

//call the print details methods
student1.printDetails(); 