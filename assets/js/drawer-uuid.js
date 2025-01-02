function displayOsanoUUID() {
    // Function to get the value of a specific cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Get the value of the osano_consentmanager_uuid cookie
    const uuid = getCookie("osano_consentmanager_uuid");
    console.log("UUID from cookie:", uuid);

    // Find the preferences drawer element
    const drawer = document.getElementById('osano-cm-dom-info-dialog');
    console.log("Drawer element:", drawer);

    if (drawer) {
        // Find the list container within the drawer
        const listContainer = drawer.querySelector('.osano-cm-view__list'); 
        console.log("List container:", listContainer);

        if (listContainer) {
            // Get the 4th list item (index starts at 0)
            const fourthListItem = listContainer.querySelectorAll('li')[3];
            console.log("Fourth list item:", fourthListItem);

            if (fourthListItem) {
                // Check if we've already added the UUID element
                let uuidElement = document.getElementById("osano-uuid-display");
                console.log("UUID element:", uuidElement);

                if (!uuidElement) {
                    // Create a new element to display the UUID
                    uuidElement = document.createElement("li"); 
                    uuidElement.id = "osano-uuid-display";
                    // Insert after the 4th list item
                    fourthListItem.parentNode.insertBefore(uuidElement, fourthListItem.nextSibling);
                    console.log("UUID element created and inserted");
                }

                // Update the UUID element's content
                if (uuid) {
                    uuidElement.innerHTML = "Your Unique Identifier: <strong>" + uuid + "</strong>";
                    console.log("UUID displayed");
                } else {
                    uuidElement.textContent = "UUID not found.";
                    console.log("UUID not found message displayed");
                }
            } else {
                console.error("Could not find the 4th list item.");
            }
        } else {
            console.error("Could not find the list container within the drawer.");
        }
    } else {
        console.error("Osano preferences drawer not found.");
    }
}

// Run when Osano is initialized and ready
window.addEventListener('load', function() {
    console.log("Page loaded");
    // Check if Osano CMP is initialized and ready
    if (window.Osano && window.Osano.cm) {
        console.log("Osano CMP is ready");
        // Osano event listener to update the UUID after consent is saved
        window.Osano.cm.on('save', function() {
            console.log("Osano 'save' event triggered");
            displayOsanoUUID();
        });

        // Osano event listener for when the drawer is shown
        window.Osano.cm.on('showDrawer', function() {
            console.log("Osano 'showDrawer' event triggered");
            displayOsanoUUID();
        });
    } else {
        console.error("Osano CMP is not initialized or ready.");
    }
});

// Override default behavior of the preferences drawer
document.addEventListener('click', function(event) {
    if (event.target.matches('#centerdrawer, #centerdrawer *')) {
        console.log("Center drawer link clicked");
        event.preventDefault();
        if (window.Osano && window.Osano.cm) {
            window.Osano.cm.showDrawer('osano-cm-dom-info-dialog-open');
        } else {
            console.error("Osano CMP is not available.");
        }
    }
});
