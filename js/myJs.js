$(document).ready(function() {
	flag = true;
	
	
	
	
	$("#mode").click(function(){
		
	if(flag){
		
		$("body").css("background-color", "black");
		$(".typo").css("background-color", "black");
		$(".btn_request").css("background-color", "black");
		$(".slider").css("border-color", "white");
		$(".btn_request").css("border-color", "white");
		$(".btn_request").css("color", "white");
		$(".slider").css("background-color", "black");
		
		 $("<style type='text/css'>.slider::-webkit-slider-thumb{background:rgb(255, 255, 255);  border-color: white;}</style>").appendTo($("head"));
		 $("<style type='text/css'>.slider::-moz-range-thumb{background:rgb(255, 255, 255);  border-color: white;}</style>").appendTo($("head"));
			
		$("#inputCaratteri").css("color", "white");
		
		// $("#mode").hide();
		flag = false;
		// $("#mode").replaceWith("<button id=\"idprova\" class=\"btn p-0\"><i  id=\"sunsun\" class='fas fa-bahai p-0' style='font-size:32px;color:white; cursor: pointer;'  ></i></button>");
		// $("#mode").replaceWith("<button id=\"sun\" type=\"button\" class=\"mt-0 btn_round \" ></button>");
	}
	else
	{
		
		$("body").css("background-color", "#E6E6E6");
		$(".typo").css("background-color", "#E6E6E6");
		$(".btn_request").css("background-color", "#E6E6E6");
		$(".slider").css("border-color", "black");
		$(".btn_request").css("border-color", "black");
		$(".btn_request").css("color", "black");
		$(".slider").css("background-color", "#E6E6E6");
		
		$("<style type='text/css'>.slider::-webkit-slider-thumb{background:rgb(0, 0, 0);  border-color: black;}</style>").appendTo($("head"));
		$("<style type='text/css'>.slider::-moz-range-thumb{background:rgb(0, 0, 0);  border-color: black;}</style>").appendTo($("head"));
		
		
		$("#inputCaratteri").css("color", "black");
		
		flag=true;
		
	}
		
		
	});
	
	$("#hello").click(function(){
		console.log("hello");
		$("body").css("background-color", "#E6E6E6");
		$(".typo").css("color", "#E6E6E6");
		$(".btn_request").css("background-color", "#E6E6E6");
		$(".slider").css("border-color", "black");
		$(".btn_request").css("border-color", "black");
		$(".btn_request").css("color", "black");
		$(".slider").css("background-color", "#E6E6E6");
		
		 $("<style type='text/css'>.slider::-webkit-slider-thumb{background:rgb(0, 0, 0);  border-color: white;}</style>").appendTo($("head"));
		 $("<style type='text/css'>.slider::-moz-range-thumb{background:rgb(0, 0, 0);  border-color: white;}</style>").appendTo($("head"));
			
		$("#inputCaratteri").css("color", "black");
		
		// $("#sun").hide();
		
		$("#sun").replaceWith("<button type=\"button\" class=\"mt-0 btn_round \" id =\"mode\"></button>");
	});
		
		
	$(this).on('input', '.slider2', function() {

		valeurdemonslider = $(this).val();
		$('.typo').find('.test').css("letter-spacing",valeurdemonslider+"px");

	});

	$(this).on('input', '.slider1', function() {

		valeurdemonslider = $(this).val();
		$('.typo').find('.test').css("font-size",valeurdemonslider+"pt");

	});
	
	
	
	
	
	
});