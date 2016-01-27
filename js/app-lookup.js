//Create knockout ViewModel function
var ViewModel = function() {
    //Make a hook to grab the context in the lower level scope
    var self = this;

    //Make Star prototype with the following specific parameters
    this.Star = function(starObject) {
        this.fullName = ko.observable(starObject.fullName);
        this.category = ko.observable(starObject.category);
        this.address = starObject.address;
        //This star has been chosen either through search or category selection
        this.chosen = ko.observable(false);
        //The order number in the list from the serach or category selecton
        this.order = ko.observable(0);
        //Hold the context of the star item
        var starSelf = this;
        //Computes if an item should be shown on the list based on other KO observables
        this.show = ko.computed(function() {
            //If a star is chosen and is within the 20 position of the range start, it
            //will show true
            if ((starSelf.chosen() === true) && (starSelf.order() >= self.rangeStart()) &&
                (starSelf.order() < (self.rangeStart() + 20))) {
                return true;
                //self.starSetter()
            } else {
                //Otherwise it will not show
                return false;
            }
        });
        this.marker = new google.maps.Marker({
            map: null,
            animation: google.maps.Animation.DROP,
            position: null,
            icon: "image/smallstar.png"
        });
    };

    //Create a KO observable array
    this.walkOfFameList = ko.observableArray([]);

    //Create a KO observable that uses a data bind to search input box
    this.query = ko.observable("");

    //A new observable that captures whatever category is clicked and triggers
    //a visible style change
    this.currentCategory = ko.observable("");
    //It recieves the clicked star from the list
    this.currentStar = ko.observable(null);
    //reference point for ordering each search list
    this.newOrder = 0;
    //highest value in current order
    this.topOrder = 0;

    this.infowindow = new google.maps.InfoWindow();

    //Set North West, South East bounderies for the map and attach them to the
    //newly created map (helpful for mobil use)
    var nwCorner = new google.maps.LatLng(34.1016067, -118.347);
    var seCorner = new google.maps.LatLng(34.0978051, -118.3166061);
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(nwCorner);
    bounds.extend(seCorner);

    map.fitBounds(bounds);

    //Prevents a page reload if one uses the submit on the search box
    var searchForm = document.getElementById("searchForm");
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
    }, false);

    //Create a KO array with all main five categories
    this.category = ko.observableArray(['Live performance', 'Motion pictures', 'Radio', 'Recording', 'Television']);
    //range refers to start position in the chosen item group
    this.rangeStart = ko.observable(0);

    //Takes each object (starItem) from the completeStarDataModel and creates one or more
    //star objects based on how many categories the named star has. Then each of these new
    //star objects are pushed into walkOfFameList.

    completeStarDataModel.forEach(function(starItem) {
        var starName = starItem.fullName;
        for (var i = 0; i < starItem.category.length; i++) {
            var starCategory = starItem.category[i];
            var starAddress = starItem.address[i];
            //var starlat = starItem.lat[i];
            //var starlng = starItem.lng[i];
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
    });

    //Make search window which compares the current search window value aka query to
    //all the names in the list (using indexOf). If it finds it, it sets the chosen value to true,
    //if not, sets it to false. Then it checks to see if the chosen item is in the show selection.
    //If so, it places a star in teh map via star setter function.
    this.search = function(value) {
        self.currentCategory("");
        self.newOrder = 0;
        self.topOrder = 0;
        self.walkOfFameList().forEach(function(star) {
            if (value == false) {
                star.chosen(false);
                star.marker.setMap(null);
            } else if (star.fullName().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                star.chosen(true);
                star.order(self.newOrder);
                self.topOrder = self.newOrder;
                if (star.show() === true) {
                    self.starSetter(star);
                }
                self.newOrder++;
            } else {
                //sets unmatched stars to unchosen and removes their stars from the map
                star.chosen(false);
                star.marker.setMap(null);
            }
        });
    };
    //Enters clear string into KO observables currentCategory and query, triggering
    //showListDiv to computed observable to hide the item/list
    this.clearButton = function() {
        self.currentCategory("");
        self.query("");
        self.rangeStart(0);
        self.newOrder = 0;
        self.topOrder = 0;
        //empties all stars from the map
        for (var i = 0; i < self.walkOfFameList().length; i++) {
            if (self.walkOfFameList()[i].marker.map !== null) {
                self.walkOfFameList()[i].marker.setMap(null);
            }
        };
    };

    //When query/searchBox changes, run the search function
    self.query.subscribe(self.search);

    //Looks up latlng for a star, feeds that position to the marker, and adds it to the map.
    //Also makes the marker clickable with the chooseStar function.
    this.starSetter = function(walkOfFameListItem) {

        var searchURL = "https://maps.googleapis.com/maps/api/geocode/"
        var addressString = walkOfFameListItem.address + ",+Los+Angeles,+CA";
        var pos;
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + addressString + ",+Los+Angeles,+CA",
            null,
            function(data, status) {
                //console.log("worked");
                //console.log(geocodeCounter);
                if (data.status == "OK") {
                    //console.log(data);
                    pos = data.results[0].geometry.location;
                    //console.log(pos);
                    //console.log(p.lat);
                    //console.log(p.lng);
                    walkOfFameListItem.marker.setPosition(pos);
                    walkOfFameListItem.marker.setMap(map);
                } else {
                    console.log(status);
                }


            });
        /*.done(function() {
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
        })*/


    };

    this.chooseStar = function(walkOfFameListItem) {
        //If there is already a currentStar, stop the bounce. Then make the clicked item
        //the currentStar
        if (self.currentStar()) {
            self.currentStar().marker.setAnimation(null);
        };
        self.currentStar(walkOfFameListItem);
        //Then open the info window
        self.infoActivate(self.currentStar());
    };

    //Switches between the state of bouncing and not bouncing
    this.toggleBounce = function(walkOfFameListItem) {
        if (walkOfFameListItem.marker.getAnimation() !== null) {
            walkOfFameListItem.marker.setAnimation(null);
        } else {
            walkOfFameListItem.marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    };

    //Reconstructs the info window for a new marker
    this.infoActivate = function(walkOfFameListItem) {
        var wikiLink = "";
        //Using Wikipedia API to collect the Walk of Fame Star data
        var wikiUrl = "https://en.wikipedia.org/w/api.php";
        var fullName = walkOfFameListItem.fullName();
        var address = walkOfFameListItem.address;
        //ajax request to search fullName in wikipedia
        $.ajax({
            url: wikiUrl,
            data: {
                action: "opensearch",
                search: fullName,
                format: "json",
                limit: 1, //this parameter brings the first top item
                namespace: 0 //this namespace searches the title of the Wiki articles
            },
            dataType: "jsonp"
        }).done(function(response) {
            wikiLink = response[3][0];
            //Construct html for windowContent
            var windowContent = '<div class="infoWindow"><p>' + fullName + '</p>' +
                '<p>' + address + '</p>' +
                //target blank opens the clicked page on a new tab
                '<p>' + '<a target="_blank" href="' + wikiLink + '">Link to Wikipedia</a></p></div>';
            //Inject the content to info window
            self.infowindow.setContent(windowContent);
            //Opens the info window on the chosen item
            self.infowindow.open(map, walkOfFameListItem.marker);
            self.toggleBounce(walkOfFameListItem);
        });
    };

    //Once a category is selected, it clears the searchbox and other counters.
    //Then it loops through all items, setting any matching items to chosen.
    this.categorySelector = function(data) {
        self.clearButton();
        self.currentCategory(data);

        for (var i = 0, len = self.walkOfFameList().length; i < len; i++) {
            if (data === self.walkOfFameList()[i].category()) {
                self.walkOfFameList()[i].chosen(true);
                self.walkOfFameList()[i].order(self.newOrder);
                self.topOrder = self.newOrder;
                if (self.walkOfFameList()[i].show() === true) {
                    self.starSetter(self.walkOfFameList()[i]);
                }
                self.newOrder++;
            } else {
                self.walkOfFameList()[i].chosen(false);
                self.walkOfFameList()[i].order(-1); //makes sure order below any show sift
            }
        }
    };

    //It adds 20 to range start position and updates the list advancing through the
    //next 20 names.
    this.nextRange = function() {
        var rangeStart = self.rangeStart();
        rangeStart = rangeStart + 20;
        if (rangeStart < self.topOrder) {
            self.rangeStart(rangeStart);
        }
        for (var i = 0, len = self.walkOfFameList().length; i < len; i++) {
            if (self.walkOfFameList()[i].show() === true) {
                self.starSetter(self.walkOfFameList()[i]);
            }
        }
    };

    //It goes back to the previous range position
    this.previousRange = function() {
        var rangeStart = self.rangeStart();
        rangeStart = rangeStart - 20;
        if (rangeStart < 0) {
            rangeStart = 0;
        }
        self.rangeStart(rangeStart);
        for (var i = 0, len = self.walkOfFameList().length; i < len; i++) {
            if (self.walkOfFameList()[i].show() === true) {
                self.starSetter(self.walkOfFameList()[i]);
            }
        }
    };

    //unhides the list once all prior javascript is loaded
    var listElem = document.getElementById("list");
    listElem.style.height = "72%";
    //console.log("4 loading Marilyn");
    self.query("Louis Armstrong");



};
//Make the first map with specific parameters using google map API
map = new google.maps.Map(document.getElementById('map'), {
    center: {
        lat: 34.101630,
        lng: -118.326684
    },
    zoom: 15
});

//Start the viewModel
ko.applyBindings(new ViewModel());

//Next sequence is used to build a more robust data set from WikiPedia

//A function to test for empty objects created during the data sift (used in pushObjects)


isEmpty = function(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;

}

//This function sorts the data coming from Wikipedia (ajax request)
sortTheData = function(response) {
    //Using split to divide up the raw data from wikipedia in to info strings
    var rawDataArray = response.split("| [[");
    //var clean1DataArray = []; <-- looks extraneous

    console.log("sort start");

    //This "for loop" will restructure each data string into a more coherent data object
    //It will skip item [0] which was header information
    for (var i = 1; i < rawDataArray.length; i++) {
        var newObject = {};

        //Using replace function to get rid off extraenous characters
        rawDataArray[i] = rawDataArray[i].replace("]]", "");
        rawDataArray[i] = rawDataArray[i].replace(/\n\|-\n/g, "||");
        rawDataArray[i] = rawDataArray[i].replace(/\|\|\|/g, "||");
        //Splits different category of information based on the double pipe
        var newObjectSourceArray = rawDataArray[i].split("||");

        //gets rid of last extraneous item in the newObjectSourceArray
        newObjectSourceArray.pop();

        //This "for loop" trims the white space around data strings
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

        //The following function ues "if/else if's" to direct the data into named properties
        //on the empty newObject
        var sortArrays = function(newObjectSourceArray, newObject) {

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
        };

        sortArrays(newObjectSourceArray, newObject);
        console.log("finished sort");
        //This function checks to see if newObject has more than one star Address/Category,
        // thenformats new objects from these, then uses Star prototyper, then pushes individual items
        //into walkOfFameList
        var pushObjects = function(newObject) {
            if (isEmpty(newObject) === false) {
                var starName = newObject.fullName;
                console.log("name in pushObjects: " + starName);
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
                    ViewModel.walkOfFameList.push(new ViewModel.Star(starObject));
                    //console.log(newObject);
                }
            }
        };

        pushObjects(newObject);
        console.log("finished push");
    }
};

console.log("ajax starting");

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
    console.log("1 Wiki returns full list");
    //sortTheData(wikiItems);
    console.log("sort finish");

    //geoCodeAll();

    //Activates KO on ViewModel
    //ko.applyBindings(new ViewModel());

});
