$(document).ready(function () {
    ImgClick();
});

function ImgClick() {
    $('img').click(function () {
        source = $(this).attr('src');
        console.log(source);
        PopUp(source)
    });
}

function PopUp(image) {
    $('.modal-body img').remove();
    $('.modal-body').append('<img src="' + image + '" >');
}