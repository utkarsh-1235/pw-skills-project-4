const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response =>{
  if(!response.ok){
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
  console.error('Error fetching data:',error);
})