window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scroll-active');
    } else {
        header.classList.remove('scroll-active');
    }
});
