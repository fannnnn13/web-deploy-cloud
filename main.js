const hamburgerNav = document.querySelector('.nav-hamburger');
const navbarContainer = document.querySelector('.navbar-container');

hamburgerNav.addEventListener('click', () => {
    navbarContainer.classList.toggle('active');
});