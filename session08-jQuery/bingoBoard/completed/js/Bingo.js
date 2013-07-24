/**
 ** This file contain the script for the bingo board.
 ** @author Nir Geier, Ronny Orbach
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
        $.each(obj.items, function(index, item){
            if (!$(item).hasClass('selected')) {
                completed = false;
                return false;
            }
        });

        $.each(obj.items, function(index, item){
            $(item)[completed ? 'addClass' : 'removeClass'](obj.className);
        });
    }

    /**
     * Toggle the cell selection
     * @param e {Event} The click event
     */
    function toggleSelection(e) {

        // Get the cell
        var index,
            cell = e.target,
            cells;

        // Toggle the clicked cell state
        $(cell).toggleClass('selected');

        // Check to see if we have completed full line or not
        toggleCompelte({
            items    : $('[data-row="' + cell.dataset['row'] + '"]'),
            className: 'completedRow'
        });

        // Check for complete column
        toggleCompelte({
            items    : $('[data-col="' + cell.dataset['col'] + '"]'),
            className: 'completedColumn'
        });

    }

    var chosenNumbers = [],
        topNumber = 99;

    function generateRandom(){
        return Math.round(Math.random() * (topNumber - 1)) + 1;
    }

    function getRandomNumber(){
        var newNumber;
        do (newNumber = generateRandom())  
        while (chosenNumbers.indexOf(newNumber) > -1);
        chosenNumbers.push(newNumber);
        return newNumber;
    }

    return {

        /**
         * Init the board and add the events
         */
        initBoard: function () {

            // Find all the cells and process them
            var
                cells = $('.bingoBoard td'),
                index, cell;


            // Get the number of cells = Board size
            size = Math.sqrt(cells.length);

            // Loop over each cell and do the "Magic" :-)
            cells.on('click', toggleSelection).each(function(index, cell){
                var newNumber = getRandomNumber();
                if(newNumber < 10) newNumber = '0' + newNumber;
                // Add the row/cols attribute to each cell
                $(cell).text(newNumber).attr({
                    'data-row': parseInt(index / size) + 1,
                    'data-col': (index % size) + 1
                });

            });
        }
    }
}();

// Wait for the page to load and then build the board.
$(Bingo.initBoard);