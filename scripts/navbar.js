// @ts-check
var outerList = document.getElementsByTagName('nav')[0]
    .appendChild(document.createElement('ul'));

var outerHeaders = {
    'Tournament Info': ["Tournament Policies", "Tournament Schedule", "Awards Ceremony", "Registration", "Health and Safety"],
    'Logistics': ["Location", "Hotels", "Parking", "Packing Checklist"],
    'Info for Teams': ["Event Pages", "Homerooms", "Required Forms", "Wristband Procedures", "Rules Clarification", "Arbitration"],
    'Updates': [],
    'Sponsors': ["Become a Sponsor"],
    'About Us': ["History", "The Team", "Contact Us", "Archives"]
};

var links = {
    "Tournament Policies": "tournament-policies.html",
    "Tournament Schedule": "tournament-schedule.html"
    // TODO: add links to all pages
};

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