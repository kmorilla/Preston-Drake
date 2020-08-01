$(document).ready(function () {

    $(window).resize(function () {
        NavBar();
    });

    $('img').click(function () {
        source = $(this).attr('src');
        PopUp(source)
    });

    // $('#about img').click(function () {
    //     source = $(this).attr('src');
    //     PopUp(source)
    // });

    $('.candidates').slick({
        infinite: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // $('.mosaic-grids').slick({
    //     centerMode: false,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });

    $('.slick-prev').empty().append('<ion-icon name="caret-back-sharp"></ion-icon>');
    $('.slick-next').empty().append('<ion-icon name="caret-forward-sharp"></ion-icon>');
});

function PopUp(image) {
    $('.modal-body img').remove();
    $('.modal-body').append('<img src="' + image + '" >');
}

function NavBar() {
    var navHeight = $('nav').outerHeight(true);
    $('#home').css('margin-top', navHeight);
}

