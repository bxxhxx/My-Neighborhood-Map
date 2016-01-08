//Using Wikipedia API to collect the Walk of Fame Star data
var wikiUrl = "https://en.wikipedia.org/w/api.php";
//Make an array to store a complete list
var completeStarDataModel = [];
//This function sorts the data coming from Wikipedia (ajax request)
var sortTheData = function(response) {
    //Using split to divide up the raw data from wikipedia in to info strings
    var rawDataArray = response.split("| [[");

    var clean1DataArray = [];
    //This for loop will resturcture each data string into a more coherent data object
    //It will skip item [0] which was header information
    for (var i = 1; i < rawDataArray.length; i++) {
        var newObject = {};
        //Using replace function to get rid off extraenous characters
        rawDataArray[i] = rawDataArray[i].replace("]]", "");
        rawDataArray[i] = rawDataArray[i].replace("\n|-\n|", "||");
        rawDataArray[i] = rawDataArray[i].replace("\n|-\n|", "||");
        rawDataArray[i] = rawDataArray[i].replace("\n|-\n|", "||");
        rawDataArray[i] = rawDataArray[i].replace("\n|-\n|", "||");
        rawDataArray[i] = rawDataArray[i].replace("\n|-\n", "");
        //Splits different category of information based on the double pipe
        newObjectSourceArray = rawDataArray[i].split("||");
        //The following if/else if's directs the data into named properties
        //on the empty newObject
        if (newObjectSourceArray.length === 3) {
            newObject.fullName = newObjectSourceArray[0];
            newObject.category = [newObjectSourceArray[1]];
            newObject.address = [newObjectSourceArray[2]];
        } else if (newObjectSourceArray.length === 5) {
            newObject.fullName = newObjectSourceArray[0];
            newObject.category = [newObjectSourceArray[1]];
            newObject.address = [newObjectSourceArray[2]];
            newObject.category.push(newObjectSourceArray[3]);
            newObject.address.push(newObjectSourceArray[4]);
        } else if (newObjectSourceArray.length === 7) {
            newObject.fullName = newObjectSourceArray[0];
            newObject.category = [newObjectSourceArray[1]];
            newObject.address = [newObjectSourceArray[2]];
            newObject.category.push(newObjectSourceArray[3]);
            newObject.address.push(newObjectSourceArray[4]);
            newObject.category.push(newObjectSourceArray[5]);
            newObject.address.push(newObjectSourceArray[6]);
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
        }
        //Pushing the new newObject sorted above into the completeStarDataModel
        completeStarDataModel.push(newObject);

        //var newObjectSourceArray = rawDataArray[i].split("||")
    }

    /*console.log("Here's the sorted array item 1: ");
    console.log(rawDataArray[1]);
    console.log("Here's the completeStarDataModel item 1 fullName: ");
    console.log(completeStarDataModel[0].fullName);
    console.log(completeStarDataModel[0].category);
    console.log(completeStarDataModel[0].address);*/

}


//This is ajax request with specific parameters requested by Wikipedia's API in
//order to get the full information from the walk of fame list page
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
    //console.log(wikiItems);
    sortTheData(wikiItems);
});
