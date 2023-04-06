/*function fetchData(){
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>{
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json;
        })
        .then(data=>{
            resolve(data);
        })
        .catch(error=>{
            reject(error);
        })
    })
}

fetchData()
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.error(error);
})*/

const axios = require('axios')
function fetchData() {
    return new Promise((resolve, reject) => {
      axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
          if (response.status!==200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  fetchData()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  