const charactersNew = {
    uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbols: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]
}

const inputLength = document.getElementById("input-lentgth")
const uppercaseCheck = document.getElementById("checkbox-uppercase")
const lowercaseCheck = document.getElementById("checkbox-lowercase")
const numbersCheck = document.getElementById("checkbox-numbers")
const symbolsCheck = document.getElementById("checkbox-symbols")
const passOutput = document.getElementById("password")

export {charactersNew, inputLength, uppercaseCheck, lowercaseCheck, numbersCheck, symbolsCheck, passOutput}
