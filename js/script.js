$(function() {

    /* ---------------------------------

    ハンバーガーメニュー

    --------------------------------- */
    $("#toggle").click(function() {
        $(this).toggleClass("active");

        if ($(this).hasClass("active")) {
            $(".toggle-menu").addClass("active");
        } else {
            $(".toggle-menu").removeClass("active");
        }
    });

    $(".toggle-menu__link").click(function() {
        $(".toggle-menu, .toggle").removeClass("active");
    });


    /* ---------------------------------

    スマホでのクリック対応

    --------------------------------- */
$(function () {
    // hover
    var userAgent = navigator.userAgent;
    var item = $("a").add("button");

    if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
        item.on("touchstart", function () {
            $(this).addClass("hover");
        });
        item.on("touchend", function () {
            $(this).removeClass("hover");
        });
    } else {
        item.hover(
            function () {
                $(this).addClass("hover");
            },
            function () {
                $(this).removeClass("hover");
            }
        );
    }
});