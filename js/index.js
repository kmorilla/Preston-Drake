$(document).ready(function () {

    NavBar();
    ImgClick();
    LogoBuilder();

    $(window).resize(function () {
        NavBar();
    });
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