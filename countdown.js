document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const eventDate = new Date("May 4, 2025 00:00:00").getTime();
        const countdownElement = document.getElementById("countdown");

        function calculateTime() {
            const now = new Date().getTime();
            const timeLeft = eventDate - now;

            if (timeLeft < 0) {
                countdownElement.innerHTML = "The event has started!";
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        calculateTime();
        setInterval(calculateTime, 1000);
    }

    updateCountdown(); // Start countdown after page loads
});
