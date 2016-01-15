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
                                '<p>' + '<a target="_blank" href="' + wikiLink + '">Link to Wikipedia</a></p>';
                            //Make info window using google map API
                            var infowindow = new google.maps.InfoWindow({
                                content: windowContent
                            });
                            //adds an event listener on click
                            marker.addListener('click', function() {
                                infowindow.open(self.map, marker);
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
        for (i = 0; i < self.walkOfFameList().length; i++) {
            if (data === self.walkOfFameList()[i].category()) {
                self.walkOfFameList()[i].show(true);
            } else {
                self.walkOfFameList()[i].show(false);
            }
        }
    }
};
