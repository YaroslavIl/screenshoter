'use strict'
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header__menu-body');
    iconMenu.addEventListener("click", function (a) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
