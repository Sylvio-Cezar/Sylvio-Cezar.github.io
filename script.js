let header = document.getElementById('header');
let menu = document.getElementById('headerMenu');

function toggleMenu() {
    if (menu.classList.contains('disabled-menu')) {
        menu.classList.remove('disabled-menu');
        header.classList.remove('rounded-header');
    } else {
        menu.classList.add('disabled-menu');
        header.classList.add('rounded-header');
    }
}