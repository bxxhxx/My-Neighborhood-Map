//Make Star prototype with three specific parameters
var Star = function(starObject) {
    this.fullName = ko.observable(starObject.fullName);
    this.category = ko.observable(starObject.category);
    this.address = ko.observable(starObject.address);
    //starts the page with items hidden (unless a category is clicked)
    this.show = ko.observable(false);
};

//Create knockout ViewModel function
var ViewModel = function() {
    //Make a hook to grab the context in the lower level scope
    var self = this;
    //Make the first map with specific parameters using google map API
    this.map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 34.101630,
            lng: -118.326684
        },
        zoom: 15
    });
    //Create a KO observable array
    this.walkOfFameList = ko.observableArray([]);

    //Create a KO observable that uses a data bind to search input box
    this.query = ko.observable("");
    //Prevents a page reload if one uses the submit on the search box
    var searchForm = document.getElementById("searchForm");
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
    }, false);

    //Create a KO array with all main five categories
    this.category = ko.observableArray(['Live performance', 'Motion pictures', 'Radio', 'Recording', 'Television']);

    //Takes each object (starItem) from the completeStarDataModel and creates one or more
    //star object based on how many categories the named star has. Then each of these new
    //star objects are pushed into walkOfFameList.
    completeStarDataModel.forEach(function(starItem) {
        var starName = starItem.fullName;
        for (var i = 0; i < starItem.category.length; i++) {
            var starCategory = starItem.category[i];
            var starAddress = starItem.address[i];
            var starObject = {
                fullName: starName,
                category: starCategory,
                address: starAddress
            };
            self.walkOfFameList.push(new Star(starObject));
        }
    });

    //Make search window which compares the current search window value aka query to
    //all the names in the list (using indexOf). If it finds it, it sets the show value to true,
    //if not, sets it to false. It also clears the current category.
    this.search = function(value) {
        self.currentCategory("");
        self.walkOfFameList().forEach(function(star) {
            if (value == false) {
                star.show(false);
            } else if (star.fullName().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                star.show(true);
            } else {
                star.show(false);
            }
        });
    };

    //When query/searchBox changes, run the search function
    self.query.subscribe(self.search);

    //Make a method that allows us to tap in to google's geo code API
    this.geocoder = new google.maps.Geocoder;

    //Makes a marker for any given item on the list
    this.markerMaker = function(walkOfFameListItem) {
        //using geocoder API
        self.geocoder.geocode({
                address: walkOfFameListItem.address() + ", Los Angeles, CA, USA"
            },
            //Call back function that creates the marker based on the result
            //of the geocode lookup
            function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        var marker = new google.maps.Marker({
                            map: self.map,
                            animation: google.maps.Animation.DROP,
                            position: results[0].geometry.location
                        });
                        //Three variables that will be used in windowContent
                        var wikiLink = "";
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
                            var windowContent = '<p>' + fullName + '</p>' +
                                '<p>' + address + '</p>' +
                                //target blank opens the clicked page on a new tab
                                '<p>' + '<a target="_blank" href="' + wikiLink + '">Link to Wikipedia</a></p>';
                            //Make info window using google map API
                            var infowindow = new google.maps.InfoWindow({
                                content: windowContent
                            });
                            //Make toggleBounce switch
                            var toggleBounce = function() {
                                if (marker.getAnimation() !== null) {
                                    marker.setAnimation(null);
                                } else {
                                    marker.setAnimation(google.maps.Animation.BOUNCE);
                                }
                            };
                            //adds an event listener on click that opens info window and calls
                            //toggle function
                            marker.addListener('click', function() {
                                infowindow.open(self.map, marker);
                                toggleBounce();
                            });
                        });
                    }
                }
            });
    };


    //A new observable that captures whatever category is clicked and triggers
    //a visible style change
    this.currentCategory = ko.observable("");
    //compares data from category click to each walkOfFameList item
    // and shows ("true") matching items; hides ("false") un-matching items
    this.categorySelector = function(data) {
        self.currentCategory(data);
        //Clear searchBox when the category is clicked
        var searchBox = document.getElementById("searchBox");
        searchBox.value = "";
        //Loop to show only the selected categories
        for (i = 0; i < self.walkOfFameList().length; i++) {
            if (data === self.walkOfFameList()[i].category()) {
                self.walkOfFameList()[i].show(true);
            } else {
                self.walkOfFameList()[i].show(false);
            }
        }
    }

    //Make computed observables that hides the list (the red box) if there is no
    //search content or selected category
    this.showListDiv = ko.computed(function() {
        if (self.currentCategory() === "" && self.query() === "") {
            /*
            if ($(window).width() <= 450) {
                var mapElement = document.getElementById("map");
                mapElement.style.height = "65%";
            };*/
            return false;
        } else {/*
            if ($(window).width() <= 450) {
                var mapElement = document.getElementById("map");
                mapElement.style.height = "50%";
            };*/
            return true;
        }
    });
};
