const nav = document.querySelector('nav');
const navOne = document.querySelector('#navOne')
const navTwo = document.querySelector('#navTwo')
const navThree = document.querySelector('#navThree')

nav.addEventListener('mouseenter', expandBurgerMenu);
nav.addEventListener('mouseleave', collapseBurgerMenu);

function expandBurgerMenu(e) {
    nav.classList.add('open')
}

function collapseBurgerMenu(e) {
    nav.classList.remove('open')
}
