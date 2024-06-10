const navLinks = document.getElementById('nav-links');
const navBtn = document.getElementById('nav-btn');

navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});