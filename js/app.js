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
        this.chosen = false;
        //The order number in the list from the serach or category selecton; (-1 means not included)
        this.order = -1;
        //Hold the context of the star item
        var starSelf = this;
        //Ko obeservable that determines whether it shows on the list or not
        //Which is carculated by whether or not an item is in display range and in chosen result
        this.show = ko.observable(false);
        //A placekeeper for attaching the map marker
        this.marker = null;
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
    /*
    var nwCorner = new google.maps.LatLng(34.1016067, -118.347);
    var seCorner = new google.maps.LatLng(34.0978051, -118.3166061);
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(nwCorner);
    bounds.extend(seCorner);

    map.fitBounds(bounds);*/




    //Prevents a page reload if one uses the submit on the search box
    var searchForm = document.getElementById("searchForm");
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
    }, false);

    //Create a KO array with all main five categories
    this.category = ko.observableArray(['Live performance', 'Motion pictures', 'Radio', 'Recording', 'Television']);

    //range refers to start position in the chosen item group
    this.rangeStart = 0;

    //Takes each object (starItem) from the completeStarDataModel and creates one or more
    //star objects based on how many categories the named star has. Then each of these new
    //star objects are pushed into walkOfFameList, a KO obeservable array.
    completeStarDataModel.forEach(function(starItem) {
        var starName = starItem.fullName;
        for (var i = 0; i < starItem.category.length; i++) {
            var starCategory = starItem.category[i];
            var starAddress = starItem.address[i];
            var starObject = {
                fullName: starName,
                category: starCategory,
                address: starAddress,
            };
            self.walkOfFameList.push(new self.Star(starObject));
        }
    });

    //A function that determines whether a star's order number is within the current range.
    //And if so, sets it show value to true and puts a marker on the map.
    this.showRangeEvaluator = function(star) {
        if ((star.order >= self.rangeStart) &&
            (star.order < (self.rangeStart + 20))) {
            star.show(true);
            self.starSetter(star);
        } else {
            //Otherwise it will not show, and any existing marker will be cleared.
            self.starClear(star);
        }

    };

    //A function that removes a marker from the map and insures no name is shows on the current list
    this.starClear = function(star) {

        if (star.marker !== null) {
            star.marker.setMap(null);
        };
        star.show(false);
    };

    //A search function with specific parameters that goes through the walk of fame list and decides
    //whether an item matches the search value/query. If it does, it gives it an order number and sets
    //chosen to true and sends it to showRangeEvaluater to decide whether it's in the show range.
    this.search = function(value) {
        self.currentCategory("");
        self.newOrder = 0;
        self.topOrder = 0;
        self.rangeStart = 0;
        self.walkOfFameList().forEach(function(star) {
            if (value === false || value === null) {
                star.order = -1;
                star.chosen = false;
                self.starClear(star);
            } else if (star.fullName().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                star.chosen = true;
                star.order = self.newOrder;
                self.topOrder = self.newOrder;
                self.showRangeEvaluator(star);
                self.newOrder++;
            } else {
                //sets unmatched stars to unchosen and removes their stars from the map
                star.order = -1;
                star.chosen = false;
                self.starClear(star);
            }
        });
    };

    //A function that clears "empty" string into KO observables currentCategory and query,
    //and it zeros out certain properties.
    this.clearButton = function() {
        self.currentCategory("");
        self.query(null);
        self.rangeStart = 0;
        self.newOrder = 0;
        self.topOrder = 0;
        //empties all stars from the map
        self.walkOfFameList().forEach(function(star) {
            self.starClear(star);
        });
    };

    //When query/searchBox changes, run the search function
    self.query.subscribe(self.search);

    //A function that makes the marker, attaches it to a star object. It looks up latlng for a marker,
    //and feeds that position to the marker, and adds it to the map.
    //Also makes the marker clickable with the chooseStar function.
    this.starSetter = function(walkOfFameListItem) {
        var iconSize;
        //measures the current size of the screen window
        var windowWidth = window.innerWidth;
        //And based on the width, it decides between the mobil or regular size
        if (windowWidth < 701) {
            iconSize = "image/mobilstar.png";
        } else {
            iconSize = "image/smallstar.png";
        }
        //checks to see if marker has previously been made; if "null", makes marker, geocodes, and places on map
        if (walkOfFameListItem.marker === null) {

            walkOfFameListItem.marker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: null,
                icon: iconSize
            })

            var searchURL = "https://maps.googleapis.com/maps/api/geocode/";
            var addressString = walkOfFameListItem.address + ",+Los+Angeles,+CA";
            var pos;
            $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + addressString + ",+Los+Angeles,+CA",
                null,
                function(data, status) {
                    if (data.status == "OK") {

                        pos = data.results[0].geometry.location;
                        walkOfFameListItem.marker.setPosition(pos);

                        walkOfFameListItem.marker.addListener('click', function() {
                            self.chooseStar(walkOfFameListItem)
                        });
                        //makes sure item is still "show" when the marker geocode returns
                        if (walkOfFameListItem.show() === true) {
                            walkOfFameListItem.marker.setMap(map);
                        }

                    } else {
                        console.log(status);
                    }
                });
        } else {
            //used when a marker has previously been made, geocoded, and removed from map; puts it back on map
            walkOfFameListItem.marker.setMap(map);

        }
    };

    //A function that looks to see if there is already a currentStar, stop the bounce.
    //Then make the clicked item the currentStar, then runs the info activate to open
    //the info window on the current star
    this.chooseStar = function(walkOfFameListItem) {
        if (self.currentStar()) {
            self.currentStar().marker.setAnimation(null);
        }
        self.currentStar(walkOfFameListItem);
        //Then opens the info window
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
        self.walkOfFameList().forEach(function(star) {
            if (data === star.category()) {
                star.chosen = true;
                star.order = self.newOrder;
                self.topOrder = self.newOrder;
                self.showRangeEvaluator(star);
                self.newOrder++;
            } else {
                star.order = -1;
                star.chosen = false;
                self.starClear(star);
            }
        });
    };

    //It adds 20 to range start position and updates the list advancing through the
    //next 20 names using range evaluator.
    //(Checks to see if list is advanced past top of list. If so, it doesn't change the rangeStart)
    this.nextRange = function() {
        var updateRange = self.rangeStart + 20;

        if (updateRange < self.topOrder) {
            self.rangeStart = updateRange;
            self.walkOfFameList().forEach(function(star) {
                self.showRangeEvaluator(star);
            });
        }
    };

    //It goes back to the previous range position.
    //Checks to see if range has been reduced below zero position; if so, doesn't change rangeStart
    this.previousRange = function() {
        var updateRange = self.rangeStart - 20;

        if (updateRange >= 0) {
            self.rangeStart = updateRange;
            self.walkOfFameList().forEach(function(star) {
                self.showRangeEvaluator(star);
            });
        }
    };
    //Launch query to demo the app on first load.
    self.query("Charlie Chaplin");

};
