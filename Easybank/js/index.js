// Target the nav-toggle class in my html
const navToggle = document.querySelector('.nav-toggle');

// Target the primary-nav class in my html
const nav = document.querySelector('.primary-nav');

// Target the menu class in my hmtl
const Menu = document.querySelector('.menu');

// Target the close-menu class in my html
const closeMenu = document.querySelector('.close-menu');

// Adds a click event listener when the nav-toggle button class is clicked and redirects it to the showPopup function
navToggle.addEventListener('click', showPopup);

// My showPopup function
function showPopup(e) {
    // Adds the properties from the nav-visible class stated in the css to the primary nav class in the html
    nav.classList.toggle('nav-visible');

    // Adds the properties from the close-menu class stated in the css to the Menu class in the html
    Menu.classList.toggle('close-menu');

    // Adds the properties from the open class stated in the css to the closeMenu class in the html
    closeMenu.classList.toggle('open');
}