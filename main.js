document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");

        // Check if the mobile breakpoint is active (e.g., max-width: 743px)
        const isMobileBreakpoint = window.innerWidth <= 743;

        // Change the icon based on the breakpoint
        if (isMobileBreakpoint) {
            if (navLinks.classList.contains("active")) {
                menuToggle.innerHTML = "✕"; // Close icon
            } else {
                menuToggle.innerHTML = "☰"; // Hamburger icon
            }
        }
    });
});