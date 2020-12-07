$(document).ready(function() {

    // venobox
    $('.venobox').venobox();



    //about casino part slick Slider
    $('.about_casino_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        speed: 1500,
        centerMode: true,
        centerPadding: false,
        dots: true,
    });

});