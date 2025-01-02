// Function to get the value of a specific cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// When the page loads
window.addEventListener('load', function() {
    // Get references to the button and the container where the UUID will be displayed
    const showUuidButton = document.getElementById("show-uuid-button");
    const uuidContainer = document.getElementById("uuid-container");

    // Add a click event listener to the button
    showUuidButton.addEventListener("click", function() {
        // Get the value of the osano_consentmanager_uuid cookie
        const uuid = getCookie("osano_consentmanager_uuid");

        // Display the UUID in the container
        if (uuid) {
            uuidContainer.textContent = "Your Osano UUID: " + uuid;
        } else {
            uuidContainer.textContent = "Osano UUID cookie not found.";
        }
    });
});
