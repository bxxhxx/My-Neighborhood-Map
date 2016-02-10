/*THIS PAGE WAS ORIGINALY USED TO BRING IN OVER 2400 NAMES DIRECTLY FROM WIKIPEDIA USING
GOOGLE MAP GEO API AND TO FILTER DATA AND ARRANGE IT TO USESFUL OBJECTS AND ARRAYS.*/


//Make the first map with specific parameters using google map API
var windowWidth = window.innerWidth;

var zoomLevel = 15;

var mapLat = 34.1;

var mapLng = -118.332;

if (windowWidth < 701) {
    zoomLevel = 14;
} else {

    var percentFromIdeal = (100 - windowWidth / 1300 * 100);

    var centerLngOffset = 0.00021604 * percentFromIdeal;

    var mapLng = mapLng + centerLngOffset;

    console.log("map offset: " + centerLngOffset);
    console.log("mapLng: " + mapLng);

    if (windowWidth < 1000) {
        zoomLevel = 14;
    }
}


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





//show the map has loaded
google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
    // do something only the first time the map is loaded
    console.log("map idle");

});

//Make an array to store a complete list
var completeStarDataModel = [];

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;

}
//This function sorts the data coming from Wikipedia (ajax request)
var sortTheData = function(wikiItems) {
    //Using split to divide up the raw data from wikipedia in to info strings
    var response =  wikiItems.replace("}\n\n==No","-\n|");

    var rawDataArray = response.split("| [[");
    var clean1DataArray = [];
    //This for loop will restructure each data string into a more coherent data object
    //It will skip item [0] which was header information
    for (var i = 1; i < rawDataArray.length; i++) {
        var newObject = {};

        //Using replace function to get rid off extraenous characters
        rawDataArray[i] = rawDataArray[i].replace("]]", "");
        rawDataArray[i] = rawDataArray[i].replace(/\n\|-\n/g, "||");
        rawDataArray[i] = rawDataArray[i].replace(/\|\|\|/g, "||");
        rawDataArray[i] = rawDataArray[i].replace("Hollywood & Vine", "Hollywood Blvd. at Vine St.");
        rawDataArray[i] = rawDataArray[i].replace("½", "");
        //Splits different category of information based on the double pipe
        var newObjectSourceArray = rawDataArray[i].split("||");
        // clips off useless item at end of newObjectSourceArray
        newObjectSourceArray.pop();
        //trim the white space around data all strings in newObjectSourceArray
        for (var j = 0; j < newObjectSourceArray.length; j++) {
            newObjectSourceArray[j] = newObjectSourceArray[j].trim();
        }

        //Using indexOf to locate and then remove duplicate description
        var fullNameString = newObjectSourceArray[0];
        var pipePosition = fullNameString.indexOf("|");
        if (pipePosition > 0) {
            newObjectSourceArray[0] = fullNameString.substring(0, pipePosition);
        }
        pipePosition = fullNameString.indexOf("<");
        if (pipePosition > 0) {
            newObjectSourceArray[0] = fullNameString.substring(0, pipePosition);
        }
        pipePosition = fullNameString.indexOf("|A");
        if (pipePosition > 0) {
            newObjectSourceArray[0] = fullNameString.substring(0, pipePosition);
        }
        pipePosition = fullNameString.indexOf("{{");
        if (pipePosition > 0) {
            newObjectSourceArray[0] = fullNameString.substring(0, pipePosition);
        }

        //check for data issue on "end of section" addresses from wikipedia
        for (var j = 2; j < newObjectSourceArray.length; j += 2) {
            if (newObjectSourceArray[j].indexOf("! Name") > -1) {
                newObjectSourceArray.pop();
                newObjectSourceArray.pop();
            }
            if (newObjectSourceArray[j]) {
                //split the address into number/word parts in an array (using " "), for correcting bad addresses
                var addressCheckArray = newObjectSourceArray[j].split(" ");
                //convert first item (number in string) to mathematical number using parseInt
                var addressInteger = parseInt(addressCheckArray[0], 10);
                if ((addressInteger < 5000) && (addressCheckArray[1].indexOf("Hollywood") > -1)) {
                    newObjectSourceArray[j] = "" + addressInteger + " Vine St.";
                }
                if ((addressInteger > 6000) && (addressCheckArray[1].indexOf("Vine") > -1)) {
                    newObjectSourceArray[j] = "" + addressInteger + " Hollywood Blvd.";
                }
                if (addressInteger === 6915) {
                    newObjectSourceArray[j] = "6915 Hollywood Blvd.";
                }

                newObjectSourceArray[j] = newObjectSourceArray[j].replace("Special Plaque", "");

                pipePosition = 0;
                pipePosition = newObjectSourceArray[j].indexOf("|}");
                if (pipePosition > 0) {
                    newObjectSourceArray[j] = newObjectSourceArray[j].substring(0, pipePosition);
                }
            }
        };
        //2nd pass on "end of section" errors - clips errant data
        for (var j = 0; j < newObjectSourceArray.length; j ++) {
            if (newObjectSourceArray[j].indexOf("! Name") > -1) {
                newObjectSourceArray.pop();
            }
        };


        if ((((newObjectSourceArray.length / 2) % 2) !== 0) && (newObjectSourceArray.length < 12)) {

            newObject.fullName = newObjectSourceArray[0];
            newObject.category = [];
            newObject.address = [];
            //Because some names have more than 1 star, determine how many stars
            var numberOfStars = (newObjectSourceArray.length - 1) / 2;
            //then loop to push corresponding categories and address into arrays
            for (var j = 0; j < numberOfStars; j++) {
                // yields the number of stars they have
                var arrayPosition = 2 * j;
                newObject.category.push(newObjectSourceArray[arrayPosition + 1]);

                newObject.address.push(newObjectSourceArray[arrayPosition + 2]);

            }
        } else {
            console.log("problem child:");
            console.log(newObjectSourceArray);
        }

        //Pushing the new newObject sorted above into the completeStarDataModel

        if (isEmpty(newObject) === false) {
            completeStarDataModel.push(newObject);
            //console.log(newObject);
        }
    }
};

//This is ajax request with specific parameters requested by Wikipedia's API in
//order to get the full information from the walk of fame list page
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
//Error handling for wikipedia api fail
.fail( function(){
    var elem = document.getElementById("listGroup");
    elem.innerHTML = '<p class="error">Wikipedia data unavailable! <br/>Please check later!</p>';
});
