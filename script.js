/* scripts for jQuery Demo */

$(document).ready(function(){

	$("img").hide();
	$(".special").fadeIn("slow");

	let imgCycle= 1;

	$(".special").click(function(){
//		$(this).css("background-color", "purple");
//		$(this).attr("src","pictures/4.jpg");

//		IMGCYCLE AND EVERYTHING BELOW THIS ALLOWS YOU TO CYCLE AND LOOP THROUGH YOUR IMAGES
		
		if (imgCycle <8) {
			$(this).attr("src","pictures/"+imgCycle+".jpg");
			imgCycle++;
		} else {
			$(this).attr("src","pictures/"+imgCycle+".jpg");
			imgCycle=1;
		}
	});

//		THE CODE FOR CYCLING THROUGH IMAGES ENDS HERE

	$(".special").hover(function(){
		$(this).attr("src", "pictures/5.jpg");
	});

	$(".imgAdder").click(function(){
		$(".end").append("<img src='pictures/8.jpg' class='special'>");
	});
})