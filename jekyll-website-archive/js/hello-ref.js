/* This script will check the URL for any mention of "Ref" and return that
value so we can use it to track the source in a JSON file. No matter where
the "Ref" mention is in the URL we will be able to tack it. You can change
the value of "ref" by changhing the "refValue" string.
example: http://www.example.com/?Ref=producthunt */

$(document).ready(function(){

var baseurl = $(location).attr('href');
var refValue = 'ref'; // change here if "ref" is "referral" or whatev
var urlSplit = '';
var refArray = '';
var ref = '';

urlSplit = baseurl.split(refValue+'=');
refArray = urlSplit.splice(1); //removing the first part of the URL
refArray = refArray.toString().toLowerCase();
refArray = refArray.split('&'); //removing any other "&"'s after the ref
var ref = refArray[0]; // the good stuff



/* ---------------------------------------------------------------------- */
/* Hello ref HTML manipulation based on ref                               */
/* ---------------------------------------------------------------------- */

switch (ref) {

  case 'facebook': //define ref here
        $('.hello-ref').show();
        $('.hello-ref').addClass('hello-ref-facebook');
        $('.hello-ref-text').text('Hi Facebook people 👋 this text is brought to you by Hello-Ref plugin');
        break;

  case 'twitter':
        $('.hello-ref').show();
        $('.hello-ref').addClass('hello-ref-twitter');
        $('.hello-ref-text').text('Hi Twitter people 👋 this text is brought to you by Hello-Ref plugin. Nothing fancy to say, yet.');
        break;

  case 'github':
        $('.hello-ref').show();
        $('.hello-ref').addClass('hello-ref-github');
        $('.hello-ref-text').text('Hi Github people 👋 this text is brought to you by Hello-Ref plugin');
        break;

  case 'krush':
        $('.hello-ref').show();
        $('.hello-ref').addClass('hello-ref-krush');
        $('.hello-ref-text').text('Hi Krush tech people 👋 this text is brought to you by Hello-Ref plugin');
        break;
}

}) //end of js file
