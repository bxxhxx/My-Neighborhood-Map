/* This page is for the initial gathering and sorting of a complicated data set from Wikipedia.
 * as well as the initialization of the map. It is essentially seperate from the app function.
 * For purposes of keeping the code more clear and organized, I decided to keep it on its own page.
 */

//An array to store the sorted, cleaned data from Wikipedia
var completeStarDataModel = [];

//Initializes the map
var startMap = function() {
    var windowWidth = window.innerWidth;
    var zoomLevel = 15;
    var mapLat = 34.1;
    var mapLng = -118.332;
    //changes zoom level for smaller screens
    if (windowWidth < 701) {
        zoomLevel = 14;
    } else {
        //calculates a re-centering of the map based on screen size
        var percentFromIdeal = (100 - windowWidth / 1300 * 100);
        var centerLngOffset = 0.00021604 * percentFromIdeal;
        mapLng = mapLng + centerLngOffset;
        if (windowWidth < 1000) {
            zoomLevel = 14;
        }
    }
    //start the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: mapLat,
            lng: mapLng
        },
        zoom: zoomLevel,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        streetViewControl: false
    });
    //attach map as global variable to document
    document.map = map;
};

//This function sorts the data coming from Wikipedia (ajax request)
var sortTheData = function(wikiItems) {
    //helper function used to determine if object is empty
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
    for (var i = 1; i < rawDataArray.length; i++) {
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
                newObjectSourceArray[j] = newObjectSourceArray[j].replace("Special Plaque", "");
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

/*Init function is ajax request with specific parameters requested by Wikipedia's API in
 *order to get the full information from the walk of fame list page.
 * When "Done," it sorts the Wiki data, then starts the ViewModel via ko.applybindings.
 * When "Fail", it uses data from the default-hardcoded-data.js, and starts ViewModel.
 */
var init = function() {
    startMap();
    $.ajax({
            url: "https://en.wikipedia.org/w/api.php",
            data: {
                action: "query",
                prop: "revisions",
                format: "json",
                rvprop: "content",
                pageids: "1310953"
            },
            dataType: "jsonp"
        }).done(function(response) {
            //Puts the response json into a variable and then runs a sorting function
            var wikiItems = response.query.pages["1310953"].revisions[0]["*"];
            sortTheData(wikiItems);
            ko.applyBindings(new ViewModel());
        })
        //Error handling for wikipedia api fail then uses a default hardcoded data set
        .fail(function() {
            completeStarDataModel = defaultCompleteStarDataModel;
            ko.applyBindings(new ViewModel());
        });
};
