// Function to confirm contact form submission
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

// Attach event listeners to links to close the hamburger menu on click
function setupMenuLinks() {
    const menuLinks = document.querySelectorAll('.nav-menu a'); // Select all menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu); // Add click event listener to each link
    });
}

// Setup hamburger menu links after the DOM has loaded
document.addEventListener('DOMContentLoaded', setupMenuLinks);

// Function to display a random quote from The Office
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchQuoteButton').addEventListener('click', function() {

        // Array of quotes to display
        const quotes = [
            "I love inside jokes. I'd love to be part of one someday. - Michael Scott",
            "Identity theft is not a joke, Jim! - Dwight Schrute",
            "I just want to lie on the beach and eat hot dogs. That's all I've ever wanted. - Kevin Malone",
            "I'm not superstitious, but I am a little stitious. - Michael Scott",
            "I don't hate it. I just don't like it at all and it's terrible. - Michael Scott",
            "I am Beyoncé, always. - Michael Scott",
            "I am running away from my responsibilities. And it feels good. - Michael Scott",
            "I knew exactly what to do. But in a much more real sense, I had no idea what to do. - Michael Scott",
        ];

        // Select a random quote from the array
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        // Split the quote and the author based on the dash "-"
        const [quoteText, quoteAuthor] = randomQuote.split(" - ");

        // Display the quote and author separately
        document.getElementById('quoteText').textContent = `"${quoteText}"`;  // Italicized quote
        document.getElementById('quoteText').style.fontStyle = 'italic';      // Apply italic styling

        document.getElementById('quoteAuthor').textContent = `- ${quoteAuthor}`;  // Author on a new line
        document.getElementById('quoteAuthor').style.fontStyle = 'normal';    // Ensure author is not italicized
    });
});



// Define a Slideshow class to encapsulate image slideshow behavior
class Slideshow {
    constructor(images, containerId, interval) {
        this.images = images;
        this.container = document.getElementById(containerId);
        this.currentIndex = 0;
        this.interval = interval;
        this.startSlideshow();
    }

    // Method to display the current image
    showImage() {
        const { src, alt } = this.images[this.currentIndex];
        this.container.innerHTML = `
            <img src="${src}" alt="${alt}" style="max-width:100%; height:auto;" />
        `;
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }

    // Method to start the image slideshow
    startSlideshow() {
        this.showImage(); // Display the first image
        setInterval(() => this.showImage(), this.interval);
    }
}

// Initialize the Slideshow class once the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    const puffinImages = [
        { src: 'assets/pictures/puffin1.jpg', alt: 'Puffin 1' },
        { src: 'assets/pictures/puffin2.jpg', alt: 'Puffin 2' },
        { src: 'assets/pictures/puffin3.jpg', alt: 'Puffin 3' },
        { src: 'assets/pictures/puffin4.jpg', alt: 'Puffin 4' },
        { src: 'assets/pictures/puffin5.jpg', alt: 'Puffin 5' }
    ];
    
    // Create a new Slideshow object
    const puffinSlideshow = new Slideshow(puffinImages, 'puffin-gallery', 3000);
});





document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchTimeButton').addEventListener('click', function() {
        // Get the current date and time
        const now = new Date();

        // Define options for formatting the date/time
        const options = {
            timeZone: 'Europe/Helsinki', // Eastern European Time (EET)
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour12: false
        };

        // Format the current date/time for the specified time zone
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedTime = formatter.format(now);

        // Display the formatted time
        document.getElementById('time-display').textContent = `Current time in Eastern European Time is: ${formattedTime}`;
    });
});

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