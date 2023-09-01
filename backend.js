document.addEventListener('DOMContentLoaded', () => {
    const navLinkEls = document.querySelectorAll('.nav_link');

    navLinkEls.forEach(navLinkEl => {
        navLinkEl.addEventListener('click', () => {
            document.querySelector('.active')?.classList.remove('active');
            navLinkEl.classList.add('active');
        });
    });
});
