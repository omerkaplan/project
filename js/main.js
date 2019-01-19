
// Dark mode

function setDarkMode(){
  $("body").toggleClass("body-darkmode");
  $(".post-meta-subtitle").toggleClass("post-meta-darkmode");
  $(".post-meta").toggleClass("post-meta-darkmode");
  $(".post-name").toggleClass("post-name-darkmode");
  $(".post-info-homepage").toggleClass("post-name-darkmode ");
  $(".post-info").toggleClass("post-name-darkmode ");
  $("h3").toggleClass("h3-darkmode");
  $("h2").toggleClass("h2-darkmode");
  $("th").toggleClass("th-darkmode");
  $(".latest-posts").toggleClass("latest-posts-darkmode");
  $(".bottom-navigation").toggleClass("bottom-navigation-darkmode");
  $("a").toggleClass("a-darkmode");
};

$(document).ready(function() {

  $('#dark-mode-checkbox').click(function() {
    if($(this).is(':checked')) {
      console.log('Dark!');
      Cookies.set('theme', 'dark', { expires: 365 });
      setDarkMode()
    } else {
      console.log('Light!');
      Cookies.set('theme', 'null', { expires: 365 });
      setDarkMode()
    }
});

if (Cookies.get('theme') == 'dark'){
  $('#dark-mode-checkbox').prop('checked', true);
  setDarkMode()
}




}); //EOF
