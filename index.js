document.addEventListener("DOMContentLoaded", function () {
    const introContainer = document.getElementById("intro-video-container");
    const introVideo = document.getElementById("intro-video");
    const mainContent = document.getElementById("main-content");

    // Show intro video every time the user visits the page
    introContainer.style.display = "flex"; // Ensure the intro video is visible
    mainContent.classList.add("hidden"); // Hide main content initially

    // Play the video and then remove it
    introVideo.onended = function () {
        introContainer.classList.add("fade-out");
        setTimeout(() => {
            introContainer.style.display = "none";
            mainContent.classList.remove("hidden");
        }, 1000);
    };
});


let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");
icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    console.log(ul);
    if (ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
          document.getElementById("bar").className= "fa-sharp fa-solid fa-bars-staggered";
    }
})



