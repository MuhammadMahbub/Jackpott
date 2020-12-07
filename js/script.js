$(document).ready(function() {

    // scrolling 
    $(window).scroll(function() {
        let scrl = $(this).scrollTop();
        if (scrl > 100) {
            $("#menu").addClass("menubg");
        } else {
            $("#menu").removeClass("menubg");
        }
    });

    // accordian part
    $('.card').click(function() {
        $('.crd_brdr').addClass('crd_brdr');
        $(this).toggleClass('crd_brdr');
    });

    // countdown part start
    $('#getting-started').countdown('2025/01/01', function(event) {
        $(this).html(event.strftime('<div><span>%H</span><span>Hours</span></div> <div><span>%M</span><span>Mins</span></div> <div><span>%S</span><span>Secs</span></div>'));
    });

    // scrollbar part
    $(".scrollbar").niceScroll(".wrap", {
        cursorwidth: "8px",
        cursorborder: "none",
        cursorcolor: "#1f004f",
        background: "#000",
        autohidemode: false,
    });




});