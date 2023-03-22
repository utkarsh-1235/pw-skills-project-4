 function swapVariables(x, y) {
        [x, y] = [y, x];
        return [x, y];
      }

      
    let x = 5;
    let y = 10;
console.log(`Before swap: x = ${x}, y = ${y}`);

[x, y] = swapVariables(x, y);
console.log(`After swap: x = ${x}, y = ${y}`);
