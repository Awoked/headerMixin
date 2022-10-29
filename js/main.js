
$('.hamburger-menu button').click(()=>{
    $('.hamburger-menu').toggleClass('active');
    $('.navbar-wrapper').toggleClass('active');
});
$('.nav-link').click(()=> {
    $(this).siblings().toggleClass('active');
    $(this).children().toggleClass('active');
});