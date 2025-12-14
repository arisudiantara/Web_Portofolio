// Script umum, misalnya untuk animasi halaman
document.addEventListener('DOMContentLoaded', function() {
    console.log('Halaman dimuat!');
    // Tambahkan animasi sederhana
    const main = document.querySelector('main');
    main.style.opacity = 0;
    setTimeout(() => {
        main.style.transition = 'opacity 1s';
        main.style.opacity = 1;
    }, 100);
});