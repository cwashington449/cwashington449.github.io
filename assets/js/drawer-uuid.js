function displayOsanoUUID() {
    // Function to get the value of a specific cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Get the value of the osano_consentmanager_uuid cookie
    const uuid = getCookie("osano_consentmanager_uuid");

    // Find the preferences drawer element
    const drawer = document.getElementById('osano-cm-dom-info-dialog');

    if (drawer) {
        // Find a suitable place to insert the UUID (e.g., after the title)
        let titleElement = drawer.querySelector('.osano-cm-dialog-header');

        if (titleElement) {
            // Check if we've already added the UUID element
            let uuidElement = document.getElementById("osano-uuid-display");

            if (!uuidElement) {
                // Create a new element to display the UUID
                uuidElement = document.createElement("p");
                uuidElement.id = "osano-uuid-display";
                titleElement.parentNode.insertBefore(uuidElement, titleElement.nextSibling);
            }

            // Update the UUID element's content
            if (uuid) {
                uuidElement.innerHTML = "Your Unique Identifier: <strong>" + uuid + "</strong>";
            } else {
                uuidElement.textContent = "UUID not found.";
            }
        } else {
            console.error("Could not find a suitable element to insert the UUID.");
        }
    } else {
        console.error("Osano preferences drawer not found.");
    }
}

// Run when Osano is initialized and ready
window.addEventListener('load', function() {
    // Check if Osano CMP is initialized and ready
    if (window.Osano && window.Osano.cm) {
        // Osano event listener to update the UUID after consent is saved
        window.Osano.cm.on('save', function() {
            displayOsanoUUID();
        });

        // Osano event listener for when the drawer is shown
        window.Osano.cm.on('showDrawer', function() {
            displayOsanoUUID();
        });
    } else {
        console.error("Osano CMP is not initialized or ready.");
    }
});

// Override default behavior of the preferences drawer
document.addEventListener('click', function(event) {
    if (event.target.matches('#centerdrawer, #centerdrawer *')) {
        event.preventDefault();
        if (window.Osano && window.Osano.cm) {
            window.Osano.cm.showDrawer('osano-cm-dom-info-dialog-open');
        } else {
            console.error("Osano CMP is not available.");
        }
    }
});
