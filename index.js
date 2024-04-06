const hamburgerMenu = document.querySelector('.hamburger-icon');
const menuLinks = document.querySelector('.menu-links');


hamburgerMenu.addEventListener(`click`, ()=>{
    menuLinks.classList.toggle('open-menu-links')
});


