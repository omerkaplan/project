
//This section will minize the header when scolling and tuck it in nicely after.

$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos = 300;
    if(y_scroll_pos > scroll_pos) {
        $('.page-header').css({
          'padding':'0.5rem 2rem 0.5rem 2rem',
          'position':'fixed',
          'width':'100%'
        });
        $('.project-name').css({
          'font-size':'1.5rem',
          'text-align':'left'
        });
        $('.project-tagline').hide();
        $('.main-content').css('padding-top','80px');
    }
    if(y_scroll_pos < scroll_pos)  { //locks the header to top after minimizing
     $('.page-header').css('position','top');
  }
});

// Next cool thing goes below
