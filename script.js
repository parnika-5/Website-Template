// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all the navigation links
    const navLinks = document.querySelectorAll("header nav ul li a");

    // Add a click event listener to each navigation link
    navLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function (event) {
            // Prevent the default behavior of navigating to another page
            event.preventDefault();

            // Get the target section's ID from the href attribute of the clicked link
            const targetId = navLink.getAttribute("href").substring(1);

            // Scroll smoothly to the target section
            scrollToSection(targetId);
        });
    });

    // Function to scroll smoothly to a section
    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            const yOffset = -50; // Adjust the offset as needed
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }
});
