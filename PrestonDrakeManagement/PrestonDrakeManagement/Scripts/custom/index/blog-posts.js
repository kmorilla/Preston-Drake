
function loadMore() {
    var count = $(".blog-post").length;

    $.post("/Home/BlogPosts", { count: count }, function(data) {
        $(".blog-posts-refresh").html(data);
    });
}