const navigationGroup = document.querySelector('#navigationGroup');
const navOne = document.querySelector('#navOne')
const navTwo = document.querySelector('#navTwo')
const navThree = document.querySelector('#navThree')

navigationGroup.addEventListener('mouseenter', expandBurgerMenu);
navigationGroup.addEventListener('mouseleave', collapseBurgerMenu);

function expandBurgerMenu(e) {
    navigationGroup.classList.add('open')
    navigationGroup.classList.remove('close')
}

function collapseBurgerMenu(e) {
    navigationGroup.classList.remove('open')
    navigationGroup.classList.add('close')
}
