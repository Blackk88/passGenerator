import {charactersNew, inputLength, uppercaseCheck, lowercaseCheck, numbersCheck, symbolsCheck, passOutput} from "./data.js"


// 
// Setting strenght of password 
// 
document.getElementById("pass-strength-avg").addEventListener("change", function(){
    inputLength.value = "8"
    uppercaseCheck.checked = true
    lowercaseCheck.checked = true
    numbersCheck.checked = false
    symbolsCheck.checked = false
})

document.getElementById("pass-strength-strong").addEventListener("change", function(){
    inputLength.value = "12"
    uppercaseCheck.checked = true
    lowercaseCheck.checked = true
    numbersCheck.checked = true
    symbolsCheck.checked = false
})

document.getElementById("pass-strength-vstrong").addEventListener("change", function(){
    inputLength.value = "16"
    uppercaseCheck.checked = true
    lowercaseCheck.checked = true
    numbersCheck.checked = true
    symbolsCheck.checked = true
})

// Generate new password 

document.getElementById("test").addEventListener("click", function(){
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
        charNew = charNew.concat(charactersNew[symbolsArr[i]])
        
    }

    // Generate password
    for (let i = 0; i <= inputLength.value; i++) {
        const randomIndex = Math.floor(Math.random()*charNew.length)
        passOutput.textContent += charNew[randomIndex]

    }
})

