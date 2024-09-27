# Intro to Web Applications: Course Project

## OAMK 3rd semester course (5 ECTS), specialization in Software Development

This website started out as just refreshing my HTML skills by building a simple portfolio, but somehow grew into my final course project. Since I wanted to keep the semi-respectable portfolio I had already built, I decided to add a special "Project Playground" web page accessible through the hamburger menu. This Playground page contains the elements required in the grading criteria for the grade I aimed for which didn't really fit into a portfolio. (Like a slideshow of puffin photos or quotes from the BBC radio comedy Cabin Pressure.)

### Grading criteria:

Full marks are given if every item on the list is completed:

#### HTML:
✅ Basic HTML structure is present  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- throughout index.html and playground.html*  
✅ HTML structure with clear content differentiation  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- throughout index.html and playground.html*  
✅ Use of forms, links, and media  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- repeatedly used, e.g. contact form, GitHub links, and GitHub & LinkedIn logo images in index.html*  
✅ Tables are effectively used  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- course table in index.html, API call response formatted as table in playground.html*  
✅ Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- throughout index.html and playground.html, e.g. header, main, nav, section, article...*

#### CSS:
✅ Basic CSS styling (colors, fonts)  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- present throughout style.css*  
✅ Use of classes and IDs to style specific elements  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- present throughout style.css*  
✅ Implementation of responsive design elements  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- media query (style.css line 363-390), flexible images, flexbox, fluid scalable layout used throughout site*  
✅ Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- flexbox used throughout site*  
✅ Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- consistent modern look and layout, dark and light mode for personal preference, high-contrast for accessibility but not unpleasantly stark, flex items arranged so that similar ones are in each "row" and large/important ones automatically take up 100% width*  

#### JavaScript Basics:
✅ Simple interactions (like alerts on a button click)  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- "Are you sure you want to submit" alert when clicking submit button in contact form (actions.js line 96->)*  
✅ Multiple event listeners and basic DOM manipulations  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- throughout actions.js, e.g. event listeners for DOM content loaded and button clicks, populating parking table after API fetch is complete, clearing old content before loading new after button clicks*  
✅ Use of arrays, objects, and functions  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- consistently used, e.g. quote array (actions.js line 110->), time formatter object (actions.js line 205->), loading and error message functions (actions.js line 379->)*  
✅ Advanced logic, looping through data, and dynamic DOM updates  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- consistently used, e.g. light/dark mode toggle (actions.js line 3->), image slideshow (actions.js line 157->), math trivia populated dynamically (actions.js line 367->)*  
✅ Consistent use of Object-Oriented JavaScript principles  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- custom slideshow class defined and object dynamically created (actions.js line 145->)*  

#### Asynchronous Operations:
✅ Use of timers  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- slideshow set to switch image every 3 seconds (actions.js line 169)*  
✅ Successful implementation of an AJAX call or Fetch  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- multiple fetches through playground.index, e.g. fetching cat and dog images (actions.js line 372->)*  
✅ Data from the asynchronous call is displayed on the web page  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- multiple times through playground.index, e.g. displaying math trivia quote (actions.js line 347->)*  
✅ Error handling is implemented (for failed API calls, etc.)  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- present for every API call (e.g. actions.js line 289->)*  
✅ Effective use of asynchronous data to enhance user experience (like filtering, sorting)  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*- parking lot data fetched in API call displayed in table sortable by lot name, max spaces, and available space (actions.js line 297->)*  <br><br>


##### Personal bonus features:

- Dark/Light Mode toggle
- Multi-page website
- Fully functional contact form