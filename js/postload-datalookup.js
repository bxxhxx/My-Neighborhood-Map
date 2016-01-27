/*THIS PAGE WAS ORIGINALY USED TO BRING IN OVER 2400 NAMES DIRECTLY FROM WIKIPEDIA USING
GOOGLE MAP GEO API AND TO FILTER DATA AND ARRANGE IT TO USESFUL OBJECTS AND ARRAYS.*/


//Make the first map with specific parameters using google map API


//Make an array to store a complete list
//var completeStarDataModel = [];

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;

}
//This function sorts the data coming from Wikipedia (ajax request)
var sortTheData = function(response) {
    //Using split to divide up the raw data from wikipedia in to info strings
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
        //Splits different category of information based on the double pipe
        newObjectSourceArray = rawDataArray[i].split("||");

        newObjectSourceArray.pop();
        for (var j = 0; j < newObjectSourceArray.length; j++) {
            //trim the white space around data strings
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

        //The following if/else if's directs the data into named properties
        //on the empty newObject
        if (newObjectSourceArray.length === 3) {
            newObject.fullName = newObjectSourceArray[0];
            newObject.category = [newObjectSourceArray[1]];
            newObject.address = [newObjectSourceArray[2]];
            newObject.lat = [];
            newObject.lng = [];
        } else if (newObjectSourceArray.length === 5) {
            newObject.fullName = newObjectSourceArray[0];
            newObject.category = [newObjectSourceArray[1]];
            newObject.address = [newObjectSourceArray[2]];
            newObject.category.push(newObjectSourceArray[3]);
            newObject.address.push(newObjectSourceArray[4]);
            newObject.lat = [];
            newObject.lng = [];
        } else if (newObjectSourceArray.length === 7) {
            newObject.fullName = newObjectSourceArray[0];
            newObject.category = [newObjectSourceArray[1]];
            newObject.address = [newObjectSourceArray[2]];
            newObject.category.push(newObjectSourceArray[3]);
            newObject.address.push(newObjectSourceArray[4]);
            newObject.category.push(newObjectSourceArray[5]);
            newObject.address.push(newObjectSourceArray[6]);
            newObject.lat = [];
            newObject.lng = [];
        } else if (newObjectSourceArray.length === 9) {
            newObject.fullName = newObjectSourceArray[0];
            newObject.category = [newObjectSourceArray[1]];
            newObject.address = [newObjectSourceArray[2]];
            newObject.category.push(newObjectSourceArray[3]);
            newObject.address.push(newObjectSourceArray[4]);
            newObject.category.push(newObjectSourceArray[5]);
            newObject.address.push(newObjectSourceArray[6]);
            newObject.category.push(newObjectSourceArray[7]);
            newObject.address.push(newObjectSourceArray[8]);
            newObject.lat = [];
            newObject.lng = [];
        } else if (newObjectSourceArray.length === 11) {
            newObject.fullName = newObjectSourceArray[0];
            newObject.category = [newObjectSourceArray[1]];
            newObject.address = [newObjectSourceArray[2]];
            newObject.category.push(newObjectSourceArray[3]);
            newObject.address.push(newObjectSourceArray[4]);
            newObject.category.push(newObjectSourceArray[5]);
            newObject.address.push(newObjectSourceArray[6]);
            newObject.category.push(newObjectSourceArray[7]);
            newObject.address.push(newObjectSourceArray[8]);
            newObject.category.push(newObjectSourceArray[9]);
            newObject.address.push(newObjectSourceArray[10]);
            newObject.lat = [];
            newObject.lng = [];
        }

        if (isEmpty(newObject) === false) {
            var starName = newObject.fullName;
            for (var i = 0; i < newObject.category.length; i++) {
                var starCategory = newObject.category[i];
                var starAddress = newObject.address[i];
                //var starlat = newObject.lat[i];
                //var starlng = starItem.lng[i];
                var starObject = {
                    fullName: starName,
                    category: starCategory,
                    address: starAddress,
                    //lat: starlat,
                    //lng: starlng
                };
                self.walkOfFameList.push(new self.Star(starObject));
                //console.log(newObject);
            }

        }
    }

};
        /*
        completeStarDataModel.forEach(function(starItem) {
            var starName = starItem.fullName;
            for (var i = 0; i < starItem.category.length; i++) {
                var starCategory = starItem.category[i];
                var starAddress = starItem.address[i];
                var starlat = starItem.lat[i];
                var starlng = starItem.lng[i];
                var starObject = {
                    fullName: starName,
                    category: starCategory,
                    address: starAddress,
                    //lat: starlat,
                    //lng: starlng
                };
                self.walkOfFameList.push(new self.Star(starObject));
                //console.log("item complete: " + starName);
            }
        }); */


        //Pushing the new newObject sorted above into the completeStarDataModel && newObject.fullName !== "Louis Armstrong"




var geocodeCounter = 0;
var geoCodeAll = function() {

    var currentObject = completeStarDataModel[geocodeCounter];
    var currentAddressLength = currentObject.address.length;
    var currentAddressNumber = 0;

    var geocodeObject = function() {

        var searchURL = "https://maps.googleapis.com/maps/api/geocode/"
        var addressString = currentObject.address[currentAddressNumber] + ",+Los+Angeles,+CA";
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + addressString + ",+Los+Angeles,+CA",
                null,
                function(data, status) {
                    //console.log("worked");
                    //console.log(geocodeCounter);
                    if (data.status == "OK") {
                        ///console.log(data);
                        var p = data.results[0].geometry.location;
                        //console.log(p.lat);
                        //console.log(p.lng);
                        currentObject.lat.push(p.lat);
                        currentObject.lng.push(p.lng);
                    } else {
                        currentObject.lat.push(99);
                        currentObject.lng.push(99);
                    }
                    currentAddressNumber++

                })
            .done(function() {
                if (currentAddressNumber < currentAddressLength) {
                    geocodeObject();
                } else if (geocodeCounter < 2400) {
                    geocodeCounter++
                    geoCodeAll();
                } else {
                    var completeStarDataModeltoString = JSON.stringify(completeStarDataModel);
                    //console.log(completeStarDataModeltoString);
                    document.body.appendChild(document.createElement("p")).innerHTML = completeStarDataModeltoString;
                }
            });
    };
    geocodeObject();
};


//This is ajax request with specific parameters requested by Wikipedia's API in
//order to get the full information from the walk of fame list page
/*
$.ajax({
    url: wikiUrl,
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
    //console.log("1 Wiki returns full list");
    sortTheData(wikiItems);
    //console.log("2 All Wiki data sorted");

    //geoCodeAll();

    //Activates KO on ViewModel
    //ko.applyBindings(new ViewModel());

}); */
