import $ from 'jquery';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

$(document).ready(function () {
    console.log("ready!");

    const swiper = new Swiper('.mySwiper', {
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});