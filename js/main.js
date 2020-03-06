$(function(){
  $('.slider__inner').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll:1,
    infinite: true,
    asNavFor:'.pictures',
    prevArrow:`<button class="slick-arrow slick-prev"><img src="images/previous.png" alt=""></button>
    `,
    nextArrow:`<button class="slick-arrow slick-next"><img src="images/next.png" alt=""></button>
    `
  });
$('.pictures').slick({
  slidesToScroll:1,
  infinite: true,
  asNavFor:'.slider__inner',
  focusOnSelect: true,
  variableWidth: true,
  arrows: false,
});


$('.burger__menu').on('click', function(){
  $('.header__menu ul').slideToggle();
});


});