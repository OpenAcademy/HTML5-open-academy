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
     * Toggle the cell selection
     */
    function toggleSelection(e) {

        // Get the cell
        var index,
            cell = e.srcElement,
            cells;

        cell.classList.toggle('selected,completedRow,completedColumn');

        // Check to see if the columns is completed or not
        cells = document.querySelectorAll('[data-row="' + cell.dataset['row'] + '"].selected');

        // We have full row
        if (size === cells.length) {
            for (index = 0; index < cells.length; index++) {
                cells[index].classList.add('completedRow');
            }
        } else {
            for (index = 0; index < cells.length; index++) {
                cells[index].classList.remove('completedRow');
            }

        }


        // Check to see if the columns is completed or not
        cells = document.querySelectorAll('[data-col="' + cell.dataset['col'] + '"].selected');

        // We have full row
        if (size === cells.length) {
            for (index = 0; index < cells.length; index++) {
                cells[index].classList.add('completedColumn');
            }
        } else {
            for (index = 0; index < cells.length; index++) {
                cells[index].classList.remove('completedColumn');
            }

        }

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

