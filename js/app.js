/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.querySelector('#navbar__list');
const sectionsHdList = document.getElementsByTagName('h2');
const sections = document.getElementsByTagName('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createLink(section) {
    const navbarElement = document.createElement('li');
    const text = document.createTextNode(section.innerText);
    navbarElement.appendChild(text);
    navbarElement.setAttribute('class', 'menu__link');

    navbarElement.addEventListener('click', function(){ scrollToSection(section)});

    navbarList.appendChild(navbarElement);
}

function scrollToSection(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
for (const section of sectionsHdList) {
    createLink(section);
}

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function (){
    for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight / 2
            && section.getBoundingClientRect().top + section.getBoundingClientRect().height > window.innerHeight / 2) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    }
})


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


