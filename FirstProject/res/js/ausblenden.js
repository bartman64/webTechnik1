var text = new Array();
text[0] = 'hidemeta';
text[1] = 'hidemetb';
text[2] = 'hidemetc';
// text[3] = 'hidemetd';
// usw.

function swap(id) {
    if (document.getElementById(id).style.display === "none") {
        document.getElementById(id).style.display = "block";
    }
    else {
        document.getElementById(id).style.display = "none";
    }
}