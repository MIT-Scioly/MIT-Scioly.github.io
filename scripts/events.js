// events object is loaded through html
var eventCategories = {
    "study-event": [
        "anatomyAndPhysiology", 
        "designerGenes",
        "herpetology",
        "astronomy",
        "diseaseDetectives",
        "dynamicPlanet",
        "geologicMapping",
        "fossils"
    ],
    "lab-event": [
        "circuitLab",
        "soundsOfMusic",
        "thermodynamics",
        "chemLab",
        "forensics",
        "proteinModeling",
        "waterQuality"
    ],
    "build-event": [
        "boomilever",
        "missionPossible",
        "mousetrapVehicle",
        "wrightStuff"
    ],
    "inquiry-event": [
        "codeBusters",
        "experimentalDesign",
        "fermiQuestions",
        "writeItDoIt"
    ]
}
// TODO: add trial events
// TODO: move these out to JSON objects

var table = document.getElementById("event-table");
for(var category in eventCategories) {
    var eventNames = eventCategories[category];
    var tr = table.appendChild(document.createElement("tr"));
    for(var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var eventData = events[eventName];
        if(!eventData)
            continue;
        // Create the tile for each event
        var td = document.createElement("td");
        td.className = "event-box " + category;
        td.innerText = eventData.tileName || eventData.name;
        td.id = eventName + "-tile";
        tr.appendChild(td);

        // Add the modal
        var modalContainer = document.createElement("div");
        modalContainer.id = eventName + "-modal";
        modalContainer.className = "modal hidden";
        document.getElementsByTagName("body")[0].appendChild(modalContainer);

        var modalContent = document.createElement("div");
            modalContent.className = "modal-content";
            var modalHeader = document.createElement("div");
                modalHeader.className = "modal-header";
                var close = document.createElement("span");
                    close.className = "close";
                    close.id = eventName + "-close";
                    close.innerHTML = "&times;";
                modalHeader.appendChild(close);
                var title = document.createElement("h1");
                    title.innerText = eventData.name;
                modalHeader.appendChild(title);
                modalHeader.appendChild(document.createElement("hr"))
            modalContent.appendChild(modalHeader);
            var modalBody = document.createElement("modal-body");
                for(var field in eventData) {
                    if(field === "name" || field === "tileName")
                        continue;
                    var subheading = document.createElement("h2");
                        subheading.innerText = field; // TODO: fix formatting
                    modalBody.appendChild(subheading);
                    var subtext = document.createElement("p");
                        subtext.innerText = eventData[field];
                    modalBody.appendChild(subtext);
                }
            modalContent.appendChild(modalBody);
        modalContainer.appendChild(modalContent);
    }
}

