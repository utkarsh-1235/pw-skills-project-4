// define the regular expression pattern
const linkedinUrlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;


function checkLinkedinUrl(input){
    if(linkedinUrlPattern.test(input)){
        console.log(`${input} is a valid LinkedIn profile URL`);
    }
    else{
        console.log(`${input} is not a valid LinkedIn profile URL`); 
    }
}
// test the function with some sample inputs
checkLinkedinUrl("https://www.linkedin.com/in/johndoe"); // valid LinkedIn profile URL
checkLinkedinUrl("https://www.linkedin.com/in/john-doe_123"); // valid LinkedIn profile URL with hyphen and underscore
checkLinkedinUrl("https://www.linkedin.com/in/johndoe123456789012345678901234567890"); // not a valid LinkedIn profile URL, too long
checkLinkedinUrl("https://www.linkedin.com/in/JohnDoe"); // not a valid LinkedIn profile URL, uppercase letter
checkLinkedinUrl("https://www.linkedin.com/profile/1234567"); // not a valid LinkedIn profile URL, wrong format