// define the regular expression pattern
const urlPattern = /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;

// define a function that checks if a string matches the pattern
function checkUrl(input){
    if(urlPattern.test(input)){
        console.log(`${input} ${" "} is a valid URL`);
    }
    else{
        console.log(`${input} ${" "} is not a valid URL`);
    }
}

// test the function with some sample inputs
checkUrl("http://www.example.com"); // valid URL
checkUrl("https://www.example.com/path/to/page.html"); // valid URL
checkUrl("ftp://example.com"); // not a valid URL
checkUrl("https://www.example.com?param=value"); // valid URL with query parameter