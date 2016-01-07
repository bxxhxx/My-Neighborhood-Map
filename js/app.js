//Make preliminary list for first trial
var modelList = [{
    firstName: 'Jay',
    lastName: 'Leno',
    category: 'Television',
    address: '6780 Hollywood Blvd.'
}, {
    firstName: 'Robert Z.',
    lastName: 'Leonard',
    category: 'Motion pictures',
    address: '6370 Hollywood Blvd.'
}, {
    firstName: 'Mervyn',
    lastName: 'LeRoy',
    category: 'Motion pictures',
    address: '1560 Vine Street'
}, {
    firstName: 'Jack',
    lastName: 'Lescoulie',
    category: 'Television',
    address: '6500 Hollywood Blvd.'
}, {
    firstName: 'Joan',
    lastName: 'Leslie',
    category: 'Television',
    address: '1560 Vine Street'
}, {
    firstName: 'Sol',
    lastName: 'Lesser',
    category: 'Motion pictures',
    address: '6533 Hollywood Blvd.'
}, {
    firstName: 'Earl',
    lastName: 'Lestz',
    category: 'Motion pictures',
    address: '6807 Hollywood Blvd.'
}, {
    firstName: 'Oscar',
    lastName: 'Levant',
    category: 'Recording',
    address: '6728 Hollywood Blvd.'
}];


//Make Star prototype with four specific parameters
var Star = function(starItem) {

    this.firstName = ko.observable(starItem.firstName);
    this.lastName = ko.observable(starItem.lastName);
    this.category = ko.observable(starItem.category);
    this.address = ko.observable(starItem.address);

    //Computes a full name using KO
    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
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

    //Takes each object from data list and conversts into a Star object
    //using our Star prototype and pushes it into walkOfFame observable array
    modelList.forEach(function(starItem) {
        self.walkOfFameList.push(new Star(starItem));
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
                    }
                }
            });
    };


};


//Activates KO on ViewModel
ko.applyBindings(new ViewModel());
