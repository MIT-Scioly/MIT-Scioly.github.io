for(var event in events) {
    // must use let here to avoid really difficult bug since event listeners are applied in a for loop
    let tile = document.getElementById(event + "-tile");
    let modal = document.getElementById(event + "-modal");
    let span = document.getElementById(event + "-close");
    let overlay = document.getElementById("modal-overlay");

    // When the user clicks on the button, open the modal
    tile.onclick = function() {
        modal.className = "modal visible";
        overlay.className = "modal-overlay visible";
    }

    // When the user clicks on x, close the modal
    span.onclick = function() {
        modal.className = "modal hidden";
        overlay.className = "modal-overlay hidden";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target.id === "modal-overlay") {
            var modals = document.getElementsByClassName("modal");
            for(var i = 0; i < modals.length; i++) {
                modals[i].className = "modal hidden";
            }
            
            overlay.className = "modal-overlay hidden";
        }
    } 
}