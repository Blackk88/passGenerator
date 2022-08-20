import characters from "./data.js"


const inputLength = document.getElementById("input-lentgth")
const uppercaseCheck = document.getElementById("checkbox-uppercase")
const lowercaseCheck = document.getElementById("checkbox-lowercase")
const numbersCheck = document.getElementById("checkbox-numbers")
const symbolsCheck = document.getElementById("checkbox-symbols")
const passOutput1 = document.getElementById("password1")
const passOutput2 = document.getElementById("password2")


/******************************
 * Setting strenght of password 
*******************************/ 
 
const radioLabelEl = document.querySelectorAll(".radio-label")

radioLabelEl.forEach(item => item.addEventListener("change", event => {
    uppercaseCheck.checked = true
    lowercaseCheck.checked = true
    numbersCheck.checked = true
    symbolsCheck.checked = true
    if (event.target.id === "strength-weak") {
        numbersCheck.checked = false
        symbolsCheck.checked = false
        inputLength.value = "8"
        
    }   else if (event.target.id === "strength-average") {
            symbolsCheck.checked = false
            inputLength.value = "12"
    }   else if (event.target.id === "strength-strong") {
            inputLength.value = "16"
    }
}))

// Limitation for length of password
document.getElementById("input-lentgth").addEventListener('input', function (event) {
    if (this.value < 8) {
        this.value = 8
    } else if (this.value > 16) {
        this.value = 16
    }
});

// Generate new password 

document.getElementById("password-generator").addEventListener("click", function(){
    passOutput1.textContent = ""
    passOutput2.textContent = ""
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
        passOutput1.textContent = "Select symbols for your password"
    } else {

    // Generate password
    for (let i = 0; i <= inputLength.value; i++) {
        const randomIndex = Math.floor(Math.random()*charNew.length)
        const randomIndex2 = Math.floor(Math.random()*charNew.length)
        passOutput1.textContent += charNew[randomIndex]
        passOutput2.textContent += charNew[randomIndex2]
    }}
})


//* Copy to clipboard

document.querySelectorAll(".fa-copy").forEach(item => {
    item.addEventListener("click", event => {
        copyToClipboard(event)
    })
})

function copyToClipboard(element) {
    let copyPass = document.getElementById(`password${element.target.id}`).textContent;
    navigator.clipboard.writeText(copyPass)

    element.path[1].children[0].textContent = "Copied"
    setTimeout(() => element.path[1].children[0].textContent = copyPass, 300)
}



