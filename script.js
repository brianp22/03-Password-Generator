var generateBtnEl = document.getElementById("generate-btn");
var copyBtnEl = document.getElementById("copy-btn");
var slideEl = document.getElementById("slide");
var slideValueEl = document.getElementById("slide-value");
var inputBoxEl = document.getElementById("input-box");


function generator() {

    var passwordLength = slideEl.value - 1;

    var characters = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm1234567890*&?%#@!";
    
    var password = "";
    
    for (var i = 0; i<= passwordLength; i++) {
        password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
    }
    
    inputBoxEl.value = password;
}

slideValueEl.textContent = "Password Length: 15";

slideEl.oninput = function() {

        slideValueEl.textContent = "Password Length: " + slideEl.value;
}

generateBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    generator();
})