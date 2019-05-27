$(function () {
    $('.open-menu').click(function () {
        $('.open-menu').addClass('hide-menu').removeClass('hamburger-menu-button show-menu');
        $('.close-menu').addClass('hamburger-menu-button').css("display", "block");
        $('.menu-popup').fadeIn('slow').removeClass('hide-menu');
        $('.menu-popup').addClass('show-menu');

    });
    $('.close-menu').click(function () {
        $('.open-menu').addClass('hamburger-menu-button open-menu').removeClass('hide-menu');
        $('.close-menu').addClass('hide-menu close-menu').removeClass('hamburger-menu-button');
        $('.menu-popup').fadeOut('fast').removeClass('show-menu');
        $('.menu-popup').addClass('hide-menu');
    });

    $(".brand-letter").click(function () {
        $(".brand-letter").removeClass("active");
        $(this).addClass("active");
        var letter = $(this).attr("data-letter");
        $("html, body").animate({ scrollTop: $("div[data-letter='" + letter + "']").offset().top - 50 }, 1000);
    });

    $(".scrollA, .menu-popup ul li a, .links a").click(function () {
        var rel = $(this).attr("data-rel");
        var containerTop = $("." + rel).offset().top;
        $("html").animate({ "scrollTop": containerTop }, 900);
    });

    $(".button").click(function () {
        $('.message').addClass('show-message');
    })
});