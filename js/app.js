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
const sectionsLinks = document.createDocumentFragment();
const navbarList = document.querySelector('#navbar__list');
const sectionsHdList = document.getElementsByTagName('h2');
const sections = document.getElementsByTagName('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * @description Hides navigation bar
 */
function hideNav(){
    document.getElementById('navbar__list').style.display = 'none';
}

/**
 * @description Shows navigation bar
 */
function showNav(){
    document.getElementById('navbar__list').style.display = 'block';
}

/**
 * @description Adds additional section to main tag
 */
function addNewSection() {
    const firstSection = document.getElementById('section1');
    const newSection = document.createElement('section');
    newSection.id = 'section4';
    newSection.setAttribute('data-nav', 'Section 4')
    newSection.innerHTML = firstSection.innerHTML;

    const sectionDiv = newSection.firstElementChild;
    sectionDiv.firstElementChild.innerText = 'Section 4';

    const main = document.querySelector('main');
    main.appendChild(newSection);
}

/**
 * @description Adds section link to navbar
 * @param {HTMLHeadingElement} sectionName - the name of the section to be linked
 */
function createLink(sectionName) {
    const navbarElement = document.createElement('li');
    const text = document.createTextNode(sectionName.innerText);
    navbarElement.appendChild(text);
    navbarElement.setAttribute('class', 'menu__link');

    navbarElement.addEventListener('click', () => scrollToSection(sectionName));

    sectionsLinks.appendChild(navbarElement);
}

/**
 * @description Scrolls to provided element on page
 * @param element
 */
function scrollToSection(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// Adding 4th section
addNewSection();

// Building the nav
for (const section of sectionsHdList) {
    createLink(section);
}
navbarList.appendChild(sectionsLinks);

// Adding class 'active' to section when near top of viewport
document.addEventListener('scroll', () => {
    showNav();
    for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight / 2
            && section.getBoundingClientRect().top + section.getBoundingClientRect().height > window.innerHeight / 2) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    }
    setTimeout(hideNav, 3000);
})
