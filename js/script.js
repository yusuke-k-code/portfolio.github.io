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

