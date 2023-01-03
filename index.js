const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pw = document.querySelector(".pw");
let pw2 = document.getElementById("pw2");
let button = document.getElementById("button");

function getRandomCharacter() {
    let randomNum = Math.floor(Math.random() * characters.length);
    return characters[randomNum];
}

function generate() {
    let password = "";
    for(let i = 0; i < 15; i++) {
        password += getRandomCharacter();
    }
    pw.innerText=password;
}

button.addEventListener("click", generate);



