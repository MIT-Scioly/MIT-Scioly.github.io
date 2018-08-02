// @ts-check

var outerHeaders = {
    'Tournament Info': ["Tournament Policies", "Tournament Schedule", "Awards Ceremony", "Registration", "Health and Safety"],
    'Logistics': ["Location", "Hotels", "Parking", "Packing Checklist"],
    'Info for Teams': ["Event Pages", "Homerooms", "Required Forms", "Wristband Procedures", "Rules Clarification", "Arbitration"],
    'Updates': [],
    'Sponsors': ["Become a Sponsor"],
    'About Us': ["History", "The Team", "Contact Us", "Archives"]
};

var links = {
    "Tournament Schedule": "tournament-schedule.html"
    // TODO: add links to all pages
};

// Create Upper Nav Bar
var outerList = document.getElementsByTagName('nav')[0]
    .appendChild(document.createElement('ul'));

for(var header in outerHeaders) {
    var li = outerList.appendChild(document.createElement('li'));
    li.className = "dropdown";
    var children = outerHeaders[header];
    if(children.length > 0) {
        li.innerText = header;
        var innerDiv = li.appendChild(document.createElement('div'));
        innerDiv.className = "dropdown-content";
        for(var i = 0; i < children.length; i++) {
            var childName = children[i];
            var child = innerDiv.appendChild(document.createElement('a'));
            if(childName in links)
                child.setAttribute('href', links[childName]);
            child.innerText = childName;
        }
    } else {
        var anchor = li.appendChild(document.createElement('a'));
        if(header in links)
            anchor.setAttribute('href', links[header]);
        anchor.innerText = header;
    }
}

function addSMIcon(parent, classString, link) {
    var anchor = parent.appendChild(document.createElement("a"));
    anchor.setAttribute("href", link);
    anchor.className = classString;
}

// Create Footer
var footer = document.getElementsByTagName("footer")[0];
footer.appendChild(document.createElement('hr'));
var socialMedia = footer.appendChild(document.createElement('div'));
socialMedia.className = "social-media";
// TODO: add links
addSMIcon(socialMedia, "fa fa-facebook", "#");
addSMIcon(socialMedia, "fa fa-snapchat-ghost", "#");
addSMIcon(socialMedia, "fa fa-instagram", "#");
var lowerNav = footer.appendChild(document.createElement('div'));
lowerNav.className = "lower-nav";
footer.appendChild(document.createElement('hr'));
var copyright = footer.appendChild(document.createElement('div'));
copyright.id = "copyright";
var leftSpan = copyright.appendChild(document.createElement('span'));
leftSpan.setAttribute("style", "float: left;");
leftSpan.innerHTML = "&copy MIT Science Olympiad, 2019"; // TODO: make this update in code
// Use innerHTML in the line above to make &copy render correctly
var rightSpan = copyright.appendChild(document.createElement('span'));
rightSpan.setAttribute("style", "float: right;");
rightSpan.innerText = "Powered by not Squarespace"; // TODO: change this to something useful

// Populate lower-nav
for(header in outerHeaders) {
    var col = lowerNav.appendChild(document.createElement("div"));
    col.className = "column";
    var children = outerHeaders[header];
    if(children.length > 0){ 
        col.innerText = header;
        var ul = col.appendChild(document.createElement("ul"));
        for(var i = 0; i < children.length; i++) {
            var li = ul.appendChild(document.createElement("li"));
            var childName = children[i];
            if(childName in links) {
                var link = li.appendChild(document.createElement("a"));
                link.setAttribute("href", links[childName]);
                link.innerText = childName;
            } else {
                li.innerText = childName;
            }
        }
    } else {
        if(header in links) {
            var link = col.appendChild(document.createElement("a"));
            link.setAttribute("href", links[header]);
            link.innerText = header;
        } else {
            col.innerText = header;
        }
    }
}

// Social Media icon import
var socialMediaImport = document.getElementsByTagName("head")[0].appendChild(document.createElement("link"));
socialMediaImport.setAttribute("rel", "stylesheet");
socialMediaImport.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");