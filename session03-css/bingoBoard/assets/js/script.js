/**
 ** This file contain the script for the bingo board.
 **/
var Bingo = function () {

    /**
     * Toggle the cell selection
     */
    function toggleSelection(e) {

        // Get the cell
        var cell = e.srcElement;
        console.log(cell.innerHTML);
    }


    return{

        /**
         * Init the board and add the events
         */
        initBoard: function () {

            // Find all the cells and process them
            var cells = document.querySelectorAll('.bingoBoard td'),
                index, cell;


            // Loop over each cell and do the "Magic" :-)
            for (index = 0; index < cells.length; index++) {

                // Get the current cell
                cell = cells[index];

                // Attach the events to the cell
                cell.addEventListener('click', toggleSelection);

            }


        }

    }

}();


Bingo.initBoard();