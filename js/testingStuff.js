
      <img src="img_fjords.jpg" alt="Trolltunga Norway" width="300" height="200">
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>

<div class="responsive">
  <div class="img">
    <a target="_blank" href="img_fjords.jpg">
      <img src="img_fjords.jpg" alt="Trolltunga Norway" width="300" height="200">
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div>


var imageURL = "https://farm" + jsonitem.farm + ".staticflickr.com/" + jsonitem.server + "/" + jsonitem.id + "_" + jsonitem.secret + ".jpg";
					$("#feed").append("<div class='responsive'>");
					$("#feed").append("<div class='img'>")
					$("#feed").append("<a target='_blank' href=" + imageURL + ">");
					$("#feed").append("<img src=" + imageURL + " width='200' height='100'>");
					$("#feed").append("</a>");
					$("#feed").append("</div>");
					$("#feed").append("</div>");
					console.log(jsonitem);
				});
			});
			$("#searchtag").val(""); //clear input field on reload
			$('#feed').html(""); //clear feed div on reload
			
			
			
			
			
var divstyle = " <style> \
div.img { \
    border: 1px solid #ccc; \
} \
 \
div.img:hover { \
    border: 1px solid #777; \
} \
 \
div.img img { \
    width: 100%; \
    height: auto; \
} \
 \
div.desc { \
    padding: 15px; \
    text-align: center; \
} \
 \
* { \
    box-sizing: border-box; \
} \
 \
.responsive { \
    padding: 0 6px; \
    float: left; \
    width: 24.99999%; \
} \
 \
@media only screen and (max-width: 700px){ \
    .responsive { \
        width: 49.99999%; \
        margin: 6px 0; \
    } \
} \
 \
@media only screen and (max-width: 500px){ \
    .responsive { \
        width: 100%; \
    } \
} \
 \
.clearfix:after { \
    content: ""; \
    display: table; \
    clear: both; \
} \
</style>" ;