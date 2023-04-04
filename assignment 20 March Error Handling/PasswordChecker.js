class User{
    constructor(username,password){
        this .username = username;
        this .password = password;
    }
    getPassword(){
         return '*'.repeat(this.password.length);
    }
    setPassword(value){
        if(value.length >= 8 && /\d/.test(value) && /[A-Z]/.test(value)){
            this.password = value;
        }
        else{
            console.error("Invalid password. The password should be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
    toString(){
        return `User ${this.username}`;
    }
}

const obj = new User("John","MyPassword123");
console.log(obj);