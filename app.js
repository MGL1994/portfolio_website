const nav = document.querySelector('nav');

nav.addEventListener('mouseenter', expandBurgerMenu);
nav.addEventListener('mouseleave', collapseBurgerMenu);

function expandBurgerMenu(e) {
    e.target.style.backgroundColor = 'blue';
}

function collapseBurgerMenu(e) {
    e.target.style.backgroundColor = 'white';
}
