// Form handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show success message
        formStatus.textContent = 'Message sent successfully!';
        formStatus.className = 'form-status success';
        
        // Reset form
        contactForm.reset();
        
        // Clear success message after 3 seconds
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 3000);
    } catch (error) {
        // Show error message
        formStatus.textContent = 'Failed to send message. Please try again.';
        formStatus.className = 'form-status error';
    }
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

// Show button when user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh on submit

        // Show loading message
        formStatus.innerText = "Sending...";
        formStatus.style.color = "blue";

        emailjs.sendForm("service_x3i1cqw", "template_jf5vj89", contactForm)
            .then(() => {
                formStatus.innerText = "Message Sent Successfully!";
                formStatus.style.color = "green";
                contactForm.reset();
                
                // Clear message after 3 seconds
                setTimeout(() => formStatus.innerText = "", 3000);
            }, (error) => {
                console.error("Error:", error);
                formStatus.innerText = "Failed to send email. Please try again.";
                formStatus.style.color = "red";
            });
    });
});
