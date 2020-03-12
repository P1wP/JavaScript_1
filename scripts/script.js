// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

fetch("https://api.magicthegathering.io/v1/cards").then(function (result) {
    return result.json();
}).then(function (json) {
    console.log(json);
    displayResults(json);
    searchButton(json);
});

function displayResults (magic) {
    
    // CARDS FROM API TO HTML
    for (var i = 0; i < magic.cards.length; i++){
       // Get Card div by ID
       var cardsId = document.getElementById("cards");
        
       // Make divs for cards
       var col_sm_4 = document.createElement("DIV");
       var cardContainer = document.createElement("DIV");
        
       // Add class to divs
       col_sm_4.setAttribute("class", "col-sm-4");
       col_sm_4.style.height = "646px";                         //fix for API duplicates
       cardContainer.setAttribute("class", "card-container");
       cardContainer.setAttribute("ID", "delete");
       //cardContainer.style.height = "616px";
       
       // Create tags for text
       var myh4 = document.createElement("h4"),
           image = document.createElement("img"),
           link = document.createElement("a");
        
        // add class to link
        link.setAttribute("class", "btn btn-success");
        
        // add value/text
        myh4.textContent = magic.cards[i].name;
        image.setAttribute("src", magic.cards[i].imageUrl);
        link.setAttribute("href", "card-specific.html?id=" + magic.cards[i].id);
        link.textContent = "View More"
        image.style.width = "100%";
         
        // Append to div
        cardContainer.appendChild(myh4);
        cardContainer.appendChild(image);
        cardContainer.appendChild(link);
        col_sm_4.appendChild(cardContainer);
        cardsId.appendChild(col_sm_4);
    } // END FOR LOOP
} // END DISPLAYRESULT()

function searchButton(magic){
     // SEARCH BUTTON
    document.getElementById("searchButton").addEventListener('click', function(){
        // Remove all Div with id of cards
        //https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
        var allCards = document.getElementById("cards");
       
        while (allCards.firstChild) {
            allCards.removeChild(allCards.firstChild);
        }
        
        
        // Get value of input field.
        var searchInput = document.getElementById("search").value;
        
        // remove special char in cards names
        var columns = {};
        
        for ( var i = 0; i < magic.cards.length; i++){
            var key = "card" + i;
            columns[key] = {
                name: magic.cards[i].name.replace(/[^a-zA-Z0-9 " "]/g, "")
            }; 
    
        }
        
        // change first letter to uppcase and rest to lowercase. 
        searchInput = searchInput.charAt(0).toUpperCase() + searchInput.substring(1).toLowerCase();
            
        
        // check for result
        var errorTest = "No match found";
        var result = magic.cards.filter(function(o){
        
            // Check cardnames
            if (o.name.replace(/[^a-zA-Z0-9 " "]/g, "").includes(searchInput)){
                return(o.name.replace(/[^a-zA-Z0-9 " "]/g, "").includes(searchInput));
            }
            // Check artist names
            else if (o.artist.replace(/[^a-zA-Z0-9 " "]/g, "").includes(searchInput)){
                return(o.artist.replace(/[^a-zA-Z0-9 " "]/g, "").includes(searchInput));
            }
            // Check card Number
            else if (o.number === searchInput){
                return(o.number === searchInput);
            }
            // Check card color
            else if (o.colors[0] === searchInput){
                return (o.colors[0] === searchInput);
            }
          
           
        })
        
        // Make new Array
        var testArray = [];
        testArray.push(result);
        
        
        // Error OR Result of search
        if (testArray[0].length < 1){                       // Length Lower than 1
            var cardsId = document.getElementById("cards");
            var errorh2 = document.createElement("h2");
            errorh2.textContent = "No match found";
            cardsId.appendChild(errorh2);
        }else{                                              // Length higher than 1
            // CARDS FROM API TO HTML
            for (var i = 0; i < testArray[0].length; i++){
                // Get Card div by ID
                var cardsId = document.getElementById("cards");

                // Make divs for cards
                var col_sm_4 = document.createElement("DIV");
                var cardContainer = document.createElement("DIV");

                // Add class to divs
                col_sm_4.setAttribute("class", "col-sm-4");
                col_sm_4.style.height = "646px";                         //fix for API duplicates
                cardContainer.setAttribute("class", "card-container");
                cardContainer.setAttribute("ID", "delete");
                //cardContainer.style.height = "616px";

                // Create tags for text
                var myh4 = document.createElement("h4"),
                    image = document.createElement("img"),
                    link = document.createElement("a");
                // add class to link
                link.setAttribute("class", "btn btn-success");
        
                // add value/text
                myh4.textContent = testArray[0][i].name;
                image.textContent = "src = '" + testArray[0][i].imageUrl;
                image.setAttribute("src", testArray[0][i].imageUrl);
                link.setAttribute("href", "card-specific.html?id=" + testArray[0][i].id);    // removed ID simulate a missing querry string
                link.textContent = "View More"
                image.style.width = "100%";
                
                // Append to div
                cardContainer.appendChild(myh4);
                cardContainer.appendChild(image);
                cardContainer.appendChild(link);
                col_sm_4.appendChild(cardContainer);
                cardsId.appendChild(col_sm_4);
            }
                
                
                
            
        }
        
        
        
        
        
   
        
       
    })
}