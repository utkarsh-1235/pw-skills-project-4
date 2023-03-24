const readline = require('readline')

r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter first color",(color1)=>{
    r1.question("Enter second color",(color2)=>{
        let result
        switch (color1) {
            case "red":
              switch (color2) {
                case "blue":
                  result = "purple";
                  break;
                case "yellow":
                  result = "orange";
                  break;
                default:
                  result = "Invalid color combination";
                  break;
              }
              break;
            case "blue":
              switch (color2) {
                case "red":
                  result = "purple";
                  break;
                case "yellow":
                  result = "green";
                  break;
                default:
                  result = "Invalid color combination";
                  break;
              }
              break;
            case "yellow":
              switch (color2) {
                case "red":
                  result = "orange";
                  break;
                case "blue":
                  result = "green";
                  break;
                default:
                  result = "Invalid color combination";
                  break;
              }
              break;
            default:
              result = "Invalid color combination";
              break;
          }
          
          console.log(`Result: ${result}`);
          r1.close()
    })
})