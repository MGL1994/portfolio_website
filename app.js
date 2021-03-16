const navigationGroup = document.querySelector('#navigationGroup');
const navOne = document.querySelector('#navOne')
const navTwo = document.querySelector('#navTwo')
const navThree = document.querySelector('#navThree')

const triangleContainer = document.querySelector('#triangleContainer')
const largeTriangleHollow = document.querySelector('#largeTriangleHollow')
const largeTriangleSolid = document.querySelector('#largeTriangleSolid')

navigationGroup.addEventListener('mouseenter', expandBurgerMenu);
navigationGroup.addEventListener('mouseleave', collapseBurgerMenu);

largeTriangleHollow.addEventListener('mouseenter', showLargeTriangleSolid)
largeTriangleHollow.addEventListener('mouseleave', hideLargeTriangleSolid)

function expandBurgerMenu(e) {
    navigationGroup.classList.add('open')
}

function collapseBurgerMenu(e) {
    navigationGroup.classList.remove('open')
}

function showLargeTriangleSolid() {
    triangleContainer.classList.add('show')
}

function hideLargeTriangleSolid() {
    triangleContainer.classList.remove('show')
}
