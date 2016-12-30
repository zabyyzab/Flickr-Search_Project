$(document).ready(function() {
	$("#button").click(function() {
		var searchinput = $("#searchtag").val();
		var flickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e94a48f54f962ad2d1887601e0c7012&tags=" + searchinput + "&safe_search=1&per_page=25&page=1&format=json&nojsoncallback=1";
		$.getJSON(flickrAPI, function(jsonitem) {
			$.each(jsonitem.photos.photo, function(i, jsonitem) {
				var imageURL = "https://farm" + jsonitem.farm + ".staticflickr.com/" + jsonitem.server + "/" + jsonitem.id + "_" + jsonitem.secret + ".jpg";
					var regularImageURL = "https://farm" + jsonitem.farm + ".staticflickr.com/" + jsonitem.server + "/" + jsonitem.id + "_" + jsonitem.secret + "_h.jpg";
					$("#feed").justifiedGallery(){
					$("feed").append("<div id='mygallery'>" + 
					"<a href=" + regularImageURL + ">" +
					"<img src=" + imageURL + ">" +
					"</a>" +
					"</div>"
                           )};
					console.log(i, jsonitem);
				});
		});
		
		$("#searchtag").val(""); //clear input field on reload
		$('#feed').html(""); //clear feed div on reload
		});
});