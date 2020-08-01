$(document).ready(function () {

    NavBar();
    ImgClick();
    CampaignHeaderAlignment();
    // MosaicRow();

    $(window).resize(function () {
        NavBar();
        CampaignHeaderAlignment();
        // MosaicRow();
    });





    // $('#about img').click(function () {
    //     source = $(this).attr('src');
    //     PopUp(source)
    // });

    // $('.candidates').slick({
    //     infinite: true,
    //     mobileFirst: true,
    //     responsive: [
    //         {
    //             breakpoint: 0,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //     ]
    // });

    // $('.mosaic-grids').slick({
    //     centerMode: false,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });

    // $('.slick-prev').empty().append('<ion-icon name="caret-back-sharp"></ion-icon>');
    // $('.slick-next').empty().append('<ion-icon name="caret-forward-sharp"></ion-icon>');
});

function ImgClick() {
    $('img').click(function () {
        source = $(this).attr('src');
        PopUp(source)
    });
}

function PopUp(image) {
    $('.modal-body img').remove();
    $('.modal-body').append('<img src="' + image + '" >');
}

function NavBar() {
    var navHeight = $('nav').outerHeight(true);
    $('#home').css('margin-top', navHeight);
}

function CampaignHeaderAlignment() {
    var windowWidth = $(window).outerWidth(true);
    if (windowWidth > 767) {
        var wrapWidth = $('.campaign-management .wrap').width();
        var colWidth = $('.campaign-management .col-lg-5').outerWidth();
        var campaignMargin = ((wrapWidth - (colWidth * 2)) / 2) + 15;
        $('.campaign-management h4').css('margin-left', campaignMargin);
    }
}

// function MosaicRow() {
//     var containerWidth = $('#mosaic .container').width();
//     var rowWidth = containerWidth / 3;
//     var newRowWidth = 'repeat(3, ' + rowWidth + ')';
//     console.log(rowWidth);
//     $('.mosaic-grid').css('gridTemplateRows', rowWidth);
// }

