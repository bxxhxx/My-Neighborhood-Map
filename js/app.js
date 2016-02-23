'use strict';

//Knockout ViewModel function
var ViewModel = function() {
    //Make a hook to grab the context in the lower level scope
    var self = this;

    //Initializes the map
    this.startMap = function() {
        var windowWidth = window.innerWidth;
        var zoomLevel = 15;
        var mapLat = 34.1;
        var mapLng = -118.332;
        //changes zoom level for smaller screens
        if ((window.innerHeight > window.innerWidth && window.innerWidth < 701) ||
            (window.innerHeight < window.innerWidth && window.innerWidth < 851)) {
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
        window.map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: mapLat,
                lng: mapLng
            },
            zoom: zoomLevel,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            streetViewControl: false,
            mapTypeControl: false
        });
    };

    this.dataRequest = function() {
        //Starts the google map API
        self.startMap();

        var wikiRequestTimeout = setTimeout(function() {
            self.errorVisibility(true);
            self.errorMessage("Error: Wikipedia request timeout!");
        }, 8000);
        //Initial request to wikipedia for raw data
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
                //clearTimeout on successful response
                clearTimeout(wikiRequestTimeout);
                //Puts the response json into a variable and then runs a sorting function
                var wikiItems = response.query.pages["1310953"].revisions[0]["*"];

                sortTheData(wikiItems);
                //run a function to format data items in KO obs array for use in view model
                self.walkOfFameListMaker();
                //Removes a class that hides duplicate html that will immediately be switched by KO
                $(".listContainerBlock__list").removeClass('hideFirst');
                //Launch query on "CC" to demo the app at first load.
                self.query("Charlie Chaplin");
            })
            //Error handling for wikipedia api fail then uses a default hardcoded data set
            .fail(function() {
                //clearTimeout and instead display ajax fail error
                clearTimeout(wikiRequestTimeout);
                self.errorVisibility(true);
                self.errorMessage("Error: Wikipedia request failure!");
            });
    };

    //Make Star prototype with the following specific parameters
    this.Star = function(starObject) {
        this.fullName = ko.observable(starObject.fullName);
        this.category = ko.observable(starObject.category);
        this.address = starObject.address;
        //"chosen" either through search or category selection; default is false
        this.chosen = false;
        //The order number in the list from the search or category selecton; (-1 means not included)
        this.order = -1;
        //KO observable that determines whether a star "shows" on the list or not,
        //which is calculated by whether or not an item is in display range && in chosen result
        this.show = ko.observable(false);
        //Attaches a map marker, but map, position & icon TBD when fed to "starSetter" function
        this.marker = new google.maps.Marker({
            //map: null,
            map: map,
            animation: google.maps.Animation.DROP,
            position: null,
            icon: null,
            visible: false
        });
        //categoryVisible determines if category is displayed with fullName in list items
        this.categoryVisible = ko.observable(false);
        //marks if a starObject is a "multiple" with other stars with same name but different category.
        //Used for calculating if category should be displayed on screen (see "showRangeEvaluator")
        this.multiple = starObject.multiple;
    };

    this.errorVisibility = ko.observable(false);

    this.errorMessage = ko.observable("");
    //Create a KO observable array for the data set; used with databind for list
    this.walkOfFameList = ko.observableArray([])
        //delays KO changes to HTML until walkOfFameList has completed full load (reduces CPU overhead/time)
        .extend({ rateLimit: { method: "notifyWhenChangesStop", timeout: 100 } });
    //Create a KO observable that uses a data bind to search input box
    this.query = ko.observable("");
    //An observable that captures whatever category is clicked and triggers
    //a visible style change
    this.currentCategory = ko.observable("");
    //Recieves the clicked star from the list
    this.currentStar = ko.observable(null);
    //During resize, determines new value for isMobile
    this.resizeMobileCalculator = function() {
        var newHeight = window.innerHeight;
        var newWidth = window.innerWidth;
        //detects "mobile" when screen is portrait & <701w OR landscape <851w - relevant to styling
        if ((newHeight > newWidth && newWidth < 701) ||
            (newHeight < newWidth && newWidth < 851)) {
            return true;
        } else {
            return false;
        }
    };
    //variable to use for resize function
    var $window = $(window);
    //resize function checks for mobil, chooses the correct icon size, it also reevalutes list range & recenters map
    $window.resize(function() {
        self.isMobile(self.resizeMobileCalculator());
        self.range = (function() {
            if (self.isMobile() === true) {
                return 5;
            } else {
                return 15;
            }
        })();
        self.walkOfFameList().forEach(function(star) {
            var activeIcon;

            if (self.isMobile() === true) {
                activeIcon = "image/mobilstar.png";
            } else {
                activeIcon = "image/smallstar.png";
            }
            //attach the highlighted "activated" icon
            if (star.marker !== null) {
                star.marker.setIcon(activeIcon);
                self.showRangeEvaluator(star);
            }
        });
        //recenter map
        var windowWidth = window.innerWidth;
        var zoomLevel = 15;
        var mapLat = 34.1;
        var mapLng = -118.332;
        //changes zoom level for smaller screens
        if (self.isMobile() === true) {
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
        map.setCenter({
            lat: mapLat,
            lng: mapLng
        });
    });

    //detects "mobile" when screen is portrait & <701w OR landscape <851w - relevant to styling
    this.isMobile = ko.observable((function() {
        if ((window.innerHeight > window.innerWidth && window.innerWidth < 701) ||
            (window.innerHeight < window.innerWidth && window.innerWidth < 851)) {
            return true;
        } else {
            return false;
        }
    })());
    //reference point for ordering each search list
    this.newOrder = 0;
    //highest value in current order
    this.topOrder = 0;
    //range refers to start position in the chosen item group
    this.rangeStart = 0;
    //range in display depends on screen styling (for mobile or desktop screen)
    this.range = (function() {
        if (self.isMobile() === true) {
            return 5;
        } else {
            return 15;
        }
    })();

    this.infowindow = new google.maps.InfoWindow();

    //Create a KO array with all main five categories
    this.category = ko.observableArray(['Live performance', 'Motion pictures', 'Radio', 'Recording', 'Television']);

    /* Takes each object (starItem) from the completeStarDataModel and creates one or more
     * star objects based on how many categories the named star has. Then each of these new
     * star objects are pushed into walkOfFameList, a KO obeservable array.
     */
    this.walkOfFameListMaker = function() {
        completeStarDataModel.forEach(function(starItem) {
            var starName = starItem.fullName;
            var isStarMultiple = function(starItem) {
                if (starItem.category.length > 1) {
                    return true;
                } else {
                    return false;
                }
            };

            var starMultiple = isStarMultiple(starItem);
            for (var i = 0; i < starItem.category.length; i++) {
                var starCategory = starItem.category[i];

                var starAddress = starItem.address[i];
                var starObject = {
                    fullName: starName,
                    category: starCategory,
                    address: starAddress,
                    multiple: starMultiple
                };
                self.walkOfFameList.push(new self.Star(starObject));
            }
        });
    };

    /* A function that determines whether a star's order number is within the current range.
     * And if so, sets its "show" value to true and puts a marker on the map via starSetter.
     */
    this.showRangeEvaluator = function(star) {
        //self.infoWindow.close();
        if ((star.order >= self.rangeStart) &&
            (star.order < (self.rangeStart + self.range))) {
            star.show(true);
            /* For stars that are "multiple" (same name, more than one star), calculates a true/false
             * for "categoryVisible". This is used to display category on screen when duplicate names
             * appear via name search (to distinguish the category for the stars).
             */
            var setCategoryVisible = function(star) {
                if ((self.currentCategory() === "" && star.multiple === true)) {
                    star.categoryVisible(true);
                } else {
                    star.categoryVisible(false);
                }
            };

            setCategoryVisible(star);
            self.starSetter(star);
        } else {
            //Otherwise it will not show, and any existing marker will be cleared.
            self.starClear(star);
        }
    };

    //A function that removes a marker from the map and ensures no name shows on the current list
    this.starClear = function(star) {
        self.infowindow.close();
        if (star.marker !== null) {
            star.marker.setVisible(false);
        }
        star.show(false);
    };

    /* A search function that takes "value" parameter, that goes through the walk of fame list and decides
     * whether an item matches the search value/query. If it does, it gives it an order number, and sets
     * "chosen" to true, and sends it to showRangeEvaluater to decide whether it's in the "show" range.
     */
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

    //When query/searchBox changes, run the search function (enables "live search")
    self.query.subscribe(self.search);

    /* A function that puts "empty" string into KO observables currentCategory,
     * null to "query", and it zeros out certain properties.
     */
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

    /* For stars that are set "show() === true", a function that looks latlng for a marker,
     * and feeds that position to the marker, and adds it to the map.
     * Also makes the marker clickable with the chooseStar function.
     */
    this.starSetter = function(walkOfFameListItem) {
        //checks if marker already has geocode position; if "null", geocodes, and places on map
        if (walkOfFameListItem.marker.getPosition() === null) {
            var addressString = walkOfFameListItem.address + ",+Los+Angeles,+CA";
            //timeout error message in case of no response from geocoder
            var geocodeRequestTimeout = setTimeout(function() {
                self.errorVisibility(true);
                self.errorMessage("Error: geocode request timeout! Markers Unavailable!");
            }, 8000);
            //Google geocode lookup
            $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + addressString + ",+Los+Angeles,+CA",
                null,
                function(data, status) {
                    //clear timeout when Google geocode responds
                    clearTimeout(geocodeRequestTimeout);
                    if (data.status == "OK") {

                        var pos = data.results[0].geometry.location;
                        walkOfFameListItem.marker.setPosition(pos);

                        walkOfFameListItem.marker.addListener('click', function() {
                            self.chooseStar(walkOfFameListItem);
                        });
                        //makes sure item is still "show" when the marker geocode returns
                        if (walkOfFameListItem.show() === true) {
                            //Mobil checker for icon size
                            var iconImage;
                            if (self.isMobile() === true) {
                                iconImage = "image/mobilstar.png";
                            } else {
                                iconImage = "image/smallstar.png";
                            }
                            walkOfFameListItem.marker.setIcon(iconImage);
                            walkOfFameListItem.marker.setVisible(true);

                        }
                    } else if (data.status === "OVER_QUERY_LIMIT") {
                        //if Google geocode hits a query limit, check to see if item is still
                        //needed on map; if so: repeat the geocode & map set
                        if (walkOfFameListItem.show() === true) {
                            self.starSetter(walkOfFameListItem);
                        }
                        //error message if Google Geocoder returns with any other error message
                    } else {
                        self.errorVisibility(true);
                        self.errorMessage('Error: Geocode -  Message: ' + data.status + '</p>');
                    }
                });
        } else {
            //used when a marker has prior geocod position, but been removed from map; puts it back on map
            //Mobil checker for icon size
            var iconImage;
            if (self.isMobile() === true) {
                iconImage = "image/mobilstar.png";
            } else {
                iconImage = "image/smallstar.png";
            }
            walkOfFameListItem.marker.setIcon(iconImage);
            walkOfFameListItem.marker.setVisible(true);
        }
    };

    /* A function that looks to see if there is already a currentStar, & stops the bounce.
     * Then make the clicked item the currentStar, then runs the infoActivate to open
     * the info window on the current star. Swaps an "Activated" icon to highlight the
     * chosen star.
     */
    this.chooseStar = function(walkOfFameListItem) {
        //change highlighted icon to normal icon for outgoing current star
        var outgoingIcon;
        //size checker
        if (self.isMobile() === true) {
            outgoingIcon = "image/mobilstar.png";
        } else {
            outgoingIcon = "image/smallstar.png";
        }
        // reset current star to non-bounce, no highlight icon
        if (self.currentStar()) {
            self.currentStar().marker.setAnimation(null);
            self.currentStar().marker.setIcon(outgoingIcon);
        }
        //set new current star
        self.currentStar(walkOfFameListItem);
        //now select the highlighted "activated" icon
        var activeIcon;

        if (self.isMobile() === true) {
            activeIcon = "image/mobilstarActivated.png";
        } else {
            activeIcon = "image/smallstarActivated.png";
        }
        //attach the highlighted "activated" icon
        walkOfFameListItem.marker.setIcon(activeIcon);
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

    //Reconstructs & resets the info window for newly selected marker
    this.infoActivate = function(walkOfFameListItem) {
        var wikiLink = "";
        //Using Wikipedia API to collect the Walk of Fame Star data
        var wikiUrl = "https://en.wikipedia.org/w/api.php";
        var fullName = walkOfFameListItem.fullName();
        var address = walkOfFameListItem.address;

        //error handler for  Wikip star link search
        var wikiInfoLinkRequestTimeout = setTimeout(function() {
            var windowContent = '<div class="infoWindow"><p>' + fullName + '</p>' +
                '<p>' + address + '</p>' +
                //error message
                '<p class="error">Wikipedia link unavailable - please try again later!</p></div>';
            //Inject the content to info window
            self.infowindow.setContent(windowContent);
            //Opens the info window on the chosen item
            self.infowindow.open(map, walkOfFameListItem.marker);
            self.toggleBounce(walkOfFameListItem);

        }, 8000);

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
                    '<p>' + '<a target="_blank" href="' + wikiLink + '">Read more at Wikipedia</a></p></div>';
                //Inject the content to info window
                self.infowindow.setContent(windowContent);
                //Opens the info window on the chosen item
                self.infowindow.open(map, walkOfFameListItem.marker);
                self.toggleBounce(walkOfFameListItem);
                //clearTimeout on successful response
                clearTimeout(wikiInfoLinkRequestTimeout);
            })
            //If Wikipedia request fails, places error message in info box
            .fail(function() {
                var windowContent = '<div class="infoWindow"><p>' + fullName + '</p>' +
                    '<p>' + address + '</p>' +
                    //error message
                    '<p class="error">Wikipedia link unavailable - please try again later!</p></div>';
                //Inject the content to info window
                self.infowindow.setContent(windowContent);
                //Opens the info window on the chosen item
                self.infowindow.open(map, walkOfFameListItem.marker);
                self.toggleBounce(walkOfFameListItem);
                //clearTimeout on substitute response
                clearTimeout(wikiInfoLinkRequestTimeout);
            });
    };

    /* categorySelector first clears the searchbox and other counters.
     * Then it loops through all items, setting any matching items to "chosen".
     */
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

    /* Adds the range start position and updates the list advancing through the
     * next 15 names using range evaluator. (Also checks to see if list is advanced
     * past top of list. If so, it doesn't change the rangeStart)
     */
    this.nextRange = function() {
        var updateRange = self.rangeStart + self.range;
        if (updateRange < self.topOrder) {
            self.rangeStart = updateRange;
            self.walkOfFameList().forEach(function(star) {
                self.showRangeEvaluator(star);
            });
        }
    };

    /* Goes back to the previous range position.
     * Checks to see if range has been reduced below zero position; if so, doesn't change rangeStart
     */
    this.previousRange = function() {
        var updateRange = self.rangeStart - self.range;
        if (updateRange >= 0) {
            self.rangeStart = updateRange;
            self.walkOfFameList().forEach(function(star) {
                self.showRangeEvaluator(star);
            });
        }
    };
    //function call that starts the app by requesting list data via wikipeida
    self.dataRequest();
};

//Initial callback from google map API, starts the viewModel
var initMap = function() {
    ko.applyBindings(new ViewModel());
};
