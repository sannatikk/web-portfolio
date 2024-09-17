// HAMBURGER MENU ACTIONS

// function to toggle  hamburger menu
function toggleMenu() {
    const menu = document.getElementById('navMenu') || document.getElementById('navMenu2') || document.getElementById('navMenu3');
    const hamburger = document.getElementById('hamburger-menu');

    // toggle 'active' class to show/hide menu
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// function to close hamburger menu
function closeMenu() {
    const menu = document.getElementById('navMenu') || document.getElementById('navMenu2') || document.getElementById('navMenu3');
    const hamburger = document.getElementById('hamburger-menu');
    
    // remove 'active' class to hide the menu
    menu.classList.remove('active');
    hamburger.classList.remove('active');
}

// attach event listeners to links to close hamburger menu on click
function setupMenuLinks() {
    const menuLinks = document.querySelectorAll('.nav-menu a'); // select all menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu); // add click event listener to each link
    });
}

// setup hamburger menu links after the DOM has loaded
document.addEventListener('DOMContentLoaded', setupMenuLinks);


// CONTACT FORM ACTIONS

// function to confirm contact form submission
function confirmSubmission() {
    return confirm("Are you sure you want to submit the form?");
}


// QUOTE ACTIONS

// function to display a random quote
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchQuoteButton').addEventListener('click', function() {

        // quote array
        const quotes = [
            "I love inside jokes. I'd love to be part of one someday. - Michael Scott",
            "Identity theft is not a joke, Jim! - Dwight Schrute",
            "I just want to lie on the beach and eat hot dogs. That's all I've ever wanted. - Kevin Malone",
            "I'm not superstitious, but I am a little stitious. - Michael Scott",
            "I don't hate it. I just don't like it at all and it's terrible. - Michael Scott",
            "I am Beyoncé, always. - Michael Scott",
            "I am running away from my responsibilities. And it feels good. - Michael Scott",
            "I knew exactly what to do. But in a much more real sense, I had no idea what to do. - Michael Scott",
            "Charm is the viscuous grease with which he oils his flimflam machine. - Frasier Crane",
            "The lemon is in play. - Douglas Richardson",
            "Snoopadoop the cockerpoo, noblest of hounds. - Hercules Shipwright",
            "You've put your finger, Arthur, as is so often your way, on the crux of a thorny theological problem. - Douglas Richardson",
            "Tell you what: why don't you write it down, put it in an envelope, tear it in half, throw it away, and shut your face. - Carolyn Knapp-Shappey",
            "Hey, chief, I might be wrong, but I think we're flying into a mountain. - Douglas Richardson",
        ];

        // select random quote from array
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        // split quote and author based on the dash
        const [quoteText, quoteAuthor] = randomQuote.split(" - ");

        // display quote and author separately
        document.getElementById('quoteText').innerHTML = `<br>"${quoteText}"`;  // quote on a new line
        document.getElementById('quoteText').style.fontStyle = 'italic';      // italicize quote

        document.getElementById('quoteAuthor').textContent = `- ${quoteAuthor}`;  // author on a new line
        document.getElementById('quoteAuthor').style.fontStyle = 'normal';    // make sure author is not italicized
    });
});


// SLIDESHOW ACTIONS

// define a slideshow class to encapsulate image slideshow behavior
class Slideshow {
    constructor(images, containerId, interval) {
        this.images = images;
        this.container = document.getElementById(containerId);
        this.currentIndex = 0;
        this.interval = interval;
        this.startSlideshow();
    }
    // method to display current image
    showImage() {
        const { src, alt } = this.images[this.currentIndex];
        this.container.innerHTML = `
            <img src="${src}" alt="${alt}"/>
        `;
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
    // method to start  image slideshow
    startSlideshow() {
        this.showImage(); // display  first image
        setInterval(() => this.showImage(), this.interval);
    }
}

// initialize the Slideshow class once the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    const puffinImages = [
        { src: 'assets/pictures/puffin1.jpg', alt: 'Puffin 1' },
        { src: 'assets/pictures/puffin2.jpg', alt: 'Puffin 2' },
        { src: 'assets/pictures/puffin3.jpg', alt: 'Puffin 3' },
        { src: 'assets/pictures/puffin4.jpg', alt: 'Puffin 4' },
        { src: 'assets/pictures/puffin5.jpg', alt: 'Puffin 5' }
    ];
    // create new Slideshow object
    const puffinSlideshow = new Slideshow(puffinImages, 'puffin-gallery', 3000); // 3 second intervals
});


// TIME FETCH ACTIONS

// function to fetch  current time in Oulu
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchTimeButton').addEventListener('click', function() {
        // get current date and time
        const now = new Date();
        // define options for formatting date/time
        const options = {
            timeZone: 'Europe/Helsinki', // Eastern European Time
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour12: false
        };
        // format  current date/time for specified time zone
        const formatter = new Intl.DateTimeFormat('en-US', options); // en-US because I want "September 17", not "17 September"
        const formattedTime = formatter.format(now);

        // display formatted time
        document.getElementById('time-display').textContent = `Current time in Eastern European Time is: ${formattedTime}`;
    });
});


// PARKING LOT ACTIONS

// don't run the code until the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // oulunliikenne API url
    const apiURL = 'https://api.oulunliikenne.fi/proxy/graphql';

    // reference to the table body and other elements
    const tableBody = document.getElementById('tableBody');
    const carParkTable = document.getElementById('carParkTable');
    const parkingLoadingMessage = document.getElementById('parkingLoadingMessage');
    const parkingErrorMessage = document.getElementById('parkingErrorMessage');

    // button click event listener
    document.getElementById('fetchParkingButton').addEventListener('click', () => {
        // Clear previous data and messages
        tableBody.innerHTML = '';
        carParkTable.style.display = 'none';
        parkingLoadingMessage.style.display = 'block';
        parkingErrorMessage.style.display = 'none';

        // API request body (GraphQL query)
        const requestBody = JSON.stringify({
            query: "{ carParks { name, maxCapacity, spacesAvailable } }"
        });

        // fetch data from  API
        fetch(apiURL, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: requestBody
        })
        .then(response => response.json()) // parse response as JSON
        .then(data => {
            parkingLoadingMessage.style.display = 'none'; // hide loading message

            if (data.data && data.data.carParks) { // check if data is valid

                // track unique lot names to prevent duplicates
                const uniqueNames = new Set();
                const rows = data.data.carParks
                    .filter(park => {
                    const name = park.name || "unknown ☹";
                    if (uniqueNames.has(name)) {
                        return false; // skip duplicates
                    } else {
                        uniqueNames.add(name);
                        return true;
                    }
                    })
                    .map(park => {
                        // replace null or undefined values with "unknown ☹"
                        const name = park.name || "unknown ☹";
                        const maxCapacity = park.maxCapacity != null ? park.maxCapacity : "unknown ☹";
                        const spacesAvailable = park.spacesAvailable != null ? park.spacesAvailable : "unknown ☹";
                
                        return `<tr>
                            <td>${name}</td>
                            <td>${maxCapacity}</td>
                            <td>${spacesAvailable}</td>
                        </tr>`; // created table row
                    });

                // populate table with unique data
                tableBody.innerHTML = rows.join('');
                carParkTable.style.display = 'table'; // show table

            } else {
                parkingErrorMessage.style.display = 'block'; // show error message if data is weird
            }
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            parkingLoadingMessage.style.display = 'none'; // hide loading message
            parkingErrorMessage.style.display = 'block';  // show error message
        });
    });

    // let user sort by column contents

    let sortOrder = {}; // keeps track of sorting order for each column

    function sortTable(columnIndex) {
        const table = document.getElementById("carParkTable");
        const tbody = table.querySelector("tbody");
        const rows = Array.from(tbody.querySelectorAll("tr"));
        
        // toggle sort order: asc or desc
        sortOrder[columnIndex] = !sortOrder[columnIndex];
        
        rows.sort((rowA, rowB) => {
            const cellA = rowA.querySelectorAll("td")[columnIndex].textContent.trim();
            const cellB = rowB.querySelectorAll("td")[columnIndex].textContent.trim();
            
            if (!isNaN(cellA) && !isNaN(cellB)) {
                // sort numerically if column contains numbers
                return sortOrder[columnIndex] ? cellA - cellB : cellB - cellA;
            } else {
                // sort alphabetically for text columns
                return sortOrder[columnIndex] ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
            }
        });

        // clear and re-add sorted rows
        tbody.innerHTML = "";
        rows.forEach(row => tbody.appendChild(row));

        // update sorting arrows
        updateArrows(columnIndex);
    }

    function updateArrows(columnIndex) {
        // clear all arrow indicators
        for (let i = 0; i < 3; i++) { // assuming 3 columns, adjust if more
            document.getElementById(`arrow${i}`).textContent = '';
        }

        // add appropriate arrow to the sorted column
        const arrow = sortOrder[columnIndex] ? '▼' : '▲';
        document.getElementById(`arrow${columnIndex}`).textContent = arrow;
    }
});

// PET PIC ACTIONS

// API URLs
const dogUrl = "https://dog.ceo/api/breeds/image/random";
const catUrl = "https://api.thecatapi.com/v1/images/search";

// show or hide messages
function showLoadingMessage() {
    document.getElementById('petLoadingMessage').style.display = 'block';
    document.getElementById('petErrorMessage').style.display = 'none';
}

function showErrorMessage() {
    document.getElementById('petLoadingMessage').style.display = 'none';
    document.getElementById('petErrorMessage').style.display = 'block';
}

function hideMessages() {
    document.getElementById('petLoadingMessage').style.display = 'none';
    document.getElementById('petErrorMessage').style.display = 'none';
}

// function to fetch and display random dog image
function fetchDogPic() {
    // clear previous image
    document.getElementById('dogPic').innerHTML = '';
    document.getElementById('catPic').innerHTML = '';

    // showLoadingMessage(); // show loading message

    // fetch image from dog API
    fetch(dogUrl)
        .then(response => response.json())
        .then(data => {
            // create an image element and set its src attribute
            const img = document.createElement('img');
            img.src = data.message; // dog API response has image URL under "message"
            img.alt = 'Random Dog';

            // add image to the dogPic div
            document.getElementById('dogPic').appendChild(img);

            hideMessages(); // hide messages after image is displayed
        })
        .catch(error => {
            console.error('Error fetching dog picture:', error);
            showErrorMessage(); // show error message if an error occurs
        });
}

// function to fetch and display a random cat image
function fetchCatPic() {
    // clear previous image
    document.getElementById('dogPic').innerHTML = '';
    document.getElementById('catPic').innerHTML = '';

    // showLoadingMessage(); // Show loading message

    // fetch image from cat API
    fetch(catUrl)
        .then(response => response.json())
        .then(data => {
            // create image element and set its src attribute
            const img = document.createElement('img');
            img.src = data[0].url; // Cat API response has image URL under "url"
            img.alt = 'Random Cat';

            // add image to catPic div
            document.getElementById('catPic').appendChild(img);

            hideMessages(); // hide messages after image is displayed
        })
        .catch(error => {
            console.error('Error fetching cat picture:', error);
            showErrorMessage(); // show error message if an error occurs
        });
}

// attach event listeners to buttons after the DOM has loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchDogButton').addEventListener('click', fetchDogPic);
    document.getElementById('fetchCatButton').addEventListener('click', fetchCatPic);
});