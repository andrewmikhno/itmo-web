// shopSlider.js
// конфиг Slick Slider
$(document).ready(function() {
    $('.slider').slick({
        infinite: true,            // делаем бесконечную прокрутку карточек товара
        slidesToShow: 6,           // отображаем 6 карточек товара
        slidesToScroll: 1,         // скролим только одну карточку товара
    });
});
