/**
 * This function sorts the table on the given column
 * @param column Column index indicating on which column to sort
 */
function sortTable(column) {
    var table, rows, switching, i, value, valueAfter, shouldSwitch;
    table = document.getElementById("mytable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            /*Getting the two rows to compare for the
            chosen columns via parameter*/
            value = rows[i].getElementsByTagName("TD")[column];
            valueAfter = rows[i + 1].getElementsByTagName("TD")[column];
            //Compare the numbers
            if (value.innerHTML - valueAfter.innerHTML > 0) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}