// DARK MODE TOGGLER

document.addEventListener('DOMContentLoaded', function() {              // wait until DOM is loaded to run the code
    const toggleModeLink1 = document.getElementById('toggle-mode');     // define portfolio page toggle link
    const toggleModeLink2 = document.getElementById('toggle-mode2');    // define playground page toggle link
    const body = document.body; // references the entire body section aka the whole page

    // function to toggle dark mode
    function toggleMode() {
        body.classList.toggle('dark-mode');                             // toggle dark mode class on body, note toggle is a built-in method

        if (body.classList.contains('dark-mode')) {                     // if dark mode class is currently present
            if (toggleModeLink1) {                                      // if this is the portfolio page
                toggleModeLink1.textContent = 'Switch to Light Mode';   // update link text to switch to light mode
            }
            if (toggleModeLink2) {                                      // if this is the playground page
                toggleModeLink2.textContent = 'Switch to Light Mode';   // update link text to switch to light mode
            }
        } else {                                                        // if dark mode class is not present
            if (toggleModeLink1) {                                      // if this is the portfolio page
                toggleModeLink1.textContent = 'Switch to Dark Mode';    // update link text to switch to dark mode
            }
            if (toggleModeLink2) {                                      // if this is the playground page
                toggleModeLink2.textContent = 'Switch to Dark Mode';    // update link text to switch to dark mode
            }
        }

        // save preference to local storage
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light'); // user's perference will be remembered even after page reload, "light" is explicitly defined as default
    }

    // on page load, check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');                   // get theme preference from local storage
    if (savedTheme === 'dark') {                                        // if dark mode is saved in local storage
        body.classList.add('dark-mode');                                // add dark mode class to body
        if (toggleModeLink1) {                                          // if this is the portfolio page     
            toggleModeLink1.textContent = 'Switch to Light Mode';       // update link text to switch to light mode
        }
        if (toggleModeLink2) {                                          // if this is the playground page
            toggleModeLink2.textContent = 'Switch to Light Mode';       // update link text to switch to light mode
        }
    }

    // add event listeners to toggle links
    if (toggleModeLink1) {                                              // if this is the portfolio page
        toggleModeLink1.addEventListener('click', function(e) {         // add click event listener to toggle link
            e.preventDefault();                                         // prevent default behavior of link, which is to navigate to another page
            toggleMode();                                               // call toggleMode function to switch between dark and light mode
        });
    }

    if (toggleModeLink2) {                                              // if this is the playground page
        toggleModeLink2.addEventListener('click', function(e) {         // add click event listener to toggle link
            e.preventDefault();                                         // prevent default behavior of link, which is to navigate to another page
            toggleMode();                                               // call toggleMode function to switch between dark and light mode
        });
    }
});


// HAMBURGER MENU ACTIONS

// function to toggle  hamburger menu
function toggleMenu() {
    const menu = document.getElementById('navMenu') || document.getElementById('navMenu2') || document.getElementById('navMenu3');  // select menu based on current page
    // const hamburger = document.getElementById('hamburger-menu'); // select hamburger menu button element by id, not currently needed

    // toggle 'active' class to show/hide menu
    menu.classList.toggle('active');                                // toggle 'active' class to show/hide menu, note toggle is a built-in method
    // hamburger.classList.toggle('active');                        // toggle 'active' class to show/hide hamburger menu button, not currently needed
}

// function to close hamburger menu
function closeMenu() {
    const menu = document.getElementById('navMenu') || document.getElementById('navMenu2') || document.getElementById('navMenu3');
    // const hamburger = document.getElementById('hamburger-menu'); // not currently needed
    
    // remove 'active' class to hide the menu
    menu.classList.remove('active');                                // remove 'active' class to hide menu
    // hamburger.classList.remove('active');                        // remove 'active' class to hide hamburger menu button, not currently needed
}

// attach event listeners to links to close hamburger menu on click
function setupMenuLinks() {
    const menuLinks = document.querySelectorAll('.nav-menu a');     // select all menu links
    menuLinks.forEach(link => {                                     // loop through each link    
        link.addEventListener('click', closeMenu);                  // add click event listener to each link to close the menu when clicked
    }); 
}

// setup hamburger menu links after the DOM has loaded
document.addEventListener('DOMContentLoaded', setupMenuLinks);      // call setupMenuLinks function after DOM has loaded



// CONTACT FORM ACTIONS

// function to confirm contact form submission
function confirmSubmission() {
    return confirm("Are you sure you want to submit the form?");    // confirm is a built-in function that displays a dialog box with a message and OK/Cancel buttons
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
        const randomIndex = Math.floor(Math.random() * quotes.length); // Math.floor is a built-in function that rounds down to the nearest whole number, .random returns a random number between 0 and 1, multiplied by the length of the quotes array
        const randomQuote = quotes[randomIndex];

        // split quote and author based on the dash
        const [quoteText, quoteAuthor] = randomQuote.split(" - ");

        // display quote and author separately
        document.getElementById('quoteText').innerHTML = `<br>"${quoteText}"`;  // quote on a new line
        document.getElementById('quoteText').style.fontStyle = 'italic';        // italicize quote

        document.getElementById('quoteAuthor').textContent = `- ${quoteAuthor}`;// author on a new line
        document.getElementById('quoteAuthor').style.fontStyle = 'normal';      // make sure author is not italicized
    });
});


// SLIDESHOW ACTIONS

// define a slideshow class to encapsulate image slideshow behavior
class Slideshow {
    constructor(images, containerId, interval) {
        this.images = images;                                               // which image array to display? defined elsewhere, given in constructor parameter
        this.container = document.getElementById(containerId);              // where to display images? given in constructor parameter
        this.currentIndex = 0;                                              // always start with first image in array
        this.interval = interval;                                           // how long to wait between images? given in constructor parameter in ms
        this.startSlideshow();                                              // start the slideshow
    }

    // method to display current image
    showImage() {
        const { src, alt } = this.images[this.currentIndex];                // get current image src and alt text from info in constructor
        this.container.innerHTML = `                            
            <img src="${src}" alt="${alt}"/>
        `;                                                                  // display image in container defined in constructor, note html string
        this.currentIndex = (this.currentIndex + 1) % this.images.length;   // move to next image, loop back to 0 if at end
    }
    
    // method to start  image slideshow
    startSlideshow() {
        this.showImage();                                                   // display  first image
        setInterval(() => this.showImage(), this.interval);                 // set interval (defined in constructor) to display next image
    }
}

// initialize the Slideshow class once the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    const puffinImages = [                                                  // define array of puffin images, here images are local
        { src: 'assets/pictures/puffin1.jpg', alt: 'Puffin 1' },
        { src: 'assets/pictures/puffin2.jpg', alt: 'Puffin 2' },
        { src: 'assets/pictures/puffin3.jpg', alt: 'Puffin 3' },
        { src: 'assets/pictures/puffin4.jpg', alt: 'Puffin 4' },
        { src: 'assets/pictures/puffin5.jpg', alt: 'Puffin 5' }
    ];
    // create new Slideshow object
    const puffinSlideshow = new Slideshow(puffinImages, 'puffin-gallery', 3000);    // constructor parameter defines array of images, container id, and interval
});


// CURRENT TIME ACTIONS

// function to get current time in Oulu
document.addEventListener('DOMContentLoaded', function() {                              // don't run the code until the DOM has loaded
    document.getElementById('fetchTimeButton').addEventListener('click', function() {   // add event listener to button
        const now = new Date();                                                         // get current date and time
        const options = {                                                               // define options for formatting date/time
            timeZone: 'Europe/Helsinki', // Eastern European Time
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour12: false // 24-hour clock
        };
        
        // format  current date/time for specified time zone
        const formatter = new Intl.DateTimeFormat('en-US', options);    // en-US because I want "September 17", not "17 September"
        const formattedTime = formatter.format(now);                    // format the current date/time

        // display formatted time
        document.getElementById('time-display').textContent = `Current time in Eastern European Time is: ${formattedTime}`; // note html string
    });
});


// PARKING LOT ACTIONS

// don't run the code until the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {       // wait until DOM is loaded to run the code
    
    // oulunliikenne API url
    const parkURL = 'https://api.oulunliikenne.fi/proxy/graphql';   // API URL for fetching parking lot data

    // reference to the table body and other elements
    const tableBody = document.getElementById('tableBody');         // reference to the table body
    const carParkTable = document.getElementById('carParkTable');   // reference to the table
    const parkingLoadingMessage = document.getElementById('parkingLoadingMessage'); // reference to the loading message
    const parkingErrorMessage = document.getElementById('parkingErrorMessage');    // reference to the error message

    // button click event listener
    document.getElementById('fetchParkingButton').addEventListener('click', () => { // add click event listener to button
        // Clear previous data and messages
        tableBody.innerHTML = '';                                   // clear previous data
        carParkTable.style.display = 'none';                        // hide table
        parkingLoadingMessage.style.display = 'block';              // show loading message
        parkingErrorMessage.style.display = 'none';                 // don't show error message

        // API request body (GraphQL query)
        const requestBody = JSON.stringify({                        // convert object to JSON string
            query: "{ carParks { name, maxCapacity, spacesAvailable } }"    // GraphQL query to fetch car park data
        });

        // fetch data from  API
        fetch(parkURL, {                                            // fetch() returns a Promise, which represents a future result of an asynchronous operation
            method: 'POST',                                         // POST method to send data to the server
            headers: {                                              // headers to specify content type
            'Content-Type': 'application/json'                      // content type is JSON
            },
            body: requestBody                                       // request body contains the GraphQL query
        })
        .then(response => response.json())                          // parse response as JSON
        .then(data => {                                             // data is the resolved Promise from the previous .then(), aka the JSON object which contains the data we want
            parkingLoadingMessage.style.display = 'none';           // hide loading message

            if (data.data && data.data.carParks) {                  // if data is valid

                // track unique lot names to prevent duplicates
                const uniqueNames = new Set();                      // Set object to store unique names
                const rows = data.data.carParks                     // map data to table rows
                    .filter(park => {                               // filter out duplicates, null, or undefined values; .filter returns a new array with elements that pass the test
                    const name = park.name || "unknown ☹";          // replace null or undefined values with "unknown ☹"
                    if (uniqueNames.has(name)) {                    // check if name is already in the Set
                        return false;                               // skip duplicates
                    } else {                                        // if name is not in the Set
                        uniqueNames.add(name);                      // add name to the Set
                        return true;                                // include unique names
                    }
                    })
                    .map(park => {                                  // map data to table rows; .map returns a new array with transformed elements
                        // replace null or undefined values with "unknown ☹"
                        const name = park.name || "unknown ☹";                                                         // replace null or undefined names with "unknown ☹"
                        const maxCapacity = park.maxCapacity != null ? park.maxCapacity : "unknown ☹";                 // replace null or undefined capacities with "unknown ☹"
                        const spacesAvailable = park.spacesAvailable != null ? park.spacesAvailable : "unknown ☹";     // replace null or undefined availabilities with "unknown ☹"
                
                        return `<tr>
                            <td>${name}</td>
                            <td>${maxCapacity}</td>
                            <td>${spacesAvailable}</td>
                        </tr>`;                                     // now we have a table row with name, max capacity, and spaces available for each unique car park
                    });

                // populate table with unique data
                tableBody.innerHTML = rows.join('');                // join rows into a single html string and add to table body
                carParkTable.style.display = 'table';               // show final table

            } else {
                parkingErrorMessage.style.display = 'block';        // show error message if data is weird
            }
            
        })
        .catch(error => {                                           // handle both fetch errors and errors thrown in .then()
            console.error('Error fetching data:', error);           // log error to console
            parkingLoadingMessage.style.display = 'none';           // hide loading message
            parkingErrorMessage.style.display = 'block';            // show generic error message on page, "block" is a display value that makes the element visible
        });
    });
});

// let user sort by column contents, fun fact this nearly cost me my sanity
// this is outside the fetch event listener to avoid re-adding event listeners on each fetch

let sortOrder = {};                                             // keeps track of sorting order for each column

function sortTable(columnIndex) {                               // sort table by column index
    const table = document.getElementById("carParkTable");      // get table element
    const tbody = table.querySelector("tbody");                 // get table body element, querySelector returns the first element that matches the selector
    const rows = Array.from(tbody.querySelectorAll("tr"));      // get all table rows as an array: querySelectorAll returns a NodeList, which is not an array, but can be converted to one
    
    // toggle sort order: asc or desc
    sortOrder[columnIndex] = !sortOrder[columnIndex];           // toggle sort order for the clicked column
    
    rows.sort((rowA, rowB) => {                                 // sort rows based on column contents
        const cellA = rowA.querySelectorAll("td")[columnIndex].textContent.trim();  // get cell content for row A, trim removes whitespace from both ends of a string
        const cellB = rowB.querySelectorAll("td")[columnIndex].textContent.trim();  // get cell content for row B, trim removes whitespace from both ends of a string
        
        if (!isNaN(cellA) && !isNaN(cellB)) {                   // check if both cells contain numbers, isNaN is a built-in function that checks if a value is NaN aka not a number
            // sort numerically if column contains numbers
            return sortOrder[columnIndex] ? cellA - cellB : cellB - cellA;  // sort numbers based on sort order
        } else {                                                // if contents are not numbers
            // sort alphabetically for text columns
            return sortOrder[columnIndex] ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);    // sort text based on sort order
        }
    });

    // clear and re-add sorted rows
    tbody.innerHTML = "";                                   // clear table body
    rows.forEach(row => tbody.appendChild(row));            // add sorted rows back to table body

    // update sorting arrows
    updateArrows(columnIndex);                              // update arrows to indicate sort order, currently disabled
}

    /*
    function updateArrows(columnIndex) {
        // clear all arrow indicators
        for (let i = 0; i < 3; i++) { // assuming 3 columns, adjust if more
            document.getElementById(`arrow${i}`).textContent = '';
        }

        // add appropriate arrow to the sorted column
        const arrow = sortOrder[columnIndex] ? '▼' : '▲';
        document.getElementById(`arrow${columnIndex}`).textContent = arrow;
    }
    */


// NUMBER TRIVIA ACTIONS

function fetchNumberTrivia() {

    // turns out cors proxy is needed for this API, because github pages is served over https and the numbers API is not
    const numberAPI = "https://corsproxy.io/?" + encodeURIComponent("http://numbersapi.com/random/math?rand=" + new Date().getTime()); // url is encoded to avoid special characters, cors proxy is used to bypass CORS restrictions (Cross-Origin Resource Sharing) due to http vs https mismatch
    fetch(numberAPI)                                                        // fetch() returns a Promise, which represents a future result of an asynchronous operation
        .then(response => {                                                 // once the promise is returned by fetch(), .then() processes the response
            if (!response.ok) {                                             // check if the response status is not OK
                throw new Error(`HTTP error! Status: ${response.status}`);  // throw an error into the catch block if not OK
            }
            return response.text();                                         // resolve the response object into text and return the Promise
        })
        .then(data => {                                                     // this is the resolved Promise from the previous .then(), aka the text which contains the data we want
            document.getElementById('numberTriviaDisplay').textContent = data;  // display number trivia on the page
        })
        .catch(error => {                                                   // handle both fetch errors and errors thrown in .then()
            console.error('Error fetching number trivia:', error);          // log error to console
            document.getElementById('numberTriviaDisplay').textContent = 'Error fetching number trivia';    // display generic error message on page if an error occurs
        });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchNumberButton').addEventListener('click', fetchNumberTrivia);  // add click event listener to button
});


// PET PIC ACTIONS

// API URLs
const dogUrl = "https://dog.ceo/api/breeds/image/random";                   // here cors proxy is not needed because the dog API is served over https
const catUrl = "https://api.thecatapi.com/v1/images/search";                // here cors proxy is not needed because the cat API is served over https

// show or hide messages
function showLoadingMessage() {
    document.getElementById('petLoadingMessage').style.display = 'block';   // show loading message
    document.getElementById('petErrorMessage').style.display = 'none';      // hide error message
}

function showErrorMessage() {
    document.getElementById('petLoadingMessage').style.display = 'none';    // hide loading message
    document.getElementById('petErrorMessage').style.display = 'block';     // show error message
}

function hideMessages() {
    document.getElementById('petLoadingMessage').style.display = 'none';    // hide loading message
    document.getElementById('petErrorMessage').style.display = 'none';      // hide error message
}

// function to fetch and display random dog image
function fetchDogPic() {
    // clear previous images
    document.getElementById('dogPic').innerHTML = '';                       // clear previous images    
    document.getElementById('catPic').innerHTML = '';                       // clear previous images

    // show loading message
    showLoadingMessage();

    // fetch image from dog API
    fetch(dogUrl)                                                           // fetch() returns a Promise, which represents a future result of an asynchronous operation
        .then(response => {                                                 // once the promise is returned by fetch(), .then() processes the response
            if (!response.ok) {                                             // check if the response status is not OK
                throw new Error(`HTTP error! Status: ${response.status}`);  // throw an error into the catch block if not ok
            }
            return response.json();                                         // resolve the response object into a JSON object and return the Promise
        })
        .then(data => {                                                     // this is the resolved Promise from the previous .then(), aka the JSON object which contains the data we want
            const img = document.createElement('img');                      // create a new image element
            img.src = data.message;                                         // set source attribute, dog API response has image URL under "message"
            img.alt = 'Random Dog';                                         // set alt attribute for accessibility
            
            document.getElementById('dogPic').appendChild(img);             // add image to the dogPic div

            hideMessages();                                                 // hide loading message after image is displayed
        })
        .catch(error => {                                                   // handle both fetch errors and errors thrown in .then()
            console.error('Error fetching dog picture:', error);            // log error to console
            showErrorMessage();                                             // show generic error message on page if an error occurs
        });
}

// function to fetch and display random cat image
function fetchCatPic() {    
    // clear previous images
    document.getElementById('dogPic').innerHTML = '';                       // clear previous images
    document.getElementById('catPic').innerHTML = '';                       // clear previous images

    // show loading message
    showLoadingMessage();

    // fetch image from cat API
    fetch(catUrl)                                                           // fetch() returns a Promise, which represents a future result of an asynchronous operation
        .then(response => {
            if (!response.ok) {                                             // check if the response status is not OK
                throw new Error(`HTTP error! Status: ${response.status}`);  // throw an error into the catch block if not OK
            }
            return response.json();                                         // process the response object and return a Promise that resolves to the parsed JSON
        })
        .then(data => {
            const img = document.createElement('img');                      // create an image element and set its src attribute
            img.src = data[0].url;                                          // cat API response has image URL under "url"
            img.alt = 'Random Cat';                                         // set alt attribute for accessibility
            
            document.getElementById('catPic').appendChild(img);             // add image to the catPic div

            hideMessages();                                                 // hide messages after image is displayed
        })
        .catch(error => {                                                   // handle both fetch errors and errors thrown in .then()
            console.error('Error fetching cat picture:', error);            // log error to console
            showErrorMessage();                                             // show generic error message on page if an error occurs
        });
}

// attach event listeners to buttons after the DOM has loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetchDogButton').addEventListener('click', fetchDogPic);
    document.getElementById('fetchCatButton').addEventListener('click', fetchCatPic);
});