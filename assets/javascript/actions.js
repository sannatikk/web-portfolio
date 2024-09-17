// HAMBURGER MENU ACTIONS

// Function to toggle  hamburger menu
function toggleMenu() {
    const menu = document.getElementById('navMenu') || document.getElementById('navMenu2');
    const hamburger = document.getElementById('hamburger-menu');

    // Toggle 'active' class to show/hide menu
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Function to close hamburger menu
function closeMenu() {
    const menu = document.getElementById('navMenu') || document.getElementById('navMenu2');
    const hamburger = document.getElementById('hamburger-menu');
    
    // Remove 'active' class to hide the menu
    menu.classList.remove('active');
    hamburger.classList.remove('active');
}

// Attach event listeners to links to close hamburger menu on click
function setupMenuLinks() {
    const menuLinks = document.querySelectorAll('.nav-menu a'); // Select all menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu); // Add click event listener to each link
    });
}

// Setup hamburger menu links after the DOM has loaded
document.addEventListener('DOMContentLoaded', setupMenuLinks);


// CONTACT FORM ACTIONS

// Function to confirm contact form submission
function confirmSubmission() {
    return confirm("Are you sure you want to submit the form?");
}


// QUOTE ACTIONS

// Function to display a random quote
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchQuoteButton').addEventListener('click', function() {

        // Array of quotes
        const quotes = [
            "I love inside jokes. I'd love to be part of one someday. - Michael Scott",
            "Identity theft is not a joke, Jim! - Dwight Schrute",
            "I just want to lie on the beach and eat hot dogs. That's all I've ever wanted. - Kevin Malone",
            "I'm not superstitious, but I am a little stitious. - Michael Scott",
            "I don't hate it. I just don't like it at all and it's terrible. - Michael Scott",
            "I am Beyoncé, always. - Michael Scott",
            "I am running away from my responsibilities. And it feels good. - Michael Scott",
            "I knew exactly what to do. But in a much more real sense, I had no idea what to do. - Michael Scott",
            "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are. - Will Ferrell",
            "Never follow anyone else's path. Unless you’re in the woods and you're lost and you see a path. Then by all means follow that path. - Ellen DeGeneres",
            "Charm is the viscuous grease with which he oils his flimflam machine. - Frasier Crane",
        ];

        // Select a random quote from the array
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        // Split quote and author based on the dash
        const [quoteText, quoteAuthor] = randomQuote.split(" - ");

        // Display quote and author separately
        document.getElementById('quoteText').textContent = `"${quoteText}"`;  // quote
        document.getElementById('quoteText').style.fontStyle = 'italic';      // italicize quote

        document.getElementById('quoteAuthor').textContent = `- ${quoteAuthor}`;  // author on a new line
        document.getElementById('quoteAuthor').style.fontStyle = 'normal';    // make sure author is not italicized
    });
});


// SLIDESHOW ACTIONS

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
            <img src="${src}" alt="${alt}"/>
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
    const puffinSlideshow = new Slideshow(puffinImages, 'puffin-gallery', 3000); // show puffin slideshow with 3 second intervals
});


// TIME FETCH ACTIONS

// Function to fetch the current time in Oulu
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


// PARKING LOT ACTIONS

// oulunliikenne API url
const apiURL = 'https://api.oulunliikenne.fi/proxy/graphql';

// reference to the table body and other elements
const tableBody = document.getElementById('tableBody');
const carParkTable = document.getElementById('carParkTable');
const loadingMessage = document.getElementById('loadingMessage');
const errorMessage = document.getElementById('errorMessage');

// Button click event listener
document.getElementById('fetchParkingButton').addEventListener('click', () => {
  // Clear previous data and messages
  tableBody.innerHTML = '';
  carParkTable.style.display = 'none';
  loadingMessage.style.display = 'block';
  errorMessage.style.display = 'none';

  // API request body (GraphQL query)
  const requestBody = JSON.stringify({
    query: "{ carParks { name, maxCapacity, spacesAvailable } }"
  });

  // Fetch data from the API
  fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: requestBody
  })
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    loadingMessage.style.display = 'none'; // Hide loading message

    if (data.data && data.data.carParks) {
      // Track unique lot names to prevent duplicates
      const uniqueNames = new Set();
      const rows = data.data.carParks
        .filter(park => {
          const name = park.name || "unknown ☹";
          if (uniqueNames.has(name)) {
            return false; // Skip duplicates
          } else {
            uniqueNames.add(name);
            return true;
          }
        })
        .map(park => {
          // Replace null or undefined values with "unknown ☹"
          const name = park.name || "unknown ☹";
          const maxCapacity = park.maxCapacity != null ? park.maxCapacity : "unknown ☹";
          const spacesAvailable = park.spacesAvailable != null ? park.spacesAvailable : "unknown ☹";
  
          return `<tr>
            <td>${name}</td>
            <td>${maxCapacity}</td>
            <td>${spacesAvailable}</td>
          </tr>`;
        });

      // Populate the table with unique car park data
      tableBody.innerHTML = rows.join('');
      carParkTable.style.display = 'table'; // Show the table
    } else {
      errorMessage.style.display = 'block'; // Show error message if data is not as expected
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    loadingMessage.style.display = 'none'; // Hide loading message
    errorMessage.style.display = 'block';  // Show error message
  });
});

// let user sort by column contents

let sortOrder = {}; // Keeps track of sorting order for each column

function sortTable(columnIndex) {
    const table = document.getElementById("carParkTable");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));
    
    // Toggle sort order: Ascending or Descending
    sortOrder[columnIndex] = !sortOrder[columnIndex];
    
    rows.sort((rowA, rowB) => {
        const cellA = rowA.querySelectorAll("td")[columnIndex].textContent.trim();
        const cellB = rowB.querySelectorAll("td")[columnIndex].textContent.trim();
        
        if (!isNaN(cellA) && !isNaN(cellB)) {
            // Sort numerically if the column contains numbers
            return sortOrder[columnIndex] ? cellA - cellB : cellB - cellA;
        } else {
            // Sort alphabetically for text columns
            return sortOrder[columnIndex] ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
        }
    });

    // Clear and re-add sorted rows
    tbody.innerHTML = "";
    rows.forEach(row => tbody.appendChild(row));

    // Update sorting arrows
    updateArrows(columnIndex);
}

function updateArrows(columnIndex) {
    // Clear all arrow indicators
    for (let i = 0; i < 3; i++) { // Assuming 3 columns, adjust if more
        document.getElementById(`arrow${i}`).textContent = '';
    }

    // Add the appropriate arrow to the sorted column
    const arrow = sortOrder[columnIndex] ? '▼' : '▲';
    document.getElementById(`arrow${columnIndex}`).textContent = arrow;
}