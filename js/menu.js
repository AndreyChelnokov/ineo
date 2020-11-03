document.addEventListener('DOMContentLoaded', () => {

    const itemActive = document.querySelector('header .activ-menu');
    const menuItems = document.querySelectorAll('.nav__list .nav__item');


    menuItems.forEach( item => {
        item.addEventListener('mouseover', () => {
            itemActive.style.left = `${item.offsetLeft}px`;
            itemActive.style.width =  `${item.offsetWidth}px`;
        })
    })




})