const pass = document.getElementsByClassName("password")
const length = 16;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbol = "!@#$%^&*()_+=-/><"
const allChars = uppercase + lowercase + numbers + symbol;

function randomPassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    // for (let i = 0; i < pass.length; i++) {
    //     pass[i].value = password;
    // }
        for(let i=0;i<=password.length;i++){
    pass[i].value = password;
        }
    // console.log(password)
    // pass.value = password
}


