// performance.js

window.addEventListener('load', function () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    var pElement = document.querySelector('.footer__performance p');
    if (pElement) {
        pElement.textContent = 'Tiempo de carga de la página: ' + loadTime + ' milisegundos';
    }
});