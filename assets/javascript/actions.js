document.getElementById("emailButton").addEventListener("click", function() {
    window.location.href = 'mailto:t3posa01@students.oamk.fi?subject=Hello%20There&body=I%20found%20your%20test%20website';
});

/*
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    alert("Thank you for your message! I'll get back to you soon.");
    // Add AJAX to send the form data without reloading the page
});
*/

function confirmSubmission() {
    return confirm("Are you sure you want to submit the form?");
}

function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}