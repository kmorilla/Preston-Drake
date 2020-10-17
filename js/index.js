$(document).ready(function () {
    ImgClick();
    BlogSetup();
    LoadMore();
    LoadLess();
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

function BlogSetup() {
    let blog = '.blog-post';

    $(blog + ':nth-child(n + 4)').hide();
    $('.load-more-button').addClass('load-more-only-button');
    $('.load-less-button').hide();
}

function LoadMore() {
    let blog = '.blog-post';

    $('.load-more-button').click(function () {
        let visibleCount = $(blog + ':visible').length;

        if (visibleCount < 4) {
            $('.load-more-button').removeClass('load-more-only-button');
            $('.load-less-button').show('duration: 600');
        }

        $(blog + ':nth-child(n + 4):nth-child(-n + ' + (visibleCount + 3) + ')').show('duration: 600');
        $(blog + ':nth-child(n + ' + (visibleCount + 4) + ')').hide('duration: 600');
    });
}

function LoadLess() {
    let blog = '.blog-post';

    $('.load-less-button').click(function () {
        let visibleCount = $(blog + ':visible').length;
        let hiddenCount = (visibleCount % 3);

        if (hiddenCount == 0) {
            $(blog + ':nth-child(n + ' + (visibleCount - 2) + ')').hide('duration: 600');
        } else {
            $(blog + ':nth-child(n + ' + (visibleCount - (hiddenCount - 1)) + ')').hide('duration: 600');
        }

        if (visibleCount < 7) {
            $('.load-more-button').addClass('load-more-only-button');
            $('.load-less-button').hide('duration: 600');
        }
    });
}

