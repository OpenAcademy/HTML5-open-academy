/**
 ** This file contain the script for the bingo board.
 ** @author Nir Geier
 **/
var Bingo = function () {


    // Private members
    var

    // The number of rows/columns in the Board
        size;

    /**
     * Mark/unmark line when its complete
     * @param obj {Object}
     * @param obj.items {Array} - Array of items to mark/reset
     * @param obj.className {String} - The css class name to add/remove from the line
     *
     */
    function toggleCompelte(obj) {

        // Flag to mark if the line is completed or not.
        var index = 0,
            completed = true;

        // Loop over the items and check to see if all of them are selected or not
        for (index = 0; index < size; index++) {
            if (!obj.items[index].classList.contains('selected')) {
                completed = false;
                break;
            }
        }

        for (index = 0; index < size; index++) {
            obj.items[index].classList[completed ? 'add' : 'remove'](obj.className);
        }
    }

    /**
     * Toggle the cell selection
     * @param e {Event} The click event
     */
    function toggleSelection(e) {

        // Get the cell
        var index,
            cell = e.srcElement,
            cells;

        // Toggle the clicked cell state
        cell.classList.toggle('selected');

        // Check to see if we have completed full line or not
        toggleCompelte({
            items    : document.querySelectorAll('[data-row="' + cell.dataset['row'] + '"]'),
            className: 'completedRow'
        });

        // Check for complete column
        toggleCompelte({
            items    : document.querySelectorAll('[data-col="' + cell.dataset['col'] + '"]'),
            className: 'completedColumn'
        });

    }

    return{

        /**
         * Init the board and add the events
         */
        initBoard: function () {

            // Find all the cells and process them
            var
                cells = document.querySelectorAll('.bingoBoard td'),
                index, cell;

            // Get the number of cells = Board size
            size = Math.sqrt(cells.length);

            // Loop over each cell and do the "Magic" :-)
            for (index = 0; index < cells.length; index++) {

                // Get the current cell
                cell = cells[index];

                // Attach the events to the cell
                cell.addEventListener('click', toggleSelection);

                // Add the row/cols attribute to each cell
                cell.dataset['row'] = parseInt(index / size) + 1;
                cell.dataset['col'] = (index % size) + 1;

            }
        }
    }
}();

// Wait for the page to load and then build the board.
document.addEventListener("DOMContentLoaded", Bingo.initBoard, false);

