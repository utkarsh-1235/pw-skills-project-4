function fetchData(){
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>{
            if(!response.ok){