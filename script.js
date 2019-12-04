var generateBtnEl = document.getElementById("generate-btn");
var copyBtnEl = document.getElementById("copy-btn");


function generator() {
    var passwordLength = document.getElementById("slide").value;

    var characters = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm1234567890*&?%#@!";

    var password = "";

    for (var i = 0; i<= passwordLength; i++) {
        password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
    }

    document.getElementById("input-box").value = password;

}


generateBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    generator();
})