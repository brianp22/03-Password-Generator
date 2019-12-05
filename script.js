// Decalring variables

var generateBtnEl = document.getElementById("generate-btn");
var copyBtnEl = document.getElementById("copy-btn");
var slideEl = document.getElementById("slide");
var slideValueEl = document.getElementById("slide-value");
var inputBoxEl = document.getElementById("input-box");

// Random password generator function

function generator() {

    var passwordLength = slideEl.value - 1;

    var characters = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm1234567890*&?%#@!";
    
    var password = "";
    
    for (var i = 0; i<= passwordLength; i++) {
        password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
    }
    
    inputBoxEl.value = password;
}

// Copy to clipboard function

function copy2Clip() {
    inputBoxEl.select();
    document.execCommand("Copy");
    alert("Successfully copied password to clipboard!");
}

// Creating text to show how long the password will be

slideValueEl.textContent = "Password Length: 15";

// Making the password length text react to the slide value

slideEl.oninput = function() {

    slideValueEl.textContent = "Password Length: " + slideEl.value;
}

// Adding the generator function to the button

generateBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    generator();
})

// Adding the copy2Clip function to the button

copyBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    copy2Clip();
})