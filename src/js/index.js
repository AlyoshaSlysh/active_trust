import $ from 'jquery';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

$(document).ready(function () {
    console.log("ready!");

    // init Swiper:

    const swiper = new Swiper('.mySwiper', {
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// import Swiper and modules styles