// Function to confirm form submission
function confirmSubmission() {
    return confirm("Are you sure you want to submit the form?");
}

// Function to toggle the hamburger menu
function toggleMenu() {
    const menu = document.getElementById('navMenu') || document.getElementById('navMenu2');
    const hamburger = document.getElementById('hamburger-menu');

    // Toggle the 'active' class to show/hide the menu
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Function to close the hamburger menu
function closeMenu() {
    const menu = document.getElementById('navMenu') || document.getElementById('navMenu2');
    const hamburger = document.getElementById('hamburger-menu');
    
    // Remove the 'active' class to hide the menu
    menu.classList.remove('active');
    hamburger.classList.remove('active');
}

// Attach event listeners to links to close the menu on click
function setupMenuLinks() {
    const menuLinks = document.querySelectorAll('.nav-menu a'); // Select all menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu); // Add click event listener to each link
    });
}

// Setup menu links after the DOM has loaded
document.addEventListener('DOMContentLoaded', setupMenuLinks);


/*
document.getElementById("emailButton").addEventListener("click", function() {
    window.location.href = 'mailto:t3posa01@students.oamk.fi?subject=Hello%20There&body=I%20found%20your%20test%20website';
});
*/

/*
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    alert("Thank you for your message! I'll get back to you soon.");
    // Add AJAX to send the form data without reloading the page
});
*/