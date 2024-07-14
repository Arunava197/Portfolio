// script.js

// Function to handle sidebar visibility and main content adjustments
function handleLayout() {
    var viewportWidth = window.innerWidth;
    var sidebar = document.querySelector('.sidebar');
    var mainContent = document.querySelector('main');

    if (viewportWidth <= 1024) {
        sidebar.style.display = 'none';
        mainContent.style.marginLeft = '0';
        mainContent.style.width = '100%';
        mainContent.style.paddingLeft = '20px'; // Adjust padding as needed
    } else {
        sidebar.style.display = 'block';
        mainContent.style.marginLeft = '250px'; // Adjust margin for sidebar width
        mainContent.style.width = 'auto';
        mainContent.style.paddingLeft = '0';
    }
}

// Initial call to set sidebar visibility and main content on page load
handleLayout();

// Event listener for window resize (optional, for responsiveness)
window.addEventListener('resize', function() {
    handleLayout();
});
