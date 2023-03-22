function MinMax(arr){
    let min = Infinity;
    let max = -Infinity;
  
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }
      if(arr[i] < min){
        min = arr[i];
      }
    }
  
    console.log(min, max);
  }
  
  const arr = [1, 2, 3, 4, 5];
  MinMax(arr); 
  