$(function()
{
  $('a.page-scroll').bind('click', function(event)
  {
      $('html, body').stop().animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });

  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

  $('#main-nav').affix({
      offset: {
          top: 100
      }
  })

  new WOW().init();
});
