document.addEventListener('DOMContentLoaded', () => {
    // Check for dark mode preference on page load
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Toggle dark mode and store preference
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.removeItem('darkMode');
        }
    });

    // Handle sidebar visibility based on viewport width
    function handleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const main = document.querySelector('main');
        if (window.innerWidth <= 1024) {
            sidebar.style.display = 'none';
            main.style.marginLeft = '20px'; // Adjust main content margin when sidebar is hidden
            main.style.width = 'calc(100% - 40px)'; // Full width minus padding
        } else {
            sidebar.style.display = 'flex';
            main.style.marginLeft = '250px'; // Adjust to the width of the sidebar
            main.style.width = 'calc(100% - 270px)'; // Full width minus sidebar width and padding
        }
    }

    // Initial call to handle sidebar visibility
    handleSidebar();

    // Add event listener for window resize to adjust sidebar visibility
    window.addEventListener('resize', handleSidebar);
});
