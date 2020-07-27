$(document).ready(function () {
    $('.mosaic-grid img').click(function () {
        source = $(this).attr('src');
        PopUp(source)
    });

    $('.candidates').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    });

    $('.slick-prev').empty().append('<ion-icon name="caret-back-sharp"></ion-icon>');
    $('.slick-next').empty().append('<ion-icon name="caret-forward-sharp"></ion-icon>');
});

function PopUp(image) {
    $('#mosaic .modal-body img').remove();
    $('#mosaic .modal-body').append('<img src="' + image + '" >');
}

