$(function() {
    $(".ripple-button > a").on('mouseenter', function(e) {
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("span").css({
        top: y,
        left: x
      });
    });
    $(".ripple-button > a").on('mouseout', function(e) {
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("span").css({
        top: y,
        left: x
      });
    });
    $(".ripple-button > button").on('mouseenter', function(e) {
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("span").css({
        top: y,
        left: x
      });
    });
    $(".ripple-button > button").on('mouseout', function(e) {
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("span").css({
        top: y,
        left: x
      });
    });
  });