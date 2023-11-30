const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz"
const Specialchar = "@#$%^&*()_+";
const Number = "1234567890";
const passwordInput = document.getElementById("password-length");
const totalCharInput = document.querySelector(".total-char");
const upperInput = document.getElementById("Upper-checkbox");
const lowerInput = document.getElementById("Lower-checkbox");
const numberInput = document.getElementById("number-checkbox");
const symbolInput = document.getElementById("symbol-checkbox");
let randomGenerator = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}
const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += randomGenerator(UpperCase);

    }
    if (lowerInput.checked) {
        password += randomGenerator(LowerCase);

    }
    if (numberInput.checked) {
        password += randomGenerator(Number);

    }
    if (symbolInput.checked) {
        password += randomGenerator(Specialchar);

    }
    if (password.length < passwordInput.value) {
       return  generatePassword(password);
    }
    totalCharInput.innerText=truncateString(password, passwordInput.value);
   
    

}
document.getElementById("btn").addEventListener("click", () => {
    generatePassword();
})

function truncateString(str, num) {
    if (str.length > num) {
        let substr = str.substring(0, num)
        return substr
    }
    else {
        return str;
    }
}