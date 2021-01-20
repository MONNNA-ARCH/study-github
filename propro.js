$( document).ready (function(){
	//Hover effect for H1 ELEMENT
	$ (":JUMBOTRON H1") . hover (function() {
	$ (This ).css({

	  "color": "teal"
	  "background-color": "gold")
	});

	$("div.jumbotron").click(function(){
		 $(this).find("p").css("color","red"):
	})

	$(".card-img-top").click(function(){
		$(this),parents(".card").find(",card-body").hide();
		$(this),parents(".card").find(",card-body").toggle();
		$(this),parents(".card").find(",card-body").fadeToggle(3000);
		$(this),parents(".card").find(",card-body").slideToggle(3000);
	});


	$("#more-cats").click(function(){
      for (i=0; i<8; i++) {
      	 console.log("i equals "+ i);
      }
		$("#cats-container").append("<p>More Cats<p>")
	})
	
}

