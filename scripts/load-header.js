document.addEventListener("DOMContentLoaded", function() {
    fetch("/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            highlightActiveNav(); // Call function to highlight active page
            loadFloatingAnimation(); // Ensure animation script runs after header is inserted
        })
        .catch(error => console.error("Error loading header:", error));
});

function loadFloatingAnimation() {
    const script = document.createElement("script");
    script.src = "/scripts/custom-header.js";
    script.onload = () => console.log("Animation script loaded successfully!");

    document.body.appendChild(script);
}

// Function to highlight the active navigation link
function highlightActiveNav() {
    let currentPath = window.location.pathname.split("/").pop(); // Get the full path of the current page
    currentPath = currentPath.substring(currentPath.lastIndexOf("/") + 1); // Extract only the filename

    // If it's the homepage, treat index.html as default
    if (currentPath === "" || currentPath === "index.html") {
        currentPath = "index.html";
    }
    console.log("Current Path:", currentPath); // Debugging log

    const navLinks = document.querySelectorAll(".nav-links a"); // Select all nav links
    console.log("navLinks:", navLinks); // Debugging log

    navLinks.forEach(link => {
        let linkPath = link.getAttribute("href").replace("../", ""); // Normalize href
        console.log("Comparing with Link:", linkPath); // Debugging log

        // If the current page matches the link, apply active class
        if (currentPath === linkPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active"); // Remove active class from others
        }
    });
}