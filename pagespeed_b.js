// Challenge Problem 3 Pagespeed Insights
function totalBytes(psiResult) {

    var pageStat = [],
        pageStatName = []; // arrays to hold pageStats and property names

    for (var index in psiResult.pageStats) {
        pageStat.push(psiResult.pageStats[index]);
    } // this loop puts stats into array

    pageStatName = Object.getOwnPropertyNames(psiResult.pageStats); // this statement puts property names in array

    var byteTotal = 0; // hold total Bytes	to load web-site				

    for (index in pageStat) { // loop through all values in pageStats
        if (pageStatName[index].indexOf("Bytes") > -1) // only look for entries that have "Bytes" in property name
        {
            byteTotal = byteTotal + Number(pageStat[index]); // add entries with "Bytes"
        }
    }

    return (byteTotal); // function return is total Bytes to load
}


function ruleList(psiResult) {

    var stringOut = []; // array to store output strings of localizedRuleName s

    for (var index in psiResult.formattedResults.ruleResults) { // loop through all rule results
        stringOut.push(psiResult.formattedResults.ruleResults[index].localizedRuleName); // put localizedRuleName string from each rull result into output array
    }

    return (stringOut); // return the array of strings of localizedRuleName s
}