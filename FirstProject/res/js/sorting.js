/**
 * This function sorts the table on the given column
 * @param column Column index indicating on which column to sort
 */
function sortTable(column) {
    var table, rows, switching, i, value, valueAfter, shouldSwitch;
    table = document.getElementById("mytable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            value = rows[i].getElementsByTagName("TD")[column];
            valueAfter = rows[i + 1].getElementsByTagName("TD")[column];
            //check if the two rows should switch place:
            if (value.innerHTML - valueAfter.innerHTML > 0) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}