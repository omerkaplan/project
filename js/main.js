
//This section will minize the header when scolling and tuck it in nicely after.

$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos = 300;
    if(y_scroll_pos > scroll_pos) {

      $('.page-header').hide();
      $('.hello-ref').hide();
      $('.page-header-scroll').slideDown('fast');
      $('.main-content').css('padding-top','80px');
    };

});

// Next cool thing goes below
