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

  var Menu = {
  
    el: {
      ham: $('.menu__burger'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom'),
      nav: $('.mobile__nav')
    },
    
    init: function() {
      Menu.bindUIactions();
    },
    
    bindUIactions: function() {
      Menu.el.ham
          .on(
            'click',
          function(event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
    },
    
    activateMenu: function() {
      Menu.el.menuTop.toggleClass('menu-top-click');
      Menu.el.menuMiddle.toggleClass('menu-middle-click');
      Menu.el.menuBottom.toggleClass('menu-bottom-click');
      Menu.el.nav.toggleClass('active');
    }
  };
  
  Menu.init();

});