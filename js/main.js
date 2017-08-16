$(document).ready(function(){

    $('a').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
           window.location.hash = hash;
      });
    } 
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scroll_to_top').fadeIn();
    } else {
      $('.scroll_to_top').fadeOut();
    }
  });
  
  $('.scroll_to_top').click(function(){
    $('html, body').animate({scrollTop : 0}, 1000);
    return false;
  });

  $('.bxslider').bxSlider();

  mixitup($('.worksWrapper'));

  $(function () {
  $('.iconMenu').click(function() {
      if (!$('.menuMobile').hasClass('active')) {
        $('.menuMobile').addClass('active');
        $('.iconMenu>a').html('&times;');
      } else {
          $('.menuMobile').removeClass('active');
          $('.iconMenu>a').html('&#9776;');
          
      }
  });
  return false;
});

  $('.item').click(function() {
    $('.menuMobile').removeClass('active');
    $('.iconMenu>a').html('&#9776;');
  })

   
  
});
