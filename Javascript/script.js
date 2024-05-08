// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    var services = document.querySelectorAll('.service');
    services.forEach(function(service) {
        if (isInViewport(service)) {
            service.style.opacity = 1; // Make service visible
        }
    });
}

// Add scroll event listener to window
window.addEventListener('scroll', handleScroll);

// Initial check to make services visible if they are already in viewport on page load
handleScroll();


document.addEventListener("DOMContentLoaded", function() {
    // Add fade-in class to elements
    var fadeElements = document.querySelectorAll('#company-details h2, #company-details h3, #company-details p, #company-details .image-placeholder');
    fadeElements.forEach(function(element) {
        element.classList.add('fade-in');
    });
});

