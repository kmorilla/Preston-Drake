$(document).ready(function () {

    NavBar();
    ImgClick();
    CampaignHeaderAlignment();
    LogoBuilder();

    $(window).resize(function () {
        NavBar();
        CampaignHeaderAlignment();
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

function CampaignHeaderAlignment() {
    var windowWidth = $(window).outerWidth(true);
    if (windowWidth > 767) {
        var wrapWidth = $('.campaign-management .wrap').width();
        var colWidth = $('.campaign-management .col-lg-5').outerWidth();
        var campaignMargin = ((wrapWidth - (colWidth * 2)) / 2) + 15;
        $('.campaign-management h4').css('margin-left', campaignMargin);
    }
}

function LogoBuilder() {
    var folder = "../img/logos/";

    $.ajax({
        url: folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    $(".logos").append("<div class='logo'><img src='" + val + "'></div>");
                }
            });
        }
    });
}

