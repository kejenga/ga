//create variables
//Get all the images
//Pile them in an array to loop through
//vairable to hold th index postion
//functions:
//function to Skip - +1
//function to Back - -1
//
//Instead of hide and and reveal function, update the attribute 
//Create two events- Back and Skip
//to target each image in each event use the +1 and -1 value
//Upon reaching end of carousel, stop the carousel 
//using lenght of array

$(document).ready(function(){

	var votedImg = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg", "images/food5.jpg", "images/food6.jpg", "images/food7.jpg", "images/food8.jpg"]
	var storeIndex = 0


	var changeImg = function (){
		$("img").attr("src", votedImg[storeIndex]);
	};

	function nextImg() {
;

		if (storeIndex < votedImg.length){
			storeIndex++;
			console.log(votedImg[storeIndex]);
			// $("img").attr("src", votedImg[storeIndex])
			changeImg();
		};

	};

	function prevImg() {
		storeIndex--;
		console.log(votedImg[storeIndex]);
		$("img").attr("src", votedImg[storeIndex]);
		
	};
	


	$("#buttons-wrapper .btn[value='Skip']").on("click", nextImg);
	$("#buttons-wrapper .btn[value='Back']").on("click", prevImg);


});
