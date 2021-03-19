const navigationGroup = document.querySelector('#navigationGroup');
const navOne = document.querySelector('#navOne')
const navTwo = document.querySelector('#navTwo')
const navThree = document.querySelector('#navThree')

const triangleContainer = document.querySelector('#triangleContainer')
const largeTriangleHollow = document.querySelector('#largeTriangleHollow')
const largeTriangleSolid = document.querySelector('#largeTriangleSolid')

const socialLogos = document.querySelectorAll('i')

navigationGroup.addEventListener('mouseenter', expandBurgerMenu);
navigationGroup.addEventListener('mouseleave', collapseBurgerMenu);

largeTriangleHollow.addEventListener('mouseenter', showLargeTriangleSolid)
largeTriangleHollow.addEventListener('mouseleave', hideLargeTriangleSolid)

socialLogos.forEach(logo => {
    logo.addEventListener('mouseenter', showLogoShadow)
    logo.addEventListener('mouseleave', hideLogoShadow)
    logo.addEventListener('click', openLink)
})

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

function showLogoShadow(e) {
    const target = e.target.id.split('L')
    const logo = target[0]
    const shadow = document.querySelector(`#${logo}Shadow`)
    shadow.classList.add('show')
}

function hideLogoShadow(e) {
    const target = e.target.id.split('L')
    const logo = target[0]
    const shadow = document.querySelector(`#${logo}Shadow`)
    shadow.classList.remove('show')
}

function openLink(e) {
    const target = e.target.id.split('L')
    const logo = target[0]
    switch(logo) {
        case 'github':
            window.open("https://github.com/MGL1994")
            break;
        case 'linkedin':
            window.open("https://www.linkedin.com/in/michael-g-laird/")
            break;
        case 'envelope':
            window.open("mailto:michaelgl1994@gmail.com")
    }
}
