$(document).ready(function(){

  var stickyOffset = $('.sticky-masthead').offset().top + $('.sticky-masthead').height() + 100;
  
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){

    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }

    var sticky = $('.sticky-masthead'),
        scroll = $(window).scrollTop();

    if (scroll >= stickyOffset) {
      sticky.show();
      sticky.addClass('fixed');
    }
    else {
      sticky.hide();
      sticky.removeClass('fixed');
    }

  });

  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
});   