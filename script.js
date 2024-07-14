// script.js

// Function to handle sidebar visibility based on viewport width
function handleSidebarVisibility() {
    var viewportWidth = window.innerWidth;
    var sidebar = document.querySelector('.sidebar');

    if (viewportWidth <= 1024) {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

// Initial call to set sidebar visibility on page load
handleSidebarVisibility();

// Event listener for window resize (optional, for responsiveness)
window.addEventListener('resize', function() {
    handleSidebarVisibility();
});
