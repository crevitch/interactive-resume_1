//Challenge Problem 2 Astronauts
function alphabetizer(_names) {
    var astNames = []; // array to hold first, last of each name to work with them
    for (var index in _names) { // step through array of names
        astNames = _names[index].split(" "); // create an array that separates first and last and middle
        if (astNames.length == 3) {
            _names[index] = astNames[2] + ", " + astNames[0] + " " + astNames[1];
        } // if middle use this format, overwrite input
        else {
            _names[index] = astNames[1] + ", " + astNames[0];
        } // otherwise no middle, use this format, overwrite input
    }
    return (_names.sort()); // array overwritten. sort and return as sorted array
}