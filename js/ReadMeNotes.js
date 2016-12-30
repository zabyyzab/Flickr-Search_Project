// ids used in html:
// <input> id = "keyword"
// <button> id = "search"
// <div> id = "feed"



/*

1 • Flickr API Key used in Challenge 16 example:
http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags='+{your_search_term_here}+'&jsoncallback=?
------

1 is operating  with no security, and 1.1 is. http vs https. Will this cause conflicts?

----

1.1 • Flickr API Key grabbed from API Explorer:
https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e94a48f54f962ad2d1887601e0c7012&tags=cat&safe_search=1&per_page=25&format=json&nojsoncallback=1

------

2 •• Flickr API Key grabbed from API Explorer with tags edited:
https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e94a48f54f962ad2d1887601e0c7012&tags=' +{your_search_term_here}+ '&safe_search=1&per_page=25&format=json&nojsoncallback=1

My Flickr API key: 9e94a48f54f962ad2d1887601e0c7012
My Flickr Secret Key: 7f184b1aedf7bb6b


------

3 ••• Regarding this section in the URL:
'+{your_search_term_here}+'
Replace the {your_search_term_here} for the tag URI parameter with your variable holding the users search term.
The id "keyword" will hold the text the user has inputed, and place it in the search term.


------

4 •••• It is suggested that you use jQuery's $.getJSON() method described here: http://api.jquery.com/jQuery.getJSON/
  
  Function: jQuery.getJSON( url [, data ] [, success ] )
  
  Description of $.getJSON() method: Load JSON-encoded data from the server using a GET HTTP request.
  
NOTES on JQuery:

*** By default, jQuery uses "$" as a shortcut for "jQuery"
    So, using $("#id") or jQuery("#id") is the same.

NOTES on .get():

*** 


---------------


5 ••••• What's this function do exactly? Let's explain it:

$(document).ready(function(){

***A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. 
Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) 
is ready for JavaScript code to execute.

***Code included inside $( window ).load(function() { ... }) will run once 
the entire page (images or iframes), not just the DOM, is ready.

*/

//You can think of this as a jQuery's version of window.onload function
//the DOMContentLoaded in most browsers, but we don't need to worry about this at all because jQuery takes care of this for us internally.



    // Define the entry point
    $(document).ready(function()
    {
        // The DOM (document object model) is constructed
        // We will initialize and run our plugin here
    }
</script>


$(document).ready(function(){
  
  var FlickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e94a48f54f962ad2d1887601e0c7012&tags=cat&safe_search=1&per_page=25&format=json&nojsoncallback=1";
  $.getJSON(FlickrAPI);

});

  
  