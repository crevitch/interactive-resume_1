//Challenge Problem 1 Relationships
function getRelationship(arg1, arg2) {

    var str1 = "Can't compare relationships because val1 and val2 are not numbers"; // initialize default output string with val1 & val2 as dummys for args
    var arg1nan = isNaN(arg1); // logicals to test each argument for Nan
    var arg2nan = isNaN(arg2);

    if (arg2nan || arg1nan) { // pass if either is NaN

        if (arg2nan && arg1nan) {} // if both nan leave default string and substitute for dummies later
        else { // iff only one NaN you are here
            if (!arg1nan && arg2nan) {
                str1 = str1.replace('val1 and ', '');
            } // if only arg2 nan, then remove "val1 and"
            if (arg1nan && !arg2nan) {
                str1 = str1.replace(' and val2', '');
            } // if only arg1 nan, then remove "val"
            str1 = str1.replace(' are', ' is');
            str1 = str1.replace('not numbers', 'not a number');
        }
        if (arg1nan) {
            str1 = str1.replace('val1', arg1);
        } // here if either or both nan.  replace dummy val 1 with arg1.  if deleted above, OK
        if (arg2nan) {
            str1 = str1.replace('val2', arg2);
        } // here if either or both nan.  replace dummy val 2 with arg2.  if deleted above, OK

        return (str1); // return the modified output string
    } else

    { // here if both are numbers.  save appropriate comparator.
        if (arg1 > arg2) {
            comparitor = ">";
        }
        if (arg1 < arg2) {
            comparitor = "<";
        }
        if (arg1 == arg2) {
            comparitor = "=";
        }
    }

    return (comparitor); // return this string if both numbers.  contains comparitor only
}