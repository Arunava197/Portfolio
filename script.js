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
        mainContent.style.marginLeft = '35%'; // Adjust margin for sidebar width
        mainContent.style.width = 'auto';
        mainContent.style.paddingLeft = '20px'; // Adjust padding as needed
    }
}

// Initial call to set sidebar visibility and main content on page load
handleLayout();

// Event listener for window resize (optional, for responsiveness)
window.addEventListener('resize', function() {
    handleLayout();
});

// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    const body = document.body;

    // Check for dark mode preference on page load
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode and store preference
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.removeItem('darkMode');
        }
    });
});
