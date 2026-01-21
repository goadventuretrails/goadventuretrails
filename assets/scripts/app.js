// MENU

document.querySelector(".nav__btn").addEventListener("click", openMenu);

function openMenu() {
  document.querySelector(".nav__list").classList.toggle("nav--active")
}

// MENU LINK STATES

const navItems = document.querySelectorAll('.nav__list--item a');

navItems.forEach(item => {
    item.addEventListener('click', function() {

        navItems.forEach(link => link.classList.remove('nav-link--active'));
        
        // 4. Add the active class to the specific link you just clicked
        this.classList.add('nav-link--active');
    });
});