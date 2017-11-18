function saveUsername() {
    var username = document.getElementById('userInput').value;
    var re = new RegExp("^([a-zA-Z])$");
    if (re.test(username)) {
        localStorage.setItem("text", username);
    } else {
        console.log("no name");
    }

}

window.onload = function () {
    var username = localStorage.getItem("text");
    localStorage.clear();
    if (document.getElementById("test") !== null) {
        document.getElementById("test").innerHTML = "Hallo " + username;
    }
}