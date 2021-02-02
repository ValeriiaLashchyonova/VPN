const burger = document.getElementById('burger-menu')
const shadow = document.getElementById('shadow')
const menu = document.querySelector('.header-navbar__menu')
const toggleMenu = () => {
    burger.classList.toggle('open')
    menu.classList.toggle('open')
    shadow.classList.toggle('open')
}
burger.addEventListener('click', toggleMenu)
shadow.addEventListener('click', toggleMenu)

