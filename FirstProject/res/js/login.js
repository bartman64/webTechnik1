function saveUsername() {
    var username = document.getElementById('userInput').value;

    var re = new RegExp("^[a-zA-Z]+$");
    if (!re.test(username)) {
        //   alert("Input not valid: Only letters allowed");
        document.getElementById("error_message").innerHTML = "Input not valid: Only letters allowed";

        return false;
    } else {
        localStorage.setItem("text", username);
    }
}

window.onload = function () {

    var username = localStorage.getItem("text");
    console.log(username);
    var message = "Not logged in";
    if (username !== null) {
        message = "Hallo " + username;
    }

    if (document.getElementById("test") !== null) {
        document.getElementById("test").innerHTML = message;
    }
}

function logout() {
    localStorage.clear();
}