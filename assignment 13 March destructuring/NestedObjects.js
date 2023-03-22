function extractnameAndStreet(person){
    const {name ,address :{street}} = person
    return {name,street}
}


const person = {
    name: 'Mithun',
    age: 21,
    address: {
      street: 'B8, BlockB, Industrial Area .',
      city: 'Sector 62, Noida',
      state: 'CA',
      zip: 'Uttar Pradesh'
    }
  };

  const{name,street} = extractnameAndStreet(person)
  console.log(name)
  console.log(street)