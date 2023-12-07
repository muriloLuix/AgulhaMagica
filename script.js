let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('open-menu');
    overlay.style.display = 'block';
});

function closeMenu() {
    if (menu.classList.contains('open-menu')) {
        menu.classList.remove('open-menu');
        overlay.style.display = 'none'; 
    }
}

menu.addEventListener('click', () => {
    closeMenu();
});

overlay.addEventListener('click', () => {
    closeMenu();
});
