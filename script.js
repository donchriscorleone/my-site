const navButton = document.getElementById('nav-button');
const navIcon = document.getElementById('nav-menu-icon');

navButton.addEventListener('click', (e) => {
    navButton.classList.toggle('nav-open');
    navIcon.setAttribute('xlink:href', `./assets/icon-utility.svg#${navButton.classList.contains('nav-open') ? 'icon-close' : 'icon-burger'}`)
})