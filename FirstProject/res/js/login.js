function saveUsername() {
    var username = document.getElementById('userInput').value;
    var message = "Hello " + username;
    localStorage.setItem("text", username);
    var re = new RegExp("^[a-zA-Z]+$");
    if (!re.test(username)) {
        alert("Input not valid: Only letters allowed");
        return false;
    }
    document.getElementById("error_message").innerHTML = message;
}

window.onload = function () {
    if (document.getElementById("test") !== null) {
        var username = localStorage.getItem("text");
        var message;
        localStorage.clear();
        if (username !== null) {
            message = "Hallo " + username;
        } else {
            message = "Not logged in";
        }
        document.getElementById("test").value = message;
    }
}
