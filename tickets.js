const toast = document.getElementById('toast');

function showToast(ticketType) {
  toast.innerHTML = `<strong>🎟️ ${ticketType} Coming Soon!</strong><br>
  Thank you for your interest! ${ticketType} tickets will be available shortly.`;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

document.getElementById('silverTicketBtn').addEventListener('click', () => showToast('Silver Tickets'));
document.getElementById('goldTicketBtn').addEventListener('click', () => showToast('Gold Tickets'));
document.getElementById('platinumTicketBtn').addEventListener('click', () => showToast('Platinum Tickets'));












// Add this to your existing tickets.js
document.addEventListener('DOMContentLoaded', function() {
    // Handle initial page load with hash
    if(window.location.hash) {
        const targetTab = window.location.hash.substring(1);
        activateTab(targetTab);
    }

    // Handle hash changes
    window.addEventListener('hashchange', function() {
        if(window.location.hash) {
            const targetTab = window.location.hash.substring(1);
            activateTab(targetTab);
        }
    });

    function activateTab(tabId) {
        // List of valid tab IDs
        const validTabs = ['ticket', 'refund', 'terms', 'privacy', 'faq'];
        
        if(validTabs.includes(tabId)) {
            // Remove active class from all tabs and content
            document.querySelectorAll('.tab, .tab-content').forEach(element => {
                element.classList.remove('active');
            });

            // Activate target tab
            const targetTabElement = document.querySelector(`.tab[data-tab="${tabId}"]`);
            const targetContent = document.getElementById(tabId);
            
            if(targetTabElement && targetContent) {
                targetTabElement.classList.add('active');
                targetContent.classList.add('active');
            }
        }
    }
});