let passOne = document.getElementById("pass1")
let passTwo = document.getElementById("pass2")



const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function generatePass() {
    let length = document.getElementById("pass-length").value
    if (length > 20) {
        length = 20
        document.getElementById("pass-length").value = 20
    } else if (length < 0) {
        length = 0
        document.getElementById("pass-length").value = 0
    }
    passOne.textContent = null
    passTwo.textContent = null
    for (i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * characters.length)
    let random2 = Math.floor(Math.random() * characters.length)
    passOne.textContent += characters[random]
    passTwo.textContent += characters[random2]
    }
}

function copy(clicked_id) {
    let id = clicked_id
    var copyText = document.getElementById(id).textContent
    navigator.clipboard.writeText(copyText)
    alert("Pass coppied to clipboard")
}
