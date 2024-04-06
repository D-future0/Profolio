const hamburgerMenu = document.querySelector('.hamburger-icon');
const menuLinks = document.querySelector('.menu-links');
const downloadResume = document.querySelector('.download-resume');
const contact = document.querySelector('#contact-info');

hamburgerMenu.addEventListener(`click`, ()=>{
    menuLinks.classList.toggle('open-menu-links')
});

downloadResume.addEventListener(`click`, ()=>{
    window.open("/img/albert.JPG")
})

