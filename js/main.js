
$('.hamburger-menu button').click(function () {
    $('.hamburger-menu').toggleClass('active');
    $('.navbar-wrapper').toggleClass('active');
});

$('.nav-link').click(function () {
    $(this).siblings().toggleClass('active');
    $(this).children().toggleClass('active');
})