document.addEventListener('DOMContentLoaded', function () {
    console.log('Halaman dimuat!');

    // 1. Animasi Fade In saat halaman dimuat
    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
        mainContent.style.opacity = 1;
    }, 100);

    // 2. Logic Navbar Mobile Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function () {
            navbarMenu.classList.toggle('active');
        });
    }

    // 3. Tutup menu mobile saat link diklik
    const menuLinks = document.querySelectorAll('.navbar-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
            }
        });
    });

    // 4. Highlight Menu Aktif saat Scroll
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.navbar-menu li a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= (sectionTop) && scrollPosition < (sectionTop + sectionHeight)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active-link');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active-link');
            }
        });
    });
});