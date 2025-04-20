document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("intro-video");

    // Videos for different screen sizes
    const desktopVideo = "./intro_video/Black White Neon We Are Open Countdown Mobile Video (Video)_20250313_190003_0002 (2).mp4";
    const mobileVideo = "./intro_video/portrait_Black White Neon We Are Open Countdown Mobile Video_20250313_185651_0001 (2).mp4";

    function updateVideoSource() {
        const newSource = window.innerWidth <= 640 ? mobileVideo : desktopVideo;

        if (video.currentSrc !== newSource) {
            video.src = newSource;
            video.load(); // Ensure the new source is loaded

            // iPhone Fix: Ensure playback starts
            video.play().catch(error => console.log("Autoplay blocked:", error));
        }
    }

    updateVideoSource();
    window.addEventListener("resize", updateVideoSource);
});
