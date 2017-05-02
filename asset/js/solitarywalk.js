$(document).ready(function(){

  var stickyOffset = $('.wrapper-masthead').offset().top + $('.wrapper-masthead').height() - 50 ;
  
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){

    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }

    var sticky = $('.wrapper-masthead'),
        scroll = $(window).scrollTop();

    if (scroll >= stickyOffset) {
      sticky.addClass('fixed');
    }
    else {
      sticky.removeClass('fixed');
    }

  });

  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
});   