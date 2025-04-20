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


// let icon = document.querySelector(".icon");
// let ul = document.querySelector("ul");
// icon.addEventListener("click", ()=>{
//     ul.classList.toggle("showData");
//     console.log(ul);
//     if (ul.className == "showData"){
//         document.getElementById("bar").className= "fa-solid fa-xmark";
//     }else{
//           document.getElementById("bar").className= "fa-sharp fa-solid fa-bars-staggered";
//     }
// })












// theme



document.addEventListener('DOMContentLoaded', function() {
    // Initialize particle canvas
    const canvas = document.querySelector('.cyber-particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const connectDistance = 100;
    let particleCount = window.innerWidth < 768 ? 80 : 150;

    // Set initial canvas size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = document.querySelector('.cyber-theme').offsetHeight;
    }
    setCanvasSize();

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2;
            this.color = `rgba(230,43,30,${Math.random() * 0.4})`;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if(this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Initialize particles
    function initParticles() {
        particles = [];
        for(let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // Draw connection lines
    function drawLines() {
        for(let i = 0; i < particles.length; i++) {
            for(let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if(dist < connectDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(230,43,30,${1 - dist/connectDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawLines();
        requestAnimationFrame(animate);
    }

    // Initialize and start animation
    initParticles();
    animate();

    // Window resize handler
    window.addEventListener('resize', () => {
        particleCount = window.innerWidth < 768 ? 80 : 150;
        setCanvasSize();
        initParticles();
    });
});

