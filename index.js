import characters from "./data.js"

const inputLength = document.getElementById("input-lentgth")
const uppercaseCheck = document.getElementById("checkbox-uppercase")
const lowercaseCheck = document.getElementById("checkbox-lowercase")
const numbersCheck = document.getElementById("checkbox-numbers")
const symbolsCheck = document.getElementById("checkbox-symbols")
const passOutput = document.getElementById("password")

// 
// Setting strenght of password 
// 
document.getElementById("strength-weak").addEventListener("change", function(){
    inputLength.value = "8"
    uppercaseCheck.checked = true
    lowercaseCheck.checked = true
    numbersCheck.checked = false
    symbolsCheck.checked = false
})

document.getElementById("strength-average").addEventListener("change", function(){
    inputLength.value = "12"
    uppercaseCheck.checked = true
    lowercaseCheck.checked = true
    numbersCheck.checked = true
    symbolsCheck.checked = false
})

document.getElementById("strength-strong").addEventListener("change", function(){
    inputLength.value = "16"
    uppercaseCheck.checked = true
    lowercaseCheck.checked = true
    numbersCheck.checked = true
    symbolsCheck.checked = true
})

// Limitation for length of password
document.getElementById("input-lentgth").addEventListener('input', function (evt) {
    if (this.value < 8) {
        this.value = 8
    } else if (this.value > 16) {
        this.value = 16
    }
});

// Generate new password 

document.getElementById("test").addEventListener("click", function(){
    document.getElementById("instruction").textContent = "Click to copy"
    passOutput.textContent = ""
    let charNew = []
    let symbolsArr = []

    // Create array of checked checkbox value
    let symbolsChecked = document.querySelectorAll('.pass-param-checkbox input:checked');
    for (let i = 0; i < symbolsChecked.length; i++) {
    
        if (symbolsChecked[i].checked === true) {
            symbolsArr.push(symbolsChecked[i].value)
        }
    }

    // Creating new array of chosen symbols
    for (let i = 0; i < symbolsArr.length; i++) {
        charNew = charNew.concat(characters[symbolsArr[i]])
        
    }

    if (charNew[0] === undefined) {
        passOutput.textContent = "Select symbols for your password"
    } else {

    // Generate password
    for (let i = 0; i <= inputLength.value; i++) {
        const randomIndex = Math.floor(Math.random()*charNew.length)
        passOutput.textContent += charNew[randomIndex]
        // passOutput2.textContent += charNew[randomIndex]
    }}
})
// Copy to clipboard

document.getElementById("copy-to-clipboard").addEventListener("click", function(event){
    copyToClipboard();
})

function copyToClipboard() {
    let copyPass = document.getElementById("password").textContent;
    navigator.clipboard.writeText(copyPass)
    
    passOutput.textContent = "Copied"
    setTimeout(() => passOutput.textContent = copyPass, 300)
    
        // .then(() => {document.getElementById("instruction").textContent = "Copied";});
  }



