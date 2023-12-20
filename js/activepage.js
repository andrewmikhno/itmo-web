// activepage.js

var currentUrl = window.location.href;

var menuLinks = document.querySelectorAll('.nav__link');

menuLinks.forEach(function(link) {
    if (link.href === currentUrl) {
        link.classList.add('active');
    }
});