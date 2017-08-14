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

  $('.worksNav li').on('click', function(){
    $('.worksNav li').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  mixitup($('.worksWrapper'));

  $(function () {
  $('.navbar-collapse a, .header-logo a').click(function() {
    if (!$(this).hasClass('dropdown-toggle')) {
      $('.navbar-collapse').collapse('hide');
    }
  });
  return false;
});
  
});
