/*

Testing different functions now with established getjson() code for FLickr API.

Below is the unchanged code I have written:

$(document).ready(function() {
			$("#button").click(function() {
				var flickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e94a48f54f962ad2d1887601e0c7012&tags=cars&safe_search=1&per_page=25&page=1&format=json&nojsoncallback=1";
				$.getJSON(flickrAPI, function(jsonitem) {
					$.each(jsonitem.photos.photo, function(i, jsonitem) {
						var imageURL = "https://farm" + jsonitem.farm + ".staticflickr.com/" + jsonitem.server + "/" + jsonitem.id + "_" + jsonitem.secret + ".jpg";
						$("#feed").append("<img src=" + imageURL + "/>");
					});
				});
			});
});

*/

$(document).ready(function() {
	$("#button").click(function() {
		var searchinput = $("#searchtag").val();
		var flickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e94a48f54f962ad2d1887601e0c7012&tags=" + searchinput + "&safe_search=1&per_page=25&page=1&format=json&nojsoncallback=1";
		$.getJSON(flickrAPI, function(jsonitem) {
			$.each(jsonitem.photos.photo, function(i, jsonitem) {
				var imageURL = "https://farm" + jsonitem.farm + ".staticflickr.com/" + jsonitem.server + "/" + jsonitem.id + "_" + jsonitem.secret + ".jpg";
				$("#feed").append("<img src=" + imageURL + "/>");
				if (i === 25) {
					$('#searchtag').val("");
					$('#feed').html("");
					return false;
				}
			});
		});
	});
});

 $(document).ready(function(){
    //See if our streamer is online or offline
        $('#getyourstreamer').click(function(){
            var yourstreamer = $('#yourstreamer').val();
            var yourstreamerURL = 'https://api.twitch.tv/kraken/streams/' + yourstreamer;

            $.getJSON(yourstreamerURL, function(data){

                if(data.stream === null) {
                    $('#streamerStatus').html(yourstreamer + " is currently offline");
                } else {
                    $('#streamerStatus').html(yourstreamer + " is currently online");
                }
            }); 

            $('#yourstreamer').val(''); //clear input field on reload

        });
});