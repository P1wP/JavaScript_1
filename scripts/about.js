// refer to question 3 before development starts for scope document

// Replace every instance of "Magic" with "Something"
var aboutMain = document.getElementById("aboutText");
var text = aboutMain.innerHTML;

var aboutMore = document.getElementById("moreInfoContent");
var moreText = aboutMore.innerHTML;

function toSomething(text){
    var newText = "";
    newText = text.replace(/magic/gi, "something");              
    newText = text.replace(/Magic/gi, "Something");
    return newText;                                
}
aboutMain.innerHTML = toSomething(text);
aboutMore.innerHTML = toSomething(moreText);

// More info

var trigger = document.getElementById("moreInfoTrigger");
trigger.addEventListener('click', function(){
    var moreInfo = document.getElementById("moreInfoContent");
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "inline-block";
    } else {
        moreInfo.style.display = "none";
    }
    
})