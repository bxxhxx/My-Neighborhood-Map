'use strict';
/* This page is for two helper functions that are essentially seperate from the app function.
 * For purposes of keeping the code more clear and organized, I decided to keep them on a sep page.
 */

/* Creates message ONLY IF Google Maps API fails & callback "InitMap" can't start the ViewModel app,
 * SO "onerror" function is called. ALL OTHER ERROR MESSAGES ARE GENERATED IN THE VIEWMODEL
 */
var errorHandling = function() {
    //checks to see if body has been created prior to "onerror" - if not, creates
    if (!document.body) {
        var body = document.createElement("body");
        document.documentElement.appendChild(body);
    }
    //empties body
    document.body.innerHTML = '';
    //create error message in "p" element
    var elem = document.createElement("p");
    var content = document.createTextNode("Google Map API Unavailable! - App can't run!");
    elem.appendChild(content);
    //attach error message to body
    document.body.appendChild(elem);
    $("p").addClass('error');
};

//This one-time use helper function sorts the data coming from Wikipedia (used by ajax request in KO ViewModel)
var sortTheData = function(wikiItems) {
    //An array to store the sorted, cleaned data from Wikipedia
    window.completeStarDataModel = [];
    //helper function used to determine if object is empty
    // use of conditional statement "if" observes Udacity advice re: "for-in" loops
    var isEmpty = function(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    };
    //Using split to divide up the raw data from wikipedia in to info strings
    var response = wikiItems.replace("}\n\n==No", "-\n|");
    response = response.replace(/\'\'/g, "");
    var rawDataArray = response.split("| [[");
    //This for loop will restructure each data string in rawDataArray into
    //a more coherent data object. It  skips item [0] which was header information
    for (var i = 1, len = rawDataArray.length; i < len; i++) {
        //newObject will receive the new sifted data object from the string
        var newObject = {};
        //Using replace function to get rid off extraneous characters
        rawDataArray[i] = rawDataArray[i].replace("]]", "");
        //fix formatting
        var cutPosition;
        if (rawDataArray[i].indexOf("\n\|-\n\|") > -1) {
            if ((rawDataArray[i].indexOf("\n\|-\n\| Radio") === -1) &&
                (rawDataArray[i].indexOf("\n\|-\n\| Live") === -1) &&
                (rawDataArray[i].indexOf("\n\|-\n\| Television") === -1) &&
                (rawDataArray[i].indexOf("\n\|-\n\| Motion") === -1) &&
                (rawDataArray[i].indexOf("\n\|-\n\| Recording") === -1)) {
                cutPosition = rawDataArray[i].indexOf("\n\|-\n\|");
                rawDataArray[i] = rawDataArray[i].substring(0, cutPosition) + "\n\|-\n\|";
            }
        }
        if (rawDataArray[i].indexOf("\n\|-\n\| Dick Martin") > -1) {
            cutPosition = rawDataArray[i].indexOf("\n\|-\n\| Dick Martin");
            rawDataArray[i] = rawDataArray[i].substring(0, cutPosition) + "\n\|-\n\|";
        }
        rawDataArray[i] = rawDataArray[i].replace(/\n\|-\n/g, "||");
        rawDataArray[i] = rawDataArray[i].replace(/\n\|- \n/g, "||");
        rawDataArray[i] = rawDataArray[i].replace(/\|\|\|/g, "||");
        rawDataArray[i] = rawDataArray[i].replace("Hollywood & Vine", "Hollywood Blvd. at Vine St.");
        rawDataArray[i] = rawDataArray[i].replace("½", "");
        //Splits different category of information based on the "double pipe"
        var newObjectSourceArray = rawDataArray[i].split("||");
        // clips off useless item at end of newObjectSourceArray
        newObjectSourceArray.pop();
        //trim the white space around data all strings in newObjectSourceArray
        for (var j = 0; j < newObjectSourceArray.length; j++) {
            newObjectSourceArray[j] = newObjectSourceArray[j].trim();
        }
        //Using indexOf to locate and then remove duplicate description, etc
        var fullNameString = newObjectSourceArray[0];
        cutPosition = fullNameString.indexOf("|");
        if (cutPosition > 0) {
            newObjectSourceArray[0] = fullNameString.substring(0, cutPosition);
        }
        cutPosition = fullNameString.indexOf("<");
        if (cutPosition > 0) {
            newObjectSourceArray[0] = fullNameString.substring(0, cutPosition);
        }
        cutPosition = fullNameString.indexOf("|A");
        if (cutPosition > 0) {
            newObjectSourceArray[0] = fullNameString.substring(0, cutPosition);
        }
        cutPosition = fullNameString.indexOf("{{");
        if (cutPosition > 0) {
            newObjectSourceArray[0] = fullNameString.substring(0, cutPosition);
        }
        //check for data issue on "end of section" addresses from wikipedia
        for (j = 2; j < newObjectSourceArray.length; j += 2) {
            if (newObjectSourceArray[j].indexOf("! Name") > -1) {
                newObjectSourceArray.pop();
                newObjectSourceArray.pop();
            }
            if (newObjectSourceArray[j]) {
                //split the address into number/word parts in an array (using " "), for correcting bad addresses
                var addressCheckArray = newObjectSourceArray[j].split(" ");
                //convert first item (number in string) to mathematical number using parseInt
                var addressInteger = parseInt(addressCheckArray[0], 10);
                //rules to fix erroneous address-street info from Wikipedia
                if ((addressInteger < 5000) && (addressCheckArray[1].indexOf("Hollywood") > -1)) {
                    newObjectSourceArray[j] = "" + addressInteger + " Vine St.";
                }
                if ((addressInteger > 6000) && (addressCheckArray[1].indexOf("Vine") > -1)) {
                    newObjectSourceArray[j] = "" + addressInteger + " Hollywood Blvd.";
                }
                if (addressInteger === 6915) {
                    newObjectSourceArray[j] = "6915 Hollywood Blvd.";
                }
                //Fix anomolous formatting in Wikipedia
                newObjectSourceArray[j] = newObjectSourceArray[j].replace("Special Plaque<br />", "");
                //Fix anomolous formatting in Wikipedia
                cutPosition = 0;
                cutPosition = newObjectSourceArray[j].indexOf("|}");
                if (cutPosition > 0) {
                    newObjectSourceArray[j] = newObjectSourceArray[j].substring(0, cutPosition);
                }
            }
        }
        //2nd pass on "end of section" errors - clips errant data
        for (j = 0; j < newObjectSourceArray.length; j++) {
            if (newObjectSourceArray[j].indexOf("! Name") > -1) {
                newObjectSourceArray.pop();
            }
        }
        //for properly formatted newObjectSourceArrays, putting data into the "newObject"
        if ((((newObjectSourceArray.length / 2) % 2) !== 0) && (newObjectSourceArray.length < 12)) {
            newObject.fullName = newObjectSourceArray[0];
            //category array can hold multiple categories for names with multiple stars
            newObject.category = [];
            //address array can hold multiple addresses for names with multiple stars
            newObject.address = [];
            //Because some names have more than 1 star, determine how many stars
            var numberOfStars = (newObjectSourceArray.length - 1) / 2;
            //then loop to push corresponding categories and address into arrays
            for (j = 0; j < numberOfStars; j++) {
                // yields the number of stars they have
                var arrayPosition = 2 * j;
                newObject.category.push(newObjectSourceArray[arrayPosition + 1]);
                newObject.address.push(newObjectSourceArray[arrayPosition + 2]);
            }
        }
        //Pushing the new "newObject" created above into the completeStarDataModel
        if (isEmpty(newObject) === false) {
            completeStarDataModel.push(newObject);
        }
    }
};
