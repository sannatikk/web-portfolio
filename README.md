# Intro to Web Applications: Course Project

## OAMK 3rd semester course (5 ECTS), specialization in Software Development

This website started out as just refreshing my HTML skills by building a simple portfolio, but somehow grew into my final course project. Since I wanted to keep the semi-respectable portfolio I had already built, I decided to add a special "Project Playground" web page accessible through the hamburger menu. This Playground page contains the elements required in the grading criteria for the grade I aimed for which didn't really fit into a portfolio. (Like a slideshow of puffin photos or quotes from the BBC radio comedy Cabin Pressure.)

### Website location:

My website is currently live [here](https://sannatikk.github.io/web-kurssi-testiprojekti/)!

## Grading criteria:

Full marks are given if every item on the list is completed:

### HTML:
✅ **Basic HTML structure is present**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- throughout index.html and playground.html  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- e.g. starting index.html line 1 ->  
✅ **HTML structure with clear content differentiation**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- throughout index.html and playground.html  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- e.g. starting index.html line 4 ->  
✅ **Use of forms, links, and media**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- repeatedly used, e.g.:  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- contact form in index.html lines 191-201,  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- GitHub link in index.html line 64, and  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- LinkedIn logo image in index.html line 187  
✅ **Tables are effectively used**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- course table in index.html lines 67-145  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- API call response formatted as table in playground.html lines 103-114  
✅ **Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- throughout index.html (e.g. lines 4, 11, 12, 24, 48, 208) and playground.html (e.g. lines 4, 13, 15, 23, 43, 149)  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- including header, main, nav, section, article, footer...

### CSS:
✅ **Basic CSS styling (colors, fonts)**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- present throughout style.css, e.g.:  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- style.css lines 3-7, 70, 81  
✅ **Use of classes and IDs to style specific elements**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- present throughout style.css, e.g.:  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- style.css lines 16, 138, 355  
✅ **Implementation of responsive design elements**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- media query (style.css line 363-390),  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- flexible images (e.g. style.css lines 334-361),  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- scalable layout used throughout site (e.g. style.css lines 149-153)  
✅ **Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- flexbox used throughout site (e.g. style.css lines 149-152),  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- including customized mobile view (style.css lines 373-388)  
✅ **Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- consistent modern look and layout,  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- easily visible and usable hamburger menu for navigation (style.css lines 176-229),  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- dark and light mode for personal preference (style.css lines 16-75),  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- high-contrast for accessibility but not unpleasantly stark (e.g. style.css lines 16-23, lines 80 and 85),  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- flex items arranged so that smaller/similar ones are in each "row" (e.g. playground.html lines 52-84, style.css line 151) and large/important ones automatically take up 100% width (e.g. style.css lines 171-173)  

### JavaScript Basics:
✅ **Simple interactions (like alerts on a button click)**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "Are you sure you want to submit" alert when clicking submit button in contact form (actions.js lines 99-101)  
✅ **Multiple event listeners and basic DOM manipulations**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- throughout actions.js, e.g.:  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- event listeners for DOM content loaded (e.g. actions.js line 107->) and button clicks (actions.js line 108->),  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- populating parking table after API fetch is complete (actions.js lines 249-295),  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- clearing old content before loading new after button clicks (e.g. actions.js lines 416-417)  
✅ **Use of arrays, objects, and functions**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- consistently used, e.g.:  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- quote array (actions.js line 111-126),  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- knitting quiz question array (actions.js lines 455-492)  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- time formatter object (actions.js line 205-206),  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- loading and error message functions (actions.js line 366-379)  
✅ **Advanced logic, looping through data, and dynamic DOM updates**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- consistently used, e.g.:  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- light/dark mode toggle (actions.js lines 3-58),  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- image slideshow (actions.js line 147-184),  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- math trivia populated dynamically (actions.js line 334-352)  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- knitting quiz (actions.js lines 454-571)  
✅ **Consistent use of Object-Oriented JavaScript principles**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- custom slideshow class defined and object dynamically created (actions.js line 148-184)*  

### Asynchronous Operations:
✅ **Use of timers**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- slideshow set to switch image every 3 seconds (actions.js line 169, 183)  
✅ **Successful implementation of an AJAX call or Fetch**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- multiple fetches through playground.index, e.g.:  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- fetching cat and dog images (actions.js lines 382-449)  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- fetching Oulu parking lot data (actions.js 242-294)  
✅ **Data from the asynchronous call is displayed on the web page**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- multiple times through playground.index, e.g.:  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- displaying fetched trivia data (actions.js line 346),   
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- displaying fetched dog picture (actions.js line 403)  
✅ **Error handling is implemented (for failed API calls, etc.)**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- present for every fetch (e.g. actions.js lines 407-409)  
✅ **Effective use of asynchronous data to enhance user experience (like filtering, sorting)**  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- parking lot data fetched in API call displayed in table sortable by lot name, max spaces, and available space (actions.js line 300-329)  <br><br>


#### My personal bonus features:

- Dark/Light Mode toggle
- Multi-page website
- Fully functional contact form