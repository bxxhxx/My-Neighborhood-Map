//Make Star prototype with three specific parameters
/*var Star = function(starObject) {
    this.fullName = ko.observable(starObject.fullName);
    this.category = ko.observable(starObject.category);
    this.address = ko.observable(starObject.address);

    this.chosen = ko.observable(false);
    this.order = ko.observable(0);

    var starSelf = this;
    //starts the page with items hidden (unless a category is clicked)
    this.show = ko.computed(function() {
        if ((starSelf.chosen() === true) && (starSelf.order() >= self.newOrder) &&
            (starSelf.order() < (self.newOrder + 39)) ) {
            return true;
        } else {
            return false;
        }
    });
    this.marker = new google.maps.Marker({
        map: null,
        animation: google.maps.Animation.DROP,
        position: null,
        icon: "image/smallstar.png"
    });
};*/

//Create knockout ViewModel function
var ViewModel = function() {
    //Make a hook to grab the context in the lower level scope
    var self = this;

    this.Star = function(starObject) {
        this.fullName = ko.observable(starObject.fullName);
        this.category = ko.observable(starObject.category);
        this.address = ko.observable(starObject.address);

        this.chosen = ko.observable(false);
        this.order = ko.observable(0);

        var starSelf = this;
        //starts the page with items hidden (unless a category is clicked)
        this.show = ko.computed(function() {
            if ((starSelf.chosen() === true) && (starSelf.order() >= self.rangeStart) &&
                (starSelf.order() < (self.rangeStart + 39))) {
                return true;
            } else {
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

    this.currentStar = ko.observable(null);

    /*var searchBox = document.getElementById("searchBox");
        searchBox.value = "Marilyn Monroe"*/

    //reference point for ordering each search list
    this.newOrder = 0;

    this.infowindow = new google.maps.InfoWindow();

    //Make the first map with specific parameters using google map API
    /*this.map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 34.101630,
            lng: -118.326684
        },
        zoom: 15
    });*/


    //Set North West, South East bounderies for the map and attach them to the
    //newly created map (helpful for mobil use)
    var nwCorner = new google.maps.LatLng(34.1016067, -118.347);
    var seCorner = new google.maps.LatLng(34.0978051, -118.3166061);
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(nwCorner);
    bounds.extend(seCorner);

    map.fitBounds(bounds);
    //self.map.fitBounds(bounds);



    //Prevents a page reload if one uses the submit on the search box
    var searchForm = document.getElementById("searchForm");
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
    }, false);

    //Create a KO array with all main five categories
    this.category = ko.observableArray(['Live performance', 'Motion pictures', 'Radio', 'Recording', 'Television']);

    this.rangeStart = 0;

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
            self.walkOfFameList.push(new self.Star(starObject));
        }
    });

    //Make search window which compares the current search window value aka query to
    //all the names in the list (using indexOf). If it finds it, it sets the show value to true,
    //if not, sets it to false. It also clears the current category.
    this.search = function(value) {
        self.currentCategory("");
        self.newOrder = 0;
        self.walkOfFameList().forEach(function(star) {
            if (value == false) {
                star.chosen(false);
                star.marker.setMap(null);
            } else if (star.fullName().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                star.chosen(true);
                star.order(self.newOrder);
                if (star.show() === true) {
                    self.starSetter(star);
                }
                /*

                if (self.walkOfFameList()[i].show() === true) {
                    self.markerMaker(self.walkOfFameList()[i]);
                    console.log("show is true");
                    */
                self.newOrder++;

            } else {
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
        for (var i = 0; i < self.walkOfFameList().length; i++) {
            if (self.walkOfFameList()[i].marker.map !== null) {
                self.walkOfFameList()[i].marker.setMap(null);
                console.log('tried to set markers to null');
            }
        };
    };

    //When query/searchBox changes, run the search function
    self.query.subscribe(self.search);

    //Make a method that allows us to tap in to google's geo code API
    //this.geocoder = new google.maps.Geocoder(); // now using a different API!!!
    this.starSetter = function(walkOfFameListItem) {

        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + walkOfFameListItem.address() + ",Los Angeles&sensor=false",
            null,
            function(data) {
                console.log("results are back from google");
                var p = data.results[0].geometry.location
                    //var latlng = new google.maps.LatLng(p.lat, p.lng);
                    //var starIcon = "image/smallstar.png";
                    /* walkOfFameListItem.marker = new google.maps.Marker({
                        map: self.map,
                        animation: google.maps.Animation.DROP,
                        position: p,
                        icon: starIcon
                    });*/
                walkOfFameListItem.marker.setPosition(p);
                //walkOfFameListItem.marker.setMap(self.map);
                walkOfFameListItem.marker.setMap(map);
                walkOfFameListItem.marker.addListener('click', function() {
                    //infowindow.open(self.map, walkOfFameListItem.marker);
                    self.chooseStar(walkOfFameListItem);


                });

            });
    };

    this.chooseStar = function(walkOfFameListItem) {
        console.log(self.currentStar());
        console.log(jQuery.isEmptyObject(self.currentStar()));
        if (self.currentStar()) {
            self.currentStar().marker.setAnimation(null);
        };
        self.currentStar(walkOfFameListItem);
        self.infoActivate(self.currentStar());
        //self.toggleBounce(self.currentStar());

    };



    this.toggleBounce = function(walkOfFameListItem) {
        if (walkOfFameListItem.marker.getAnimation() !== null) {
            walkOfFameListItem.marker.setAnimation(null);
        } else {
            walkOfFameListItem.marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }; //Makes a marker for any given item on the list


    this.infoActivate = function(walkOfFameListItem) {

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

            console.log("wiki link return");
            wikiLink = response[3][0];
            //Construct html for windowContent
            var windowContent = '<div class="infoWindow"><p>' + fullName + '</p>' +
                '<p>' + address + '</p>' +
                //target blank opens the clicked page on a new tab
                '<p>' + '<a target="_blank" href="' + wikiLink + '">Link to Wikipedia</a></p></div>';
            //Make info window using google map API
            self.infowindow.setContent(windowContent);


            self.infowindow.open(map, walkOfFameListItem.marker);
            self.toggleBounce(walkOfFameListItem);
            console.log(self.infowindow.anchor)


        });
    };

    //compares data from category click to each walkOfFameList item
    // and shows ("true") matching items; hides ("false") un-matching items
    this.categorySelector = function(data) {
        self.clearButton(); //probably redundant with below
        self.currentCategory(data);
        //Clear searchBox when the category is clicked
        var searchBox = document.getElementById("searchBox");
        searchBox.value = "";
        //Loop to show only the selected categories
        self.newOrder = 0;
        for (var i = 0, len = self.walkOfFameList().length; i < len; i++) {
            if (data === self.walkOfFameList()[i].category()) {
                self.walkOfFameList()[i].chosen(true);
                self.walkOfFameList()[i].order(self.newOrder);

                if (self.walkOfFameList()[i].show() === true) {
                    self.starSetter(self.walkOfFameList()[i]);
                    console.log("show is true");
                }
                self.newOrder++;

            } else {
                self.walkOfFameList()[i].chosen(false);
                self.walkOfFameList()[i].order(-1); //makes sure order below any show sift
            }
        }
    };

    this.listItemOpen = function(walkOfFameListItem) {
        for (var i = 0, len = self.walkOfFameList().length; i < len; i++) {
            if (self.walkOfFameList()[i].infowindow) {
                self.walkOfFameList()[i].infowindow.close();
            }
        }
        walkOfFameListItem.infowindow.open(map, walkOfFameListItem.marker);
    };

    //Make computed observables that hides the list if there is no
    //search content or selected category
    this.showListDiv = ko.computed(function() {
        if (self.currentCategory() === "" && self.query() === "") {
            return false;
        } else {
            return true;
        }
    });
    //unhides the list once all prior javascript is loaded
    var listElem = document.getElementById("list");
    listElem.style.height = "72%";

    self.query("Marilyn Monroe");

};
