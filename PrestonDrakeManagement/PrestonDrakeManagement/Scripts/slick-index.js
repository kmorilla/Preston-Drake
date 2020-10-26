$(document).ready(function () {

    $('.clients').slick({
        infinite: true,
        mobileFirst: true,
        arrows: true,
        prevArrow: '<ion-icon name="chevron-back-sharp"></ion-icon>',
        nextArrow: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.slides').slick({
        infinite: true,
        centerPadding: '60px',
        mobileFirst: true,
        arrows: true,
        prevArrow: '<ion-icon name="chevron-back-sharp"></ion-icon>',
        nextArrow: '<ion-icon name="chevron-forward-sharp"></ion-icon>',
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

});