// Initialize Lucide icons
lucide.createIcons();

// Add some interactive elements
document.addEventListener('DOMContentLoaded', function () {
    // Add pulse animation to first card
    const firstCard = document.querySelector('.card-hover');
    if (firstCard) {
        firstCard.classList.add('pulse-animation');

        // Remove pulse after 6 seconds
        setTimeout(() => {
            firstCard.classList.remove('pulse-animation');
        }, 6000);
    }
});
