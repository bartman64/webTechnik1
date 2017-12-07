function saveUsername() {
    //Getting the username from the input field
    var username = document.getElementById('userInput').value;

    //Regex which test if the string only contains letters
    var re = new RegExp("^[a-zA-Z]+$");
    if (!re.test(username)) {
        //Displaying an error message
        document.getElementById("error_message").innerHTML = "Input not valid: Only letters allowed";
        return false;
    } else {
        //Save the username in the localStorage
        localStorage.setItem("text", username);
        window.location.reload();
    }
    document.getElementById('userInput').value = "";
}

window.onload = function () {
    //Get the username from the localStorage
    var username = localStorage.getItem("text");

    var message = "Not logged in";

    if (username !== null) {
        message = "Hallo " + username;
    }

    for (var i = 0; i < 7; i++) {
        if (document.getElementById("test" + i) !== null) {
            if (i === 0) {
                document.getElementById("test" + i).innerHTML = message;
            } else {
                document.getElementById("test" + i).innerHTML = username;
            }
        }
    }
}


function swap(id) {
    if (document.getElementById(id).style.display === "none") {
        document.getElementById(id).style.display = "block";
    }
    else {
        document.getElementById(id).style.display = "none";
    }
}

function logout() {
    localStorage.clear();
    window.location.reload();
}