$(document).ready(function () {



    $('.candidates').slick({
        infinite: true,
        mobileFirst: true,
        arrows: true,
        autoplay: true,
        autoplayspeed: 3000,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // $('.mosaic-grids').slick({
    //     centerMode: false,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });

    Arrows();

    $(window).resize(function () {
        Arrows();
    });

});

function Arrows() {
    $('.slick-prev').empty().append('<ion-icon name="chevron-back-sharp"></ion-icon>');
    $('.slick-next').empty().append('<ion-icon name="chevron-forward-sharp"></ion-icon>');
}