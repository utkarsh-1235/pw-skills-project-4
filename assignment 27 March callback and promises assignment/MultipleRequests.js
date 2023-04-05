const axios = require('axios');

async function fetchData(){
    try {
        const todoResponse = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        const postResponse = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

        const todoData = todoResponse.data;
        const postData = postResponse.data;

        const combinedData = {
            todo : todoData ,
            post : postData
        }
        console.log(combinedData);
    }
    catch(error){
        console.error('Error fetching data:', error);
    }
}

fetchData();