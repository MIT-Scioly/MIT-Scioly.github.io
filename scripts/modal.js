for(var event in events) {
    // must use let here to avoid really difficult bug since event listeners are applied in a for loop
    let tile = document.getElementById(event + "-tile");
    let modal = document.getElementById(event + "-modal");
    let span = document.getElementById(event + "-close");

    // When the user clicks on the button, open the modal
    tile.onclick = function() {
        modal.className = "modal visible";
    }

    // When the user clicks on x, close the modal
    span.onclick = function() {
        modal.className = "modal hidden";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target.className === "modal visible") {
            event.target.className = "modal hidden";
        }
    } 
}