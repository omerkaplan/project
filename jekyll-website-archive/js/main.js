
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
  $(".category-info").toggleClass("category-info-darkmode");

};

$(document).ready(function() {

  Cookies.set('theme', 'dark', { expires: 365 });

  $('#dark-mode-checkbox').click(function() {
    if($(this).is(':checked')) {
      Cookies.set('theme', 'dark', { expires: 365 });
      setDarkMode()
    } else {
      Cookies.set('theme', 'null', { expires: 365 });
      setDarkMode()
    }
});

if (Cookies.get('theme') == 'dark'){
  $('#dark-mode-checkbox').prop('checked', true);
  setDarkMode()
}




}); //EOF
