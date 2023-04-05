function  ageInDays(person){
    // Concatenate first name and last name
  const fullname = `${person.firstname} ${person.lastname}` ;

  // Calculate age in days
  const ageInDays = person.age*365;

  // function to print
  function logMessage(){
    console.log(`The person's full name is ${fullname} and their age in days is ${ageInDays}.`);
  }

  // Return the logMessage function
  return logMessage;
}

const person = {
    firstname : "Mithun",
    lastname : "Chakravorty",
    age : 60
}

const message = ageInDays(person);
message();