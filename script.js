/* styles.css */

/* General styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0; /* Light background */
    color: #333; /* Dark text color */
    margin: 0;
    padding: 0;
}

header {
    background-color: #007bff; /* Blue header background */
    color: #fff; /* White text color */
    padding: 10px 0;
}

.navbar {
    list-style-type: none;
    text-align: right;
    margin-right: 20px;
}

.navbar li {
    display: inline;
    margin-left: 10px;
}

.theme-switch {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #fff; /* White text color */
}

.page {
    padding: 20px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

/* Profile section */
.profile {
    flex: 1 1 100%;
    text-align: center;
    margin-bottom: 20px;
}

.profile img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

/* Skills, Tools, Hobbies, Contact sections */
.skills, .tools, .hobbies, .contact {
    flex: 1 1 30%;
    margin-bottom: 20px;
}

.skills h2, .tools h2, .hobbies h2, .contact h2 {
    color: #007bff; /* Blue heading color */
    border-bottom: 2px solid #007bff; /* Blue underline */
    padding-bottom: 5px;
}

.skills ul, .tools ul, .hobbies ul {
    list-style-type: none;
    padding: 0;
}

.skills ul li, .tools ul li, .hobbies ul li {
    margin-bottom: 5px;
}

.contact p {
    margin: 10px 0;
}

/* Footer */
footer {
    background-color: #007bff; /* Blue footer background */
    color: #fff; /* White text color */
    text-align: center;
    padding: 10px 0;
}

/* Dark mode styles */
body.dark-mode {
    background-color: #333; /* Dark background */
    color: #fff; /* White text color */
}

.dark-mode header {
    background-color: #111; /* Dark header background */
}

.dark-mode .navbar a {
    color: #fff; /* White links in dark mode */
}

.dark-mode .theme-switch label {
    color: #fff; /* White label text in dark mode */
}

.dark-mode .page {
    background-color: #444; /* Dark page background */
}

.dark-mode .container {
    border: 2px solid #666; /* Dark border for container */
}

.dark-mode .profile {
    background-color: #555; /* Dark background for profile section */
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.dark-mode .profile img {
    border: 4px solid #007bff; /* Blue border for profile image */
}

.dark-mode .skills, .dark-mode .tools, .dark-mode .hobbies, .dark-mode .contact {
    background-color: #555; /* Dark background for sections */
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
}

.dark-mode .skills h2, .dark-mode .tools h2, .dark-mode .hobbies h2, .dark-mode .contact h2 {
    color: #007bff; /* Blue heading color in dark mode */
    border-bottom: 2px solid #007bff; /* Blue underline in dark mode */
    padding-bottom: 5px;
}

.dark-mode footer {
    background-color: #111; /* Dark footer background */
    color: #fff; /* White text color */
}
