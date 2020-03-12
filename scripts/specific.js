// refer to question 2 before development starts for scope document
// get URL query string

function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

// fetch API
fetch("https://api.magicthegathering.io/v1/cards/" + id).then(function (result) {
    return result.json();
}).then(function (json) {
    checkForQuery(json);
    displayCard(json);
    
});

function checkForQuery(magic){
    // Get URL
    var url = new URL(window.location.href); 
    // get everyting after "?id=" in URL
    var query = url.searchParams.get("id");
    
    // All cards have ID-Length = 36
    if(query.length < 36){
        var container = document.getElementById("cardDetails");
        var missingQuery = document.createElement("h2");
        missingQuery.innerHTML = "Missing Query String";
        container.appendChild(missingQuery);
    }
    
}



function displayCard(magic){
    
   // console.log(Object.keys(magic.card)[0]) // get key in object
    // ADD IMAGE TO HTML
    var imgContainer = document.getElementById("cardImage");
    var image = document.createElement("img");
    image.setAttribute("src", magic.card.imageUrl);
    image.style.width = "100%";
    imgContainer.appendChild(image);
    
    // ADD DETAILS TO HTML
    var cardDetails = document.getElementById("cardDetails");
    var cardH2      = document.createElement("h2"),
        about       = document.createElement("div"),
        rare        = document.createElement("div"),
        color       = document.createElement("div");
    
    //Uppercase First Letter
    function keyToUpper (toUpper){
        return (Object.keys(magic.card)[toUpper].charAt(0).toUpperCase() + Object.keys(magic.card)[toUpper].slice(1));
    };
    
    // Content to Elements
    cardH2.textContent = magic.card.name;
    about.innerHTML = "<b>About: </b>" + magic.card.text;
    rare.innerHTML = "<b>" + keyToUpper(9) + " : </b>" + magic.card.rarity;
    color.innerHTML = "<b>" + keyToUpper(3) + ": </b>" + magic.card.colors;
    
    cardDetails.appendChild(cardH2);
    cardDetails.appendChild(about);
    cardDetails.appendChild(rare);
    cardDetails.appendChild(color);
   
    
    // Used to find index of key
    /*
  for (var key in magic.card) {
    if (magic.card.hasOwnProperty(key)) {
        console.log(key + " -> " + magic.card[key]);
    }
  }  
    */
}

