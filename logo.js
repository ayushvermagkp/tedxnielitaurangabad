document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");

    function updateLogo() {
        if (window.innerWidth <= 768) {
            logo.src = "./images/TEDx_nav_logo_smallscreen.png";
        } else {
            logo.src = "./images/TEDx_nav_logo.png";
        }
    }

    updateLogo(); // Run once
    window.addEventListener("resize", updateLogo); // Listen for screen size changes
});

