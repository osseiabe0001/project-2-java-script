var visitorName = prompt("Enter your name:");
var favorite = prompt("What is your favorite thing?");

alert("Hello, " + visitorName + "! Welcome to my favorites website.");

var newSection = document.createElement("section");
var newHeading = document.createElement("h2");
var nameParagraph = document.createElement("p");
var favoriteParagraph = document.createElement("p");
var newButton = document.createElement("button");

newHeading.innerHTML = "Welcome to My Favorites!";
nameParagraph.innerHTML = "Visitor: " + visitorName;
favoriteParagraph.innerHTML = "Favorite: " + favorite;
newButton.innerHTML = "Change Colors";

newSection.appendChild(newHeading);
newSection.appendChild(nameParagraph);
newSection.appendChild(favoriteParagraph);
newSection.appendChild(newButton);
document.body.insertBefore(newSection, document.body.firstChild);

function changeColors() {
    this.style.backgroundColor = "darkblue";
    this.style.color = "white";
    document.body.style.backgroundColor = "lightblue";

    var headings = document.getElementsByTagName("h1");
    var paragraphs = document.getElementsByTagName("p");
    var i;

    for (i = 0; i < headings.length; i++) {
        headings[i].style.color = "darkblue";
    }

    for (i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "darkblue";
    }
}


function addBorder() {
    newSection.style.border = "4px solid purple";
    newSection.style.padding = "20px";
    newSection.style.margin = "20px";
    newSection.style.backgroundColor = "white";
}

function removeBorder() {
    newSection.style.border = "none";
    newSection.style.padding = "0";
    newSection.style.margin = "0";
    newSection.style.backgroundColor = "transparent";
}

newSection.onmouseover = addBorder;
newButton.onclick = changeColors;

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        removeBorder.call(newSection);
    }
});

document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.margin = "0";
document.body.style.padding = "20px";