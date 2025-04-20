// Team members data
const teamMembers = [
    {
        name: "Aakash Kumar",
        role: "Tedx Organiser and Sponsorship Head",
        image: "team/aakash.jpg",
        bio: "Being a leader, he possesses the capability to guide the team and orchestrate a remarkable TEDx event. Under his leadership and vision, the team found a clear pathway to collaborate, innovate, and bring inspiring ideas to life, making the event a resounding success",
        linkedin: "https://www.linkedin.com/in/aakash-kumar-a604bb32b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "aakashk.connect@gmail.com"
    },
    {
        name: "Mrinamayee Wankar",
        role: "Tedx Co-Organiser",
        image: "./team/mir.jpg",
        bio: "As a co-organizer, the focus is on teamwork and seamless execution to ensure the success of the TEDx event. Through careful planning and coordination, we are creating a platform where impactful ideas will inspire and connect people",
        linkedin: "https://www.linkedin.com/in/mrinamayee-wankar-2038b7255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "mrinamayeew@gmail.com"
    },
    {
        name: "Akshay Kumar",
        role: "Ticket Management Head",
        image: "./team/akshay.jpg",
        bio: "Akshay is a tech enthusiast who developed an efficient ticket generation and management service for a TEDxNielitAurangabad event, ensuring a seamless experience for attendees. Passionate about innovation, He leverages technology to enhance event operations",
        linkedin: "https://www.linkedin.com/in/akshay-kumar-ab3002256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "aks006321@gmail.com"
    },
    {
        name: "Ayush Verma",
        role: "Technical Team Head and Website Developer",
        image: "./team/ayush2.jpg",
        bio: "As the Technical Team Head and Website Developer for TEDxNIELITAurangabad, the focus is on ensuring a seamless digital experience. From developing an engaging and user-friendly website to managing the technical aspects of the event, the goal is to create a platform that enhances accessibility, efficiency, and the overall impact of TEDx",
        linkedin: "https://www.linkedin.com/in/ayush-verma-a47a8325a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "ayushsethgkp@gmail.com"
    },
    
    {
        name: "Aryan Raj",
        role: "Volunteering Team Head",
        image: "./team/aryan2.jpg",
        bio: "As the Volunteering Team Head, the focus is on organizing and guiding a dedicated team to ensure a smooth and impactful TEDx event. By coordinating efforts, managing logistics, and fostering teamwork, the goal is to create an engaging experience for speakers and attendees",
       
        email: "aryanraj11947@gmail.com"
    },
   
   
    {
        name: "Nitish Kumar",
        role: "Marketing Team Head",
        image: "./team/nitish.jpg",
        bio: "As the Marketing Team Head, the focus is on strategizing and executing impactful campaigns to maximize the reach of TEDx. By leveraging creative promotions and audience engagement, the team ensures the event's ideas resonate with a wider community",
        linkedin: "https://www.linkedin.com/in/nitish-kumar-8381a1356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "nitishxyz02@gmail.com"
    },
    {
        name: "Shubham Yadav",
        role: "Finance Team Head",
        image: "./team/shubham.jpg",
        bio: "As the Finance Team Head, the role involves managing budgets, securing sponsorships, and ensuring financial sustainability for TEDx. Through strategic planning and resource allocation, the team supports a seamless and well-executed event",
        linkedin: "https://www.linkedin.com/in/shubham-yadav-383b0531b/",
        email: "shubham65381@gmail.com"
    },
    {
        name: "Sayan Mondal",
        role: "Documentation team Head",
        image: "./team/sayan.jpg",
        bio: "As the Documentation Team Head, the role is to meticulously record and organize key event details, ensuring smooth communication and seamless execution. From maintaining records to capturing essential insights, the team plays a vital role in preserving the essence of TEDx and its impactful ideas",
        linkedin: "https://www.linkedin.com/in/sayan-mondal-65b6b2257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "msayanmondal1234@gmail.com"
    
    },
    
];

// Create team member card
function createTeamMemberCard(member) {
    return `
        <div class="team-member">
            <div class="member-image-container">
                <div class="image-overlay"></div>
                <img src="${member.image}" alt="${member.name}" class="member-image">
                <div class="blur-overlay"></div>
            </div>
            <div class="member-content">
                <div class="social-links">
                    <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" 
                       class="social-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                            <rect width="4" height="12" x="2" y="9"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                    </a>
                    <a href="mailto:${member.email}" class="social-link email">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                    </a>
                </div>
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">
                    <svg class="earth-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/>
                        <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"/>
                        <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/>
                        <circle cx="12" cy="12" r="10"/>
                    </svg>
                    ${member.role}
                </p>
                <p class="member-bio">${member.bio}</p>
            </div>
        </div>
    `;
}

// Initialize the page
function initializePage() {
    // Render team members
    const teamGrid = document.getElementById('teamGrid');
    teamGrid.innerHTML = teamMembers.map(member => createTeamMemberCard(member)).join('');

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Header scroll effect
    const header = document.getElementById('header');
    const headerText = document.getElementById('headerText');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            headerText.style.display = 'none';
        } else {
            header.classList.remove('scrolled');
            headerText.style.display = 'block';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);