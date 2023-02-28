'use strict'

const menuSize = '500px';

const hideNav = document.querySelector('.hide-nav')

const showNav = document.querySelector('.show-nav')

let open = true;

document.querySelector('#btnMenu').addEventListener('click', e => {
    hideNav.classList.add('show-nav');
    open = !open;
    toggleMenu();
})

document.querySelector('#btnClose').addEventListener('click', e => {
    open = false;

    toggleMenu();
})

function toggleMenu() {
    if (open) {
        document.querySelector('#menu').style.marginLeft = 0;
        return;
    }

    document.querySelector('#menu').style.marginLeft = `-${menuSize}`;
}