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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});