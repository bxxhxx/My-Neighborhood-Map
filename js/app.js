//Create knockout ViewModel function
var ViewModel = function() {
    //Make a hook to grab the context in the lower level scope
    var self = this;

    //Make Star prototype with the following specific parameters
    this.Star = function(starObject) {
        this.fullName = ko.observable(starObject.fullName);
        this.category = ko.observable(starObject.category);
        this.address = ko.observable(starObject.address);
        this.lat = ko.observable(starObject.lat);
        this.lng = ko.observable(starObject.lng);
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
            position: {
                lat: starSelf.lat(),
                lng: starSelf.lng()
            },
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
            var starlat = starItem.lat[i];
            var starlng = starItem.lng[i];
            var starObject = {
                fullName: starName,
                category: starCategory,
                address: starAddress,
                lat: starlat,
                lng: starlng
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
        walkOfFameListItem.marker.setMap(map);
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
        var address = walkOfFameListItem.address();
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
    self.query("Marilyn Monroe");

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
