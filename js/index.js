$(document).ready(function(){

    //mobile navbar initialization
    $(".button-collapse").sideNav();

    //parallax initialization
    $('.parallax').parallax();

    //smooth scrolling for navbar links
    $(".nav-wrapper li a").click(function(){
        var adress = $(this).attr("href");
        $("html, body").animate({scrollTop: $(adress).offset().top});
    })

    //As above for mobile side-nav
    $(".side-nav li a").click(function(){
        var adress = $(this).attr("href");
        $("html, body").animate({scrollTop: $(adress).offset().top});
    })
});