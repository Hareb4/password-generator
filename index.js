const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let firstEl = document.getElementById("first-el")
let secondEl = document.getElementById("second-el")


function onoffNUM(){
  currentvalue = document.getElementById('onoff').value;
  if(currentvalue == "Off"){
    document.getElementById("onoff").value="On";
    numStstue = "on"
  }else{
    document.getElementById("onoff").value="Off";
    numStstue = "off"
  }
}

function onoffSYM(){
  currentvalue = document.getElementById('onoff2').value;
  if(currentvalue == "Off"){
    document.getElementById("onoff2").value="On";
    symStstue = "on" // On code
  }else{
    document.getElementById("onoff2").value="Off";
    symStstue = "off" // off code
  }
}
    
function generate1(){
    let firstPassword = ""
    let secondPassword = ""
    const input = document.getElementById("length");
    let length1 = parseInt(input.value);
    
    if(!length1){
        for(let i =0;i<12;i++){
            firstPassword += characters[Math.floor(Math.random()*characters.length)]
            secondPassword += characters[Math.floor(Math.random()*characters.length)]
        }
    } else {
        for(let i =0;i<length1;i++){
        firstPassword += characters[Math.floor(Math.random()*characters.length)]
        secondPassword += characters[Math.floor(Math.random()*characters.length)]
        }
    }
    
    firstEl.textContent = firstPassword
    secondEl.textContent = secondPassword
}

let numStstue = "on"
let symStstue = "on"



function generate2(){
    let firstPassword2 = ""
    let secondPassword2 = ""
    if(symStstue === "on" && numStstue === "on"){
        for(let i =0;i<12;i++){
            firstPassword2 += characters[Math.floor(Math.random()*characters.length)]
            secondPassword2 += characters[Math.floor(Math.random()*characters.length)]
        }
    } else if(symStstue === "off" && numStstue === "on"){
        for(let i =0;i<6;i++){
            firstPassword2 += letters[Math.floor(Math.random()*letters.length)]
            firstPassword2 += numbers[Math.floor(Math.random()*numbers.length)]
            secondPassword2 += letters[Math.floor(Math.random()*letters.length)]
            secondPassword2 += numbers[Math.floor(Math.random()*numbers.length)]
        }
    } else if(symStstue === "on" && numStstue === "off"){
        for(let i =0;i<6;i++){
            firstPassword2 += letters[Math.floor(Math.random()*letters.length)]
            firstPassword2 += symbols[Math.floor(Math.random()*symbols.length)]
            secondPassword2 += letters[Math.floor(Math.random()*letters.length)]
            secondPassword2 += symbols[Math.floor(Math.random()*symbols.length)]
        }
    } else if(symStstue === "off" && numStstue === "off"){
        for(let i =0;i<12;i++){
            firstPassword2 += letters[Math.floor(Math.random()*letters.length)]
            secondPassword2 += letters[Math.floor(Math.random()*letters.length)]
        }
    }
    firstEl.textContent = firstPassword2
    secondEl.textContent = secondPassword2
}
