/**
 * This function takes the input form the input
 * field and saves it in the local storage.
 * @returns {boolean}
 */
function saveUsername() {
    //Getting the username from the input field
    var username = document.getElementById('userInput').value;

    //Regex which test if the string only contains letters
    var re = new RegExp("^[a-zA-Z]+$");
    if (!re.test(username)) {
        //Displaying an error message
        document.getElementById("error_message").innerHTML =
            "Input not valid: Only letters allowed";
        return false;
    } else {
        //Save the username in the localStorage
        localStorage.setItem("text", username);
        document.getElementById("hide_threads").style.display = "block";

        window.location.reload();
    }
    //Clears the input field
    document.getElementById('userInput').value = "";
}

/**
 * This function loads the username from the local storage
 * and sets it to html elements.
 */
window.onload = function () {
    //Get the username from the localStorage
    var username = localStorage.getItem("text");

    var message = "Not logged in";

    if (username !== null) {
        message = "Hallo " + username;
        if (document.getElementById("hide_header") !== null) {
            document.getElementById("hide_header").style.display = "none";
        }
    } else if (document.getElementById("hide_header") !== null && document.getElementById("hide_threads") !== null) {
        document.getElementById("hide_threads").style.display = "none";
        document.getElementById("hide_header").style.display = "block";
    }
    var numberOfNameDisplays = 4;
    for (var i = 0; i < numberOfNameDisplays; i++) {
        if (document.getElementById("test" + i) !== null) {
            if (i === 0) {
                document.getElementById("test" + i).innerHTML = message;
            } else {
                document.getElementById("test" + i).innerHTML = username;
            }
        }
    }
}
;

/**
 * This function handles the fade in / fade out feature
 * @param id The id from the html element which changes visibility
 */
function swap(id) {
    if (document.getElementById(id).style.display === "none") {
        document.getElementById(id).style.display = "inline-grid";
    }
    else {
        document.getElementById(id).style.display = "none";
    }
}

/**
 * This function clears the local storage.
 */
function logout() {
    localStorage.clear();
    window.location.reload();
}

/**
 * Return to the previous.
 */
function goBack() {
    window.history.back();
}