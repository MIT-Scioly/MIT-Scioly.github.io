// @ts-check

var outerHeaders = {
    'Tournament Info': ["Tournament Schedule", "Awards Ceremony", "Registration", "Health and Safety"],
    'Logistics': ["Location", "Hotels", "Parking", "Packing Checklist"],
    'Info for Teams': ["Tournament Policies", "Event Pages", "Required Forms", "Rules Clarification", "Supplies"], // Supplies should provide a list of local hardware stores for teams to purchase last-minute materials if their builds break
    'Updates': [],
    'Sponsors': [],
    'About Us': ["The Team", "Contact Us", "Archives"]
};

var links = {
    "Archives": "archives.html",
    "Awards Ceremony": "awards-ceremony.html",
    "Contact Us": "contact-us.html",
    "Event Pages": "event-pages.html",
    "Health and Safety": "health-and-safety.html",
    "Hotels": "hotels.html",
    "Location": "location.html",
    "Packing Checklist": "packing-checklist.html",
    "Parking": "parking.html",
    "Registration": "registration.html",
    "Required Forms": "required-forms.html",
    "Rules Clarification": "https://www.soinc.org/events/rules-clarifications",
    "Sponsors": "sponsors.html",
    "Supplies": "supplies.html",
    "The Team": "the-team.html",
    "Tournament Policies": "tournament-policies.html",
    "Tournament Schedule": "tournament-schedule.html",
    "Updates": "updates.html"
};

// Add hamburger menu for narrow layout
var hamburger = document.getElementsByTagName('nav')[0].appendChild(document.createElement("a"));
hamburger.className = "fa fa-bars";
hamburger.id = "nav-hamburger";
hamburger.setAttribute("href", "javascript:void(0)");
hamburger.setAttribute("onclick", "openMenu()");

function openMenu() {
    var nav = document.getElementsByTagName("nav")[0];
    nav.classList.toggle("nav-narrow-visible");
}

// Create Upper Nav Bar
var outerList = document.getElementsByTagName('nav')[0]
    .appendChild(document.createElement('ul'));
// Test for media query
var smallScreen = window.matchMedia("(max-width: 600px)");

for(var header in outerHeaders) {
    var li = outerList.appendChild(document.createElement('li'));
    li.className = "dropdown";
    var children = outerHeaders[header];
    if(children.length > 0) {
        li.innerText = header;
        // Create dropdown arrow span for the sidebar menu on small screens
        var dropdownArrow = document.createElement("span");
        dropdownArrow.className = "fa fa-angle-down dropdown-arrow";
        li.appendChild(dropdownArrow);
        let dropdownWrapper = li.appendChild(document.createElement('div'));
        dropdownWrapper.className = "dropdown-wrapper";
        console.log('hit if statement');
        console.log(smallScreen);
        if (smallScreen.matches) {
            console.log('adding listener');
            li.onclick = function() {
                dropdownWrapper.classList.toggle("visible");
            };
        }
        var innerDiv = dropdownWrapper.appendChild(document.createElement('div'));
        innerDiv.className = "dropdown-content";
        for(var i = 0; i < children.length; i++) {
            var childName = children[i];
            var child = innerDiv.appendChild(document.createElement('a'));
            if(childName in links) {
                child.setAttribute('href', links[childName]);
                if(childName === "Rules Clarification")
                    child.setAttribute('target', '_blank');
            }
            child.innerText = childName;
        }
    } else {
        var anchor = li.appendChild(document.createElement('a'));
        if(header in links)
            anchor.setAttribute('href', links[header]);
        anchor.innerText = header;
    }
}

// When the user clicks anywhere outside of the menu, close it
// window.onclick = function(event) {
//     if (event.target.className != "nav-narrow-visible") {
//         openMenu();
//     }
// } 

// Super hacky way to check if on title page.
if(document.getElementsByTagName('title')[0].innerText  != 'MIT Science Olympiad | Welcome') {
    var navLogo = document.createElement("li");
    navLogo.className = "navbar-logo";
    navLogo.innerHTML = '<a href="index.html"><img src="images/logo.svg" width="40px" height="30px" style="vertical-align: middle;"></a>';
    outerList.insertBefore(navLogo, document.getElementsByClassName("dropdown")[3]);
}

// Create Footer
function addSMIcon(parent, classString, link) {
    var anchor = parent.appendChild(document.createElement("a"));
    anchor.setAttribute("href", link);
    anchor.setAttribute("target", "_blank");
    anchor.className = classString;
}

var footer = document.getElementsByTagName("footer")[0];
footer.appendChild(document.createElement('hr'));
var socialMedia = footer.appendChild(document.createElement('div'));
socialMedia.className = "social-media";
// TODO: add links
addSMIcon(socialMedia, "fa fa-facebook", "#");
addSMIcon(socialMedia, "fa fa-snapchat-ghost", "#");
addSMIcon(socialMedia, "fa fa-instagram", "https://www.instagram.com/mit_scioly/");
addSMIcon(socialMedia, "fa fa-envelope-o", "mailto:scioly@mit.edu");
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
