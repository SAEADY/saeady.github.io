document.getElementById("slideInButton").addEventListener("click", function() {
    // Navigate to the new page after a short delay to allow the transition to complete
    setTimeout(function() {
        window.location.href = "gallery_of_failure.html";
    }, 300); // Adjust the delay as needed to match the duration of your transition in CSS
});