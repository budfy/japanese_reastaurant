$(function(){

  $(window).scroll(function() {
    if($(this).scrollTop() >= window.innerHeight / 2) {
        $('.header').addClass('scrolled');
        $('.header__logo>a>img').removeClass('off');
    }
    else{
        $('.header').removeClass('scrolled');
        $('.header__logo>a>img').addClass('off');
    }
  });

  $(function() {

    $('input, select').styler({
      locale: 'en',
    });
  
  });

});