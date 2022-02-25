const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
hamburgerMenu.addEventListener('click', () =>{
    hamburgerMenu.classList.toggle('show');
    navLinks.classList.toggle('show');
})