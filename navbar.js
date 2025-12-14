// Toggle menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

mobileMenu.addEventListener('click', function () {
    navbarMenu.classList.toggle('active');
});

// Tutup menu saat klik link di mobile
const menuLinks = document.querySelectorAll('.navbar-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        navbarMenu.classList.remove('active');
    });
});